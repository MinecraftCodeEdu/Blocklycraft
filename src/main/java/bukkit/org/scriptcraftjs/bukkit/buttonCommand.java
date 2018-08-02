package org.scriptcraftjs.bukkit;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.command.ConsoleCommandSender;

public class buttonCommand implements CommandExecutor{

	@Override
	public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
	
	  if(sender instanceof ConsoleCommandSender) {
	    //Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(), "give @a minecraft:apple 10");	
	    Bukkit.getServer().dispatchCommand(sender, "give @a minecraft:apple 10");	

	  }
  	  return true;
	}

}

