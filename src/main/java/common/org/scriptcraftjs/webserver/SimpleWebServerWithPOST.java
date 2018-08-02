package org.scriptcraftjs.webserver;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;
import java.util.HashMap; 

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

import fi.iki.elonen.NanoHTTPD;
import fi.iki.elonen.SimpleWebServer;

import org.bukkit.Bukkit;


/**
 * POST support for fi.iki.elonen's nanohttpd SimpleWebServer.
 * 
 * Saves POST'ed content as files into a fixed directory.
 * 
 * @author Michael Vorburger
 */
public class SimpleWebServerWithPOST extends SimpleWebServer {

	private static final String CONTENT_LENGTH = "content-length";
	
	private static final String FILE_SUFFIX = "clientScript.js";
	
	private final File httpPostDirectory;

	private static Thread serverStartThread;


	public SimpleWebServerWithPOST(String host, int port, File wwwroot, File httpPostDirectory, boolean quiet) {
		super(host, port, wwwroot, quiet);
		this.httpPostDirectory = httpPostDirectory;

	}

	public Response serve(IHTTPSession session) {
		if (!Method.POST.equals(session.getMethod())) {
			return super.serve(session);
		} // else: handle a POST now...
		
//        if (session.getUri().length() < 2) {
//            return createResponse(Response.Status.BAD_REQUEST, NanoHTTPD.MIME_PLAINTEXT, "URI too short to POST to: " + session.getUri());
//        }
//        String uri = session.getUri().substring(1);
//        // TODO for real security, probably need to handle (un)escaped / etc. here as well?
//        if (uri.contains("/") || uri.contains("\\") || uri.contains("..")) {
//            // throw new IllegalArgumentException("Invalid POST URI: " + uri);
//            return createResponse(Response.Status.FORBIDDEN, NanoHTTPD.MIME_PLAINTEXT, "Invalid POST URI: " + uri);
//        }
        
        Map<String, String> headers = session.getHeaders();
        if (!headers.containsKey(CONTENT_LENGTH)) {
            return createResponse(Response.Status.BAD_REQUEST, NanoHTTPD.MIME_PLAINTEXT, "Missing header " + CONTENT_LENGTH);        	
        }
        
        String uri = session.getUri().substring(1);
	int size = Integer.parseInt(headers.get(CONTENT_LENGTH));

        if(uri.contains("jscode")){
		InputStream is = session.getInputStream();
                String IP = headers.get("http-client-ip").replaceAll("[:.]", "");
                File file = new File(httpPostDirectory, /*uri*/ IP + "_" + FILE_SUFFIX);
                try {
                  copy(is, size, file);
                } catch (IOException e) {
                  e.printStackTrace(); // TODO real logging.. but PITA in ScriptScraft, as it targets two Server APIs
                  return createResponse(Response.Status.INTERNAL_ERROR, NanoHTTPD.MIME_PLAINTEXT, e.getMessage());
                }
	} 
	
	/*
	  else if (uri.contains("survival")) {
	   try {
	        Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "gamemode survival @a");
	   } catch(Exception e) {
	       return createResponse(Response.Status.INTERNAL_ERROR, NanoHTTPD.MIME_PLAINTEXT, e.getMessage());
	   }
	*/

	/*
	Bukkit.getServer().getScheduler().scheduleSyncDelayedTask(plugin, new Runnable(){
	  public void run(){
	    Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "gamemode survival @a");
	  }
	}, 20);
 		BukkitScheduler scheduler = Bukkit.getScheduler();
		private final JavaPlugin plugin;

		plugin.getServer().dispatchCommand(plugin.getServer().getConsoleSender(), "gamemode survival @a");

    		scheduler.scheduleSyncDelayedTask(this, new Runnable() {
	      public void run(){ 
		    Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "gamemode survival @a");
	      }
	    }, 200L);
*/
	/*
	} else if(uri.contains("creative")){
	  try {
                Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "gamemode creative @a");
           } catch(Exception e) {
               return createResponse(Response.Status.INTERNAL_ERROR, NanoHTTPD.MIME_PLAINTEXT, e.getMessage());
           }

	} else if(uri.contains("spectator")){
	  try {
                Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "gamemode spectator @a");
           } catch(Exception e) {
               return createResponse(Response.Status.INTERNAL_ERROR, NanoHTTPD.MIME_PLAINTEXT, e.getMessage());
           }

	} else if(uri.contains("peaceful")){
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "difficulty peaceful");
	} else if(uri.contains("easy")){
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "difficulty easy");
	} else if(uri.contains("normal")){ 
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "difficulty normal");
	} else if(uri.contains("hard")){
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "difficulty hard");
	} else if(uri.contains("day")){
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "time set day");
	} else if(uri.contains("night")){
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "time set night");
	} else if(uri.contains("clear")){
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "weather clear");
	} else if(uri.contains("rain")){ 
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "weather rain");
	} else if(uri.contains("thunder")){ 
	  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "weather thunder");
	} else if(uri.contains("bringStudent")){
	*/
	    /*
      	    Map<String, String> files = new HashMap<String, String>();
    	    Method method = session.getMethod();
    	    if (Method.PUT.equals(method) || Method.POST.equals(method)) {
              try {
            	  session.parseBody(files);
              } catch (IOException ioe) {
                  return new Response(Response.Status.INTERNAL_ERROR, MIME_PLAINTEXT, "SERVER INTERNAL ERROR: IOException: " + ioe.getMessage());
              } catch (ResponseException re) {
                  return new Response(re.getStatus(), MIME_PLAINTEXT, re.getMessage());
              }
    	    }
    	    String postBody = session.getQueryParameterString();
    	    String postParameter = session.getParms().get("parameter");

    	    return new Response(postBody); // Or postParameter.
	    */
	  /*
	    try {
	      Integer contentLength = Integer.parseInt(session.getHeaders().get("content-length"));
	      byte[] buffer = new byte[contentLength];
	      session.getInputStream().read(buffer, 0, contentLength);
	      System.out.println(new String(buffer));
	      Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "tp @a " + new String(buffer)); 
	    } catch(IOException e) {
	      e.printStackTrace();	
	    }
	    */
	    /*
	    Map<String, String> files = new HashMap<String, String>();
	    
	    try {
                session.parseBody(files);
            } catch (IOException ioe) {
                return new Response(Response.Status.INTERNAL_ERROR, MIME_PLAINTEXT, "SERVER INTERNAL ERROR: IOException: " + ioe.getMessage());
            } catch (ResponseException re) {
                return new Response(re.getStatus(), MIME_PLAINTEXT, re.getMessage());
            }
	     
	    String postBody = session.getQueryParameterString();
	    System.out.println(postBody);
	    */


	    //Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), value);

	    /*
            int count = is.read(buffer, 0, (int)Math.min(size, buffer.length));
            while (count >= 0 && size > 0) {
                count = is.read(buffer, 0, (int)Math.min(size, buffer.length));
                //count = is.read();
                size -= count;
                hello = hello + ((char)count);
            }
            String value = new String(hello.getBytes("UTF-8"), "UTF-8"); 
            System.out.println(value);

            while (count >= 0) {
                count = is.read(buffer, 0, (int)Math.min(size, buffer.length));
                //count = is.read();
                hello = hello + ((char)count);
            }
            System.out.println(hello);

	    InputStream in = session.getInputStream();
	    int b;
            StringBuffer str = new StringBuffer();
            while ((b = in.read()) != -1) {
              if (b != 0 && b > 16 && b != 255 && b != 23 && b != 24) {
                str.append((char) b);
              }
            }
            String data = str.toString();
	    System.out.println(data);

	    //Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), line);

   	  } catch(Exception ex) {
       	     if(ex instanceof IOException || ex instanceof InterruptedException)
	  	ex.printStackTrace();
	  }
	  */
  
	/*
	} else if(uri.contains("giveItem")){

	  try {
              Integer contentLength = Integer.parseInt(session.getHeaders().get("content-length"));
              byte[] buffer = new byte[contentLength];
              session.getInputStream().read(buffer, 0, contentLength);
              System.out.println(new String(buffer));
              Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "give @a " + new String(buffer));
	*/
/*	      
	      Thread thread = new Thread(){
    		public void run(){
    		  Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "gamemode 1 @a");  
		}
  	      }

  	      thread.start();
*/
	/*
	  } catch(IOException e) {
              e.printStackTrace();
	      return createResponse(Response.Status.INTERNAL_ERROR, NanoHTTPD.MIME_PLAINTEXT, e.getMessage());
          }
        } else if(uri.contains("stop")){
          Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "stop");
        }
	*/

	return createResponse(Response.Status.OK, NanoHTTPD.MIME_PLAINTEXT, "OK");
        }


	protected void copy(InputStream is, int size, File targetFile) throws IOException {
        // when moving to Java 7, use java.nio.file.Files.copy(InputStream, Path, CopyOption...)
		// similar utility is also found in com.google.common.io.Files or org.apache.commons.io.IOUtils or (better) FileUtils
		OutputStream os = new FileOutputStream(targetFile);
		try {
		    int bytesRead = 0;
			byte[] buffer = new byte[8 * 1024];
		    // @see fi.iki.elonen.NanoHTTPD.HTTPSession.parseBody(Map<String, String>)
		    while (bytesRead >= 0 && size > 0) {
		    	bytesRead = is.read(buffer, 0, (int)Math.min(size, buffer.length));
		    	size -= bytesRead;
		    	if (bytesRead > 0) {
		    		os.write(buffer, 0, bytesRead);
		    	}
		    }
		} finally {		
	        safeClose(os);
	        // do *NOT* safeClose(is);
		}
	}
}
