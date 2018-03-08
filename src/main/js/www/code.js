/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
    'ko': '한국어',
	'en': 'English'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function (name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function () {
    var lang = Code.getStringParamFromUrl('lang', '');
    if (Code.LANGUAGE_NAME[lang] === undefined) {
        // Default to English.
        lang = 'ko';
    }
    return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function () {
    return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};


/**
 * Loads an XML file from the server and replaces the current blocks into the
 * Blockly workspace.
 * @param {!string} xmlFile Server location of the XML file to load.
 */
Code.loadServerXmlFile = function(xmlFile) {
  var loadXmlfileAccepted = function() {
    // loadXmlBlockFile loads the file asynchronously and needs a callback
    var loadXmlCb = function(sucess) {
      if (sucess) {
        Code.renderContent();
      }
    };
    Code.loadXmlBlockFile(xmlFile, loadXmlCb);
  };

  if (Code.isWorkspaceEmpty()) {
    loadXmlfileAccepted();
  }
};

/** @return {!boolean} Indicates if the Blockly workspace has blocks. */
Code.isWorkspaceEmpty = function() {
  return Code.workspace.getAllBlocks().length ? false : true;
};

Code.loadXmlBlockFile = function(xmlFile, cbSuccess) {
  var request = Code.ajaxRequest();
  var requestCb = function() {
    if (request.readyState == 4) {
      if (request.status == 200) {
        var success = Code.loadBlocks(request.responseText);
        cbSuccess(success);
      }
    }
  };
  request.open('GET', xmlFile, true);
  request.onreadystatechange = requestCb;
  request.send(null);
};


/** @return {XMLHttpRequest} An XML HTTP Request multi-browser compatible. */
Code.ajaxRequest = function() {
  var request;
  try {
    // Firefox, Chrome, IE7+, Opera, Safari
    request = new XMLHttpRequest();
  } catch (e) {
    try {
      // IE6 and earlier
      request = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        request = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        throw 'Your browser does not support AJAX';
        request = null;
      }
    }
  }
  return request;
};


/*
** Open Prompt while saving xml file
*/
function filePrompt() {

/*
       var filename = "";

       for(var i =0; i< getNameBlock().block; i++) {
         filename = filename.concat(getNameBlock().getFieldValue('param'));
       }
*/
    var filename = getNameBlock();
    if (filename == "") {
      var filename = "untitled";
    }
    var filename = prompt("Please enter file name:", filename);
    if (filename == null || filename == "") {
        return;
    } else {
        Code.savexml(filename);
    }
}


/**
 * Find Block Name
 */

/* Old Function */
function getNameBlock() {
  var blocks = Code.workspace.getTopBlocks(false);
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'drone' || block.type == 'inventory') {
      return block;
    }
  }
  return null;
}
/* New Function */
function getNameBlock() {
  var blocks = Code.workspace.getTopBlocks(false);
  var namestring = "";
  for (var i = 0, block; block = blocks[i]; i++) {
    if (block.type == 'drone' || block.type == 'inventory') {
      namestring = namestring.concat(block.getFieldValue('param')) + "&";
    }
  }
  namestring = namestring.slice(0, -1);
  return namestring;
}


/**
 * Save blocks to local file.
 */
Code.savexml = function(filename) {
  var xml = Blockly.Xml.workspaceToDom(Code.workspace);
  var data = Blockly.Xml.domToText(xml);
  // Store data in blob.
  var builder = new BlobBuilder();
  builder.append(data);

  saveAs(builder.getBlob('text/plain;charset=utf-8'), filename + '.xml');

/*
  var nameblock = getNameBlock();
  try {
    saveAs(builder.getBlob('text/plain;charset=utf-8'), nameblock.getFieldValue('param') + '.xml');
  } catch(err) {
    saveAs(builder.getBlob('text/plain;charset=utf-8'), 'untitle.xml');
  }
*/

};

/**
 * Load blocks from local file.
 */
Code.loadxml = function() {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }
  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert('Error parsing XML:\n' + e);
        return;
      }
      var count = Code.workspace.getAllBlocks().length;
      if (count && alert('The XML file was not successfully parsed into blocks. \n Please review the XML code and try again.', 'Invalid XML')) {
        Code.workspace.clear();
      }
      Blockly.Xml.domToWorkspace(Code.workspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('loadxml').value = '';
  };
  reader.readAsText(files[0]);
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function (defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        // An href with #key trigers an AJAX call to retrieve saved blocks.
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load.
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};

/**
 * Backup code blocks to localStorage.
 */
Code.backup_blocks = function() {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    window.localStorage.setItem('blocks', Blockly.Xml.domToText(xml));
  }
}

/**
 * Restore code blocks from localStorage.
 */
Code.restore_blocks = function() {
  if ('localStorage' in window && window.localStorage.blocks) {
    var xml = Blockly.Xml.textToDom(window.localStorage.blocks);
    Blockly.Xml.domToWorkspace(Code.workspace, xml);
  }
}

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function () {
    // Store the blocks for the duration of the reload.
    // This should be skipped for the index page, which has no blocks and does
    // not load Blockly.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (typeof Blockly != 'undefined' && window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Code.workspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(
        languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' +
        window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};


