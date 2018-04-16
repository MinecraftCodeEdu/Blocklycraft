package org.scriptcraftjs.bukkit;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.util.Map;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;


public class PlayerJoin implements Listener {

	 //String pathfile = "plugins" + File.separator + "users.txt";

	 @EventHandler
	    public void onJoin(PlayerJoinEvent event) throws IOException {

			Player player = event.getPlayer();

			String pathdir = "scriptcraft" + File.separator + "plugins" + File.separator + "blocklycraft" + File.separator + player.getName();

			File theDir = new File(pathdir);

			if(theDir.isFile()){
				System.out.println("dir already created");
			} else {
				theDir.mkdir();
				System.out.println("dir created.");
			}
		}

}
