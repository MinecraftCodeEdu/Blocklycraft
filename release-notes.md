RELEASE NOTES
=============

4.0.1 Release (2018 4 10)
--------------------------
일부변경ddd


4.0.0 Release (2018 4 10)
--------------------------

webip 와 gameip 를 비교하여 사용자별 실행 가능함수 추가

	command( 'testFunc', function ( parameters, player ) { if ( 1721722114  == player.getAddress().getAddress().getHostAddress().replace(/[:.]/gi,'') ) {
	} else{ print("function not defined") }});



직사각형 블록 숫자값 초기화

	<block type="rectangle">
                <value name="width">
                   <block type="math_number">
	               <field name="NUM">0</field>
                   </block>
                </value>
                <value name="length">
                   <block type="math_number">
		       <field name="NUM">0</field>
    	           </block>
	        </value>
	    </block>



1.0.0 Release (2010 1 1)
---------------------------

예시))

Added new modules 

* lightning

The entities module and lightning module are now documented.

To make lightning strikes when and where any arrow lands:

    var lightning = require('lightning');
    events.projectileHit( function( event ) {
      if (entities.arrow( event.projectile ) 
        lightning( event.projectile );
    });



Fixed issues #256 and #287
