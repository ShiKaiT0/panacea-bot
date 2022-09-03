import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"
import path from "path"
import WOKCommands from "wokcommands"

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
})

client.on('ready', async () =>{
    console.log("Connecté !}")


    new WOKCommands(client, {
        commandDir: path.join(__dirname,'commandes'),
        typeScript: true,
        testServers: ["984876498697748550","881620349177954304"],
        botOwners: ["343759373958643714"]
    })
    
})

client.login("MTAxMzQyODExNDE3NDUwOTA1Nw.GT_20H.AtEJ8e2j0mUhPcATobyZejMu66EchRj_kK-pBk")