/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function () {
    //<link rel="stylesheet" href="../prettify.css">
    //<script src="../prettify.js"></script>
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'google-blockly/demos/prettify.css');
    document.head.appendChild(link);
    var script = document.createElement('script');
    script.setAttribute('src', 'google-blockly/demos/prettify.js');
    document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function (element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'javascript', 'php', 'python', 'dart', 'xml'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function (clickedName) {
    // If the XML tab was open, save and render the content.
    if (document.getElementById('tab_xml').className == 'tabon') {
        var xmlTextarea = document.getElementById('content_xml');
        var xmlText = xmlTextarea.value;
        var xmlDom = null;
        try {
            xmlDom = Blockly.Xml.textToDom(xmlText);
        } catch (e) {
            var q =
                window.confirm(MSG.badXml.replace('%1', e));
            if (!q) {
                // Leave the user on the XML tab.
                return;
            }
        }
        if (xmlDom) {
            Code.workspace.clear();
            Blockly.Xml.domToWorkspace(xmlDom, Code.workspace);
        }
    }

    if (document.getElementById('tab_blocks').className == 'tabon') {
        Code.workspace.setVisible(false);
    }
    // Deselect all tabs and hide all panes.
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        document.getElementById('tab_' + name).className = 'taboff';
        document.getElementById('content_' + name).style.visibility = 'hidden';
    }

    // Select the active tab.
    Code.selected = clickedName;
    document.getElementById('tab_' + clickedName).className = 'tabon';
    // Show the selected pane.
    document.getElementById('content_' + clickedName).style.visibility =
        'visible';
    Code.renderContent();
    if (clickedName == 'blocks') {
        Code.workspace.setVisible(true);
    }
    Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function () {
    var code;
    var content = document.getElementById('content_' + Code.selected);
    // Initialize the pane.
    if (content.id == 'content_xml') {
        var xmlTextarea = document.getElementById('content_xml');
        var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        xmlTextarea.value = xmlText;
        xmlTextarea.focus();
    } else if (content.id == 'content_javascript') {
        code = Blockly.JavaScript.workspaceToCode(Code.workspace);
        content.textContent = code;
        if (typeof prettyPrintOne == 'function') {
            code = content.innerHTML;
            code = prettyPrintOne(code, 'js');
            content.innerHTML = code;
        }
    } else if (content.id == 'content_python') {
        code = Blockly.Python.workspaceToCode(Code.workspace);
        content.textContent = code;
        if (typeof prettyPrintOne == 'function') {
            code = content.innerHTML;
            code = prettyPrintOne(code, 'py');
            content.innerHTML = code;
        }
    } else if (content.id == 'content_php') {
        code = Blockly.PHP.workspaceToCode(Code.workspace);
        content.textContent = code;
        if (typeof prettyPrintOne == 'function') {
            code = content.innerHTML;
            code = prettyPrintOne(code, 'php');
            content.innerHTML = code;
        }
    } else if (content.id == 'content_dart') {
        code = Blockly.Dart.workspaceToCode(Code.workspace);
        content.textContent = code;
        if (typeof prettyPrintOne == 'function') {
            code = content.innerHTML;
            code = prettyPrintOne(code, 'dart');
            content.innerHTML = code;
        }
    }
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function () {
    Code.initLanguage();

    var rtl = Code.isRtl();
    var container = document.getElementById('content_area');
    var onresize = function (e) {
        var bBox = Code.getBBox_(container);
        for (var i = 0; i < Code.TABS_.length; i++) {
            var el = document.getElementById('content_' + Code.TABS_[i]);
            el.style.top = bBox.y + 'px';
            el.style.left = bBox.x + 'px';
            // Height and width need to be set, read back, then set again to
            // compensate for scrollbars.
            el.style.height = bBox.height + 'px';
            el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
            el.style.width = bBox.width + 'px';
            el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
        }
        // Make the 'Blocks' tab line up with the toolbox.
        if (Code.workspace && Code.workspace.toolbox_.width) {
            document.getElementById('tab_blocks').style.minWidth =
                (Code.workspace.toolbox_.width - 38) + 'px';
            // Account for the 19 pixel margin and on each side.
        }
    };

    window.addEventListener('resize', onresize, false);

    var toolbox = document.getElementById('toolbox');
    Code.workspace = Blockly.inject('content_blocks', {
        grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        media: 'google-blockly/media/',
        rtl: rtl,
        toolbox: toolbox,
        zoom: {
            controls: true,
            wheel: false
        }
    });

    // Add to reserved word list: Local variables in execution environment (runJS)
    // and the infinite loop detection function.
    Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

    Code.loadBlocks('');

    if ('BlocklyStorage' in window) {
        // Hook a save function onto unload.
        BlocklyStorage.backupOnUnload(Code.workspace);
    }

       // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(Code.restore_blocks, 0);
    // Hook a save function onto unload.
    Blockly.bindEvent_(window, 'unload', null, Code.backup_blocks);

    Code.tabClick(Code.selected);

    // Init load event.

    var loadInput = document.getElementById('loadxml');
    loadInput.addEventListener('change', Code.loadxml, false);
    document.getElementById('fakeload').onclick = function() {
      loadInput.click();
    };



    Code.bindClick('menu_example_house',
        function () {
          Code.loadServerXmlFile('example_xml/house.xml');
	});

    Code.bindClick('menu_example_building',
        function () {
          Code.loadServerXmlFile('example_xml/building.xml');
        });


    Code.bindClick('trashButton',
        function () {
            Code.discard();
            Code.renderContent();
        });

    Code.bindClick('deployButton', function () {
        var jscode = Blockly.JavaScript.workspaceToCode(Code.workspace);
        var titleRegexp = /command. '(.+)',/;
        var fname = titleRegexp.exec(jscode); //extract the name of the command
        if (fname === null) {
            alert(Blockly.Msg.MISSING_NAME);
        } else {
            //alert(jscode);
            var xhttp;
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    alert(Blockly.Msg.DEPLOY_SUCCESS);
                }
            };
            xhttp.open('POST', '/', true);
            xhttp.send(jscode);
        }
    });
    // Disable the link button if page isn't backed by App Engine storage.
    var linkButton = document.getElementById('linkButton');
    if ('BlocklyStorage' in window) {
        BlocklyStorage.HTTPREQUEST_ERROR = MSG.httpRequestError;
        BlocklyStorage.LINK_ALERT = MSG.linkAlert;
        BlocklyStorage.HASH_ERROR = MSG.hashError;
        BlocklyStorage.XML_ERROR = MSG.xmlError;
        Code.bindClick(linkButton,
            function () {
                BlocklyStorage.link(Code.workspace);
            });
    } else if (linkButton) {
        linkButton.className = 'disabled';
    }

    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        Code.bindClick('tab_' + name,
            function (name_) {
                return function () {
                    Code.tabClick(name_);
                };
            } (name));
    }
    onresize();
    Blockly.svgResize(Code.workspace);
    // Lazy-load the syntax-highlighting.
