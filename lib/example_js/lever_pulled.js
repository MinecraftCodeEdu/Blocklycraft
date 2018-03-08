//레버를 그릴 때마다 파일에 쓰는 ScriptCraft 스크립트

//여기서 Minecraft에서 특정 이벤트가 발생할 때 함수를 호출하라는 메시지가 표시됩니다.

events.on('player.PlayerInteractEvent', function (listener, event) {
     // "레버"(즉, 레버)가있는 지 알아 내야합니다. 이제는 모든 주문입니다 :-)
     //를 사용하여 레버 위치를 검색 할 수 있습니다. 당신이 특별한 하나를 찾고 싶다면 block.location
     var block = event.getClickedBlock();
     var type = block.getType();
     if(type==org.bukkit.Material.LEVER) { 
          if (block.data==3){
               writeStatus('commands.txt','DOWN');              
          }
          else
          {
               writeStatus('commands.txt','UP');              
     }         
})


// 파일의 상태를 쓰는 함수. 우리가 자바 프로그램에 있기 때문에 여기서 우리는 자바 클래스를 사용한다.
writeStatus=function(filename,status){
     var File = java.io.File;
     var PrintWriter = java.io.PrintWriter;
     var FileWriter = java.io.FileWriter;

     var f = new File(filename);
     var out =  new PrintWriter(new FileWriter(f, true ));
     out.println(status);
     out.close()
}
