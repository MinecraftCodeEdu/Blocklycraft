code.js

    var save_button = document.getElementById('savefile');
    Code.bindClick(savefile, function(){
        var xml = Blockly.Xml.workspaceToDom(Code.workspace);
        var data = Blockly.Xml.domToText(xml);
        localStorage.setItem("jun", data);
    });

    var load_button = document.getElementById('loadfile');
    Code.bindClick(loadfile, function(){
        var data = localStorage.getItem("jun");
        var xml = Blockly.Xml.textToDom(data);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    });



/*
document.querySelector("#save").addEventListener("click", saveData, false);
document.querySelector("#load").addEventListener("click", loadData, false);

// 로컬저장소에 저장하기
function saveData(){
  var xml = Blockly.Xml.workspaceToDom(Code.workspace);
  var data = Blockly.Xml.domToText(xml);
  localStorage.setItem("jun", data);
}

// 로컬저장소에서 불러오기
function loadData(){
  var data = localStorage.getItem("jun");
  var xml = Blockly.Xml.textToDom(data);
  Blockly.Xml.domToWorkspace(xml, Code.workspace);

  window.setTimeout(BlocklyStorage.restoreBlocks, 0);
}
*/

