// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof planepage == 'undefined') { var planepage = {}; }


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Plane_drone">드론</span><span id="Plane_tooltip_drone">드론 객체 생성</span><span id="Plane_movement">움직임</span><span id="Plane_tooltip_dronemove">여러방법들에 따라 드론의 움직임을 제어할수있다.</span><span id="Plane_rectangle">직사각형</span><span id="Plane_tooltip_rectangle">건축물들을 짓는 편리한 방법.</span><span id="Plane_prism">각기둥</span><span id="Plane_tooltip_prism">피라미드모형이나 계단을 짓는 편리한 방법.</span><span id="Plane_movement_up">위로</span><span id="Plane_movement_down">아래로</span><span id="Plane_movement_fwd">앞으로</span><span id="Plane_movement_back">뒤로</span><span id="Plane_movement_right">오른쪽</span><span id="Plane_movement_left">왼쪽</span><span id="Plane_movement_turn_right">오른쪽으로 돌기</span><span id="Plane_movement_turn_left">왼쪽으로 돌기</span><span id="Plane_movement_backtostart">다시 시작하기</span><span id="Plane_movement_savestart">시작 저장하기</span><span id="Plane_empty">가득찬</span><span id="Plane_full">텅빈</span><span id="Plane_material">재료</span><span id="Plane_width">가로</span><span id="Plane_length">세로</span><span id="Plane_objnames[0]">공기</span><span id="Plane_objnames[1]">돌</span><span id="Plane_objnames[2]">잔디</span><span id="Plane_objnames[3]">흙</span><span id="Plane_objnames[4]">조약돌</span><span id="Plane_objnames[5]">참나무</span><span id="Plane_objnames[6]">어린참나무</span><span id="Plane_objnames[7]">기반암(배드록)</span><span id="Plane_objnames[8]">물</span><span id="Plane_objnames[9]">물 블록</span><span id="Plane_objnames[10]">용암</span><span id="Plane_objnames[11]">용암 블록</span><span id="Plane_objnames[12]">모래</span><span id="Plane_objnames[13]">자갈</span><span id="Plane_objnames[14]">금광석</span><span id="Plane_objnames[15]">철광석</span><span id="Plane_objnames[16]">석탄광석</span><span id="Plane_objnames[17]">나무</span><span id="Plane_objnames[18]">나뭇잎</span><span id="Plane_objnames[19]">스펀지</span><span id="Plane_objnames[20]">유리</span><span id="Plane_objnames[24]">모래돌</span><span id="Plane_objnames[26]">침대</span><span id="Plane_objnames[37]">민들레</span><span id="Plane_objnames[38]">장미꽃</span><span id="Plane_objnames[39]">갈색버섯</span><span id="Plane_objnames[40]">빨간버섯</span><span id="Plane_objnames[41]">금</span><span id="Plane_objnames[42]">철</span><span id="Plane_objnames[44]">판석</span><span id="Plane_objnames[47]">서재</span><span id="Plane_objnames[48]">이끼돌</span><span id="Plane_objnames[49]">흑요석</span><span id="Plane_objnames[51]">불</span><span id="Plane_objnames[56]">다이아몬드 광석</span><span id="Plane_objnames[57]">다이아몬드</span><span id="Plane_objnames[60]">농지</span><span id="Plane_objnames[66]">레일</span><span id="Plane_objnames[68]">표지판</span><span id="Plane_objnames[69]">레버</span><span id="Plane_objnames[79]">얼음</span><span id="Plane_objnames[80]">눈</span><span id="Plane_objnames[81]">선인장</span><span id="Plane_objnames[82]">점토</span><span id="Plane_objnames[83]">사탕수수</span><span id="Plane_objnames[85]">울타리</span><span id="Plane_objnames[86]">호박</span><span id="Plane_objnames[92]">케이크</span><span id="Plane_objnames[101]">쇠막대기</span><span id="Plane_objnames[103]">메론</span><span id="Plane_objnames[122]">드레곤 알</span><span id="Plane_objnames[127]">코코아</span><span id="Plane_objnames[129]">에메랄드 광석</span><span id="Plane_objnames[140]">화분</span><span id="Plane_objnames[141]">당근</span><span id="Plane_objnames[142]">감자</span><span id="Plane_objnames[152]">레드스톤</span><span id="Plane_objnames[170]">건초</span></div>';
};


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = planepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../menubar.js"><\/script><script type="text/javascript" src="../../BlobBuilder.min.js"><\/script><script type="text/javascript" src="../../FileSaver.min.js"><\/script><div id="main">  <!-- main id start --><div class="navbar"><div class="dropdown"><button class="dropbtn">파일<i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="#">새로만들기</a><a href="javascript:void(0)" id="fakeload">열기</a><a href="#">저장</a></div></div><div class="dropdown"><button class="dropbtn">편집<i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="#"><img src="photo/undo.jpg" height="20" width="20">이전으로</a><a href="#"><img src="photo/redo.png" height="20" width="20">다음으로</a></div></div><a href="javascript:void(0);" onclick="openNav()">도움말</a><a href="http://www.coalab.co.kr">코알랩이란?</a><div class="right"><a href="javascript:void(0);" onclick="openNav()">&#9776; 열기</a></div></div><div id="mySidenav" class="sidenav"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><a href="#">튜토리얼</a><a href="#">특별한 방법</a><a href="#">블록</a></div><table width="100%"><tr><td><h1><span id="title">마인크래프트 건축 수업</span> &nbsp; ';
  var iLimit253 = opt_ijData.maxLevel + 1;
  for (var i253 = 1; i253 < iLimit253; i253++) {
    output += ' ' + ((i253 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i253) + '</span>' : (i253 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i253) + '">' + soy.$$escapeHtml(i253) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i253) + '">' + soy.$$escapeHtml(i253) + '</a>');
  }
  output += '</h1></td><td class="farSide"><span ' + ((opt_ijData.lang == 'ko') ? 'id="languageBorder"' : '') + ' style="padding: 10px"><select id="languageMenu"></select></span></td></tr></table><link rel="stylesheet" href="../../google-blockly/demos/code/style.css"><p>';
  switch (opt_ijData.level) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
  output += '</p><p> 위의 그림처럼 만들어 보시오. <button id="deployButton" class="notext primary" title="..."><img src=\'../../google-blockly/media/1x1.gif\' class="run icon21"></button><button id="trashButton" class="notext" title="..."><img src=\'../../google-blockly/media/1x1.gif\' class="trash icon21"></button></p><script src="../../google-blockly/blockly_compressed.js"><\/script><script src="../../google-blockly/blocks_compressed.js"><\/script><script src="../../google-blockly/javascript_compressed.js"><\/script><script src="../../google-blockly/msg/js/' + soy.$$escapeHtml(opt_ijData.lang) + '.js"><\/script><script src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '</br></br><div id="blockly"><button id="tab_javascript">자바스크립트</button></div><div id="content_javascript" class="content"></div></div> <!--main class finished -->';
  return output;
};


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="teleport"></block><block type="teleport_coordinate"></block>' + ((opt_ijData.level > 1) ? '<block type="relative_coordinate"></block>' + ((opt_ijData.level > 2) ? '<block type="absolute_coordinate"></block>' : '') : '') + '</xml>';
};
