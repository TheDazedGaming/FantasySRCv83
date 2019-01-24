/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.command.commands.gm3;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;

/**
 *
 * @author Administrator
 */
public class InfractCommand extends Command {
    {
        setDescription("Give a player an infraction.");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 1) {
            player.yellowMessage("Syntax: !infract <playername>");
            return;
        }

        MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(params[0]);
        if (victim != null) {
            victim.getClient().addInfraction();
            player.message("Infraction has been given.");
        } else {
            player.message("Player '" + params[0] + "' could not be found on this channel.");
        }
    }
}