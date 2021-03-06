package org.scriptcraftjs.bukkit;

import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scheduler.BukkitScheduler;
import org.bukkit.Bukkit;

//import org.scriptcraftjs.bukkit.buttonCommand;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.scriptcraftjs.webserver.ScriptCraftWebServer;

public class ScriptCraftPlugin extends JavaPlugin implements Listener
{
    public boolean canary = false;
    public boolean bukkit = true;
    // right now all ops share the same JS context/scope
    // need to look at possibly having context/scope per operator
    //protected Map<CommandSender,ScriptCraftEvaluator> playerContexts = new HashMap<CommandSender,ScriptCraftEvaluator>();
    private String NO_JAVASCRIPT_MESSAGE = "No JavaScript Engine available. ScriptCraft will not work without Javascript.";
    protected ScriptEngine engine = null;

    protected ScriptCraftWebServer httpServer = new ScriptCraftWebServer();

    @Override public void onEnable()
    {

	//Bukkit.getServer().getPluginManager().registerEvents(new PlayerJoin(), this);
	//getCommand("buttonGive").setExecutor(new buttonCommand());

	Thread currentThread = Thread.currentThread();
        ClassLoader previousClassLoader = currentThread.getContextClassLoader();
        currentThread.setContextClassLoader(getClassLoader());
        try {
            ScriptEngineManager factory = new ScriptEngineManager();
            this.engine = factory.getEngineByName("JavaScript");
			if (this.engine == null) {
				this.getLogger().severe(NO_JAVASCRIPT_MESSAGE);
			} else {
				Invocable inv = (Invocable) this.engine;
				this.engine.eval(new InputStreamReader(this.getResource("boot.js")));
				inv.invokeFunction("__scboot", this, engine);
			}

            httpServer.start();
            this.getLogger().info(httpServer.getStartedLogMessage());
            // httpServer.openURL();

		} catch (Exception e) {
			e.printStackTrace();
			this.getLogger().severe(e.getMessage());
		} finally {
			currentThread.setContextClassLoader(previousClassLoader);
		}
	

    }


    @Override public void onDisable() {
        super.onDisable();
        httpServer.stop();
        this.getLogger().info("HTTP web server stopped");
    }

    
    public List<String> onTabComplete(CommandSender sender, Command cmd,
                                      String alias,
                                      String[] args)
    {
        List<String> result = new ArrayList<String>();
        if (this.engine == null) {
            this.getLogger().severe(NO_JAVASCRIPT_MESSAGE);
            return null;
        }
        try {
            Invocable inv = (Invocable)this.engine;
            inv.invokeFunction("__onTabComplete", result, sender, cmd, alias, args);
        } catch (Exception e) {
            sender.sendMessage(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
    
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args)
    {
        boolean result = false;
        Object jsResult = null;
        if (this.engine == null) {
            this.getLogger().severe(NO_JAVASCRIPT_MESSAGE);
            return false;
        }
        try {
            jsResult = ((Invocable)this.engine).invokeFunction("__onCommand", sender, cmd, label, args);
        } catch (Exception se) {
            this.getLogger().severe(se.toString());
            se.printStackTrace();
            sender.sendMessage(se.getMessage());
        }
        if (jsResult != null){
            return ((Boolean)jsResult).booleanValue();
        }
        
        if (cmd.getName().equalsIgnoreCase("start")) {
            Bukkit.broadcastMessage("Started");
            BukkitScheduler scheduler = Bukkit.getServer().getScheduler();
            scheduler.scheduleSyncDelayedTask(this, new Runnable() {
                @Override
                public void run() {
                    Bukkit.broadcastMessage("Stopped");
                }
            }, 100);

        }
        
        return result;
    }
    
    
}