//window.setTimeout(Code.importPrettify, 1);
};


/**
 * Initialize the page language.
 */
Code.initLanguage = function () {
    // Set the HTML's language and direction.
    var lang;
    var rtl = Code.isRtl();
    document.dir = rtl ? 'rtl' : 'ltr';
    document.head.parentElement.setAttribute('lang', Code.LANG);

    // Sort languages alphabetically.
    var languages = [];
    for (lang in Code.LANGUAGE_NAME) {
        languages.push([Code.LANGUAGE_NAME[lang], lang]);
    }
    var comp = function (a, b) {
        // Sort based on first argument ('English', 'Русский', '简体字', etc).
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        return 0;
    };
    languages.sort(comp);
    // Populate the language selection menu.
    var languageMenu = document.getElementById('languageMenu');
    languageMenu.options.length = 0;
    for (var i = 0; i < languages.length; i++) {
        var tuple = languages[i];
        lang = tuple[tuple.length - 1];
        var option = new Option(tuple[0], lang);
        if (lang == Code.LANG) {
            option.selected = true;
        }
        languageMenu.options.add(option);
    }
    languageMenu.addEventListener('change', Code.changeLanguage, true);

    // Inject language strings.
    document.title += ' ' + MSG.title;
    document.getElementById('title').textContent = MSG.title;
    document.getElementById('tab_blocks').textContent = MSG.blocks;
    document.getElementById('tab_javascript').textContent = MSG.javascript;
    document.getElementById('linkButton').title = MSG.linkTooltip;
    document.getElementById('deployButton').title = MSG.deployTooltip;
    document.getElementById('trashButton').title = MSG.trashTooltip;

    var categories = ['catLogic', 'catLoops', 'catMath', 'catText', 'catLists',
        'catColour', 'catVariables', 'catDrone', 'catInventory', 'catCoala'
    ];

    for (var i = 0, cat; cat = categories[i]; i++) {
        document.getElementById(cat).setAttribute('name', MSG[cat]);
    }
    var textVars = document.getElementsByClassName('textVar');
    for (var i = 0, textVar; textVar = textVars[i]; i++) {
        textVar.textContent = MSG.textVariable;
    }
    var listVars = document.getElementsByClassName('listVar');
    for (var i = 0, listVar; listVar = listVars[i]; i++) {
        listVar.textContent = MSG.listVariable;
    }
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function () {
    var count = Code.workspace.getAllBlocks().length;
    if (count < 2 ||
        window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
        Code.workspace.clear();
        if (window.location.hash) {
            window.location.hash = '';
        }
    }
};

// Load the Code demo's language strings.
document.write('<script src="msg/js/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="google-blockly/msg/js/' + Code.LANG + '.js"></script>\n');
window.addEventListener('load', Code.init);
