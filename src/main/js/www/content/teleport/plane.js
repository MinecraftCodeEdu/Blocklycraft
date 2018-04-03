/**
 * Blockly Demos: Plane Seat Calculator
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
 * @fileoverview JavaScript for Blockly's Plane Seat Calculator demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Plane = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Plane.LANGUAGE_NAME = {
  'en': 'English',
  'ko': '한국어'
};

/**
 * List of RTL languages.
 */
Plane.LANGUAGE_RTL = ['ar', 'fa', 'he'];

/**
 * Main Blockly workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Plane.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Plane.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Extracts a numeric parameter from the URL.
 * If the parameter is absent or less than min_value, min_value is
 * returned.  If it is greater than max_value, max_value is returned.
 * @param {string} name The name of the parameter.
 * @param {number} minValue The minimum legal value.
 * @param {number} maxValue The maximum legal value.
 * @return {number} A number in the range [min_value, max_value].
 */
Plane.getNumberParamFromUrl = function(name, minValue, maxValue) {
  var val = Number(Plane.getStringParamFromUrl(name, 'NaN'));
  return isNaN(val) ? minValue : Math.min(Math.max(minValue, val), maxValue);
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Plane.getLang = function() {
  var lang = Plane.getStringParamFromUrl('lang', '');
  if (Plane.LANGUAGE_NAME[lang] === undefined) {
    // Default tio English.
    lang = 'ko';
  }
  return lang;
};

/**
 * Is the current language (Plane.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Plane.isRtl = function() {
  return Plane.LANGUAGE_RTL.indexOf(Plane.LANG) != -1;
};


/**
 * Load blocks from local file.
 */
Plane.loadxml = function() {
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
      Code.workspace.clear();
      Blockly.Xml.domToWorkspace(Code.workspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('loadxml').value = '';
  };
  reader.readAsText(files[0]);
};


/**
 * Load blocks saved in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Plane.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(xml, Plane.workspace);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(xml, Plane.workspace);
  }
  Plane.workspace.clearUndo();
};



/**
 * Save the blocks and reload with a different language.
 */
Plane.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // This should be skipped for the index page, which has no blocks and does
  // not load Blockly.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (typeof Blockly != 'undefined' && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Plane.workspace);
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
Plane.bindClick = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};


/**
 * Gets the message with the given key from the document.
 * @param {string} key The key of the document element.
 * @return {string} The textContent of the specified element,
 *     or an error message if the element was not found.
 */
Plane.getMsg = function(key) {
  var element = document.getElementById(key);
  if (element) {
    var text = element.textContent;
    // Convert newline sequences.
    text = text.replace(/\\n/g, '\n');
    return text;
  } else {
    return '[Unknown message: ' + key + ']';
  }
};


/**
 * User's language (e.g. "en").
 * @type {string}
 */
Plane.LANG = Plane.getLang();

Plane.MAX_LEVEL = 10;
Plane.LEVEL = Plane.getNumberParamFromUrl('level', 1, Plane.MAX_LEVEL);

Plane.selected = 'javascript'

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Plane.tabClick = function (clickedName) {

    // Select the active tab.
    Plane.selected = clickedName;
    //document.getElementById('tab_' + clickedName).className = 'tabon';
    document.getElementById('tab_' + clickedName).onclick = function() {
      document.getElementById('content_' + clickedName).style.visibility = 'visible';
      Plane.renderContent();
    }

};


/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Plane.renderContent = function() {
  var code;
  var content = document.getElementById('content_' + Plane.selected);

  if (content.id == 'content_xml') {
        var xmlTextarea = document.getElementById('content_xml');
        var xmlDom = Blockly.Xml.workspaceToDom(Plane.workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        xmlTextarea.value = xmlText;
        xmlTextarea.focus();
    } else if (content.id == 'content_javascript') {
        code = Blockly.JavaScript.workspaceToCode(Plane.workspace);
        content.textContent = code;
        if (typeof prettyPrintOne == 'function') {
            code = content.innerHTML;
            code = prettyPrintOne(code, 'js');
            content.innerHTML = code;
        }
    }

};


/**
 * Initialize Blockly and the SVG plane.
 */
Plane.init = function() {
  Plane.initLanguage();

  // Fixes viewport for small screens.
  var viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && screen.availWidth < 725) {
    viewport.setAttribute('content',
        'width=725, initial-scale=.35, user-scalable=no');
  }

  Plane.workspace = Blockly.inject('blockly', {
       media: '../../google-blockly/media/',
       rtl: Plane.isRtl(),
       toolbox: document.getElementById('toolbox'),
       zoom: { 
	   controls: true,
	   wheel: false
       },
       scrollbars: true,
       trashcan: true,
       maxBlocks: Infinity,
       sounds: true,
       collapse: true,
  });

  var loadInput = document.getElementById('loadxml');
    loadInput.addEventListener('change', Plane.loadxml, false);
    document.getElementById('fakeload').onclick = function() {
      loadInput.click();
    };


  var defaultXml =
      '<xml>' +
      '  <block type="drone" deletable="false" x="70" y="70">' +
      '  </block>' +
      '</xml>';
  Plane.loadBlocks(defaultXml);

  Plane.tabClick(Plane.selected);

  Plane.bindClick('deployButton', function () {
        var jscode = Blockly.JavaScript.workspaceToCode(Plane.workspace);
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
  Plane.bindClick('trashButton',
        function () {
            Plane.discard();
            //Plane.renderContent();
        });


};

/**
 * Initialize the page language.
 */
Plane.initLanguage = function() {
  // Set the page title with the content of the H1 title.
  document.title += ' ' + document.getElementById('title').textContent;

  // Set the HTML's language and direction.
  // document.dir fails in Mozilla, use document.body.parentNode.dir instead.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=151407
  var rtl = Plane.isRtl();
  document.head.parentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.head.parentElement.setAttribute('lang', Plane.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Plane.LANGUAGE_NAME) {
    languages.push([Plane.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Plane.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Plane.changeLanguage, true);
};

/**
 * Discard all blocks from the workspace.
 */
Plane.discard = function () {
    var count = Plane.workspace.getAllBlocks().length;
    if (count < 2 ||
        window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
        Plane.workspace.clear();
        if (window.location.hash) {
            window.location.hash = '';
        }
    }
};

window.addEventListener('load', Plane.init);

// Load the user's language pack.
document.write('<script src="generated/' + Plane.LANG + '.js"></script>\n');

