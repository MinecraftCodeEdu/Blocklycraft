// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof planepage == 'undefined') { var planepage = {}; }


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"></div>';
};


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = planepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title">Minecraft Building Lesson</span> &nbsp; ';
  var iLimit10 = opt_ijData.maxLevel + 1;
  for (var i10 = 1; i10 < iLimit10; i10++) {
    output += ' ' + ((i10 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i10) + '</span>' : (i10 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i10) + '">' + soy.$$escapeHtml(i10) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i10) + '">' + soy.$$escapeHtml(i10) + '</a>');
  }
  output += '</h1></td><td class="farSide"><span ' + ((opt_ijData.lang == 'en') ? 'id="languageBorder"' : '') + ' style="padding: 10px"><select id="languageMenu"></select></span></td></tr></table><link rel="stylesheet" href="../../google-blockly/demos/code/style.css"><p>';
  switch (opt_ijData.level) {
    case 1:
      output += ' <img src="photo/cube.jpg" height="200" width="200">  ';
      break;
    case 2:
      output += ' <img src="photo/pyramid.jpg" height="200" width="200"> ';
      break;
    case 3:
      output += ' <img src="photo/building.jpg" height="200" width="200"> ';
      break;
  }
  output += '</p><p> 위의그림처럼 만들어 보시오. <button id="deployButton" class="notext primary" title="..."><img src=\'../../google-blockly/media/1x1.gif\' class="run icon21"></button><button id="trashButton" class="notext" title="..."><img src=\'../../google-blockly/media/1x1.gif\' class="trash icon21"></button></p><script src="../../google-blockly/blockly_compressed.js"><\/script><script src="../../google-blockly/blocks_compressed.js"><\/script><script src="../../google-blockly/javascript_compressed.js"><\/script><script src="../../google-blockly/msg/js/' + soy.$$escapeHtml(opt_ijData.lang) + '.js"><\/script><script src="../../msg/js/' + soy.$$escapeHtml(opt_ijData.lang) + '.js"><\/script><script src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
  return output;
};


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="drone"></block><block type="rectangle"></block>' + ((opt_ijData.level > 1) ? '<block type="drone_move"></block>' + ((opt_ijData.level > 2) ? '<block type="controls_repeat_ext"></block>' + ((opt_ijData.level > 3) ? '<block type="prism"></block>' : '') : '') : '') + '</xml>';
};
