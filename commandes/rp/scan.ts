import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from 'discord.js'

export default{

    category:"Rôle-Play",
    description:"Effectuer un scan de votre patient",
    slash: true,
    testOnly: true,
    options: [
        {
            name:"type",
            type : DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            description: "type de scan que vous voulez faire sur votre patient",
            required:true,
            choices: [
                {
                    name: "general",
                    value: "scanGeneral" 
                },
                {
                    name: "blaster",
                    value: "scanBlaster"
                },
                {
                    name: "osseux",
                    value: "scanF"
                }
            ]
        }
    ],


    callback: ({interaction}) => {
        const embed = new MessageEmbed()
        let roll1 = Math.floor(Math.random() * 101)
        let endStr = ""
        embed.setAuthor({name: "Datapad républicain", iconURL: "https://cdn3.emoji.gg/emojis/5212-activity.png"})
        

        if(interaction.options.getString("type") == "scanGeneral"){
            
            const resultatsScanG = ["Etat critque, pronostic vital","Blessure grave, possibles séquelles","Blessures moyennes","Blessures mineures"]
            if(roll1 > -1 && roll1 < 5){endStr = resultatsScanG[0], embed.setColor("DARK_RED")}
            if(roll1 > 4 && roll1 < 21){endStr = resultatsScanG[1], embed.setColor("RED")}
            if(roll1 > 19 && roll1 < 61){endStr = resultatsScanG[2], embed.setColor("YELLOW")}
            if(roll1 > 60){endStr = resultatsScanG[3], embed.setColor("GREEN")}           

            embed.setFields(
                {
                    name: "Etat du patient",
                    value: endStr + "  (roll " + roll1 + ")"
                }
            )
            .setThumbnail("https://cdn3.emoji.gg/emojis/5190-medkit.png")

            interaction.reply({
                embeds: [embed]
            })
            return
        }


        if(interaction.options.getString("type") == "scanF"){

            roll1 = Math.floor(Math.random() * 101)
            const resultatsScanOsseux = ["Os broyé, perforation d'organe interne","Os broyé.","Os cassé.","Os fêler","Muscle déchiré et/ou ligament abîmé."]
            if(roll1 > -1 && roll1 < 5){endStr = resultatsScanOsseux[0], embed.setColor("DARK_RED")}
            if(roll1 > 4 && roll1 < 21){endStr = resultatsScanOsseux[1], embed.setColor("RED")}
            if(roll1 > 19 && roll1 < 41){endStr = resultatsScanOsseux[2], embed.setColor("RED")}
            if(roll1 > 39 && roll1 < 61){endStr = resultatsScanOsseux[3], embed.setColor("YELLOW")}
            if(roll1 > 59){endStr = resultatsScanOsseux[4], embed.setColor("DARK_GREEN")}

            embed.setFields(
                {
                    name: "Etat du patient",
                    value: endStr + "  (roll " + roll1 + ")"
                }
            )
            embed.setThumbnail("https://cdn3.emoji.gg/emojis/5732_mc_bone.png")


            interaction.reply({
                embeds: [embed]
            })

            return

        }
        

        if(interaction.options.getString("type") == "scanBlaster"){
            const resultatScanBlaster = ["Hemorragie interne.","Hemorragie externe.","Patch bacta nécessaire.","Dégâts ridicules."]
            if(roll1 > -1  && roll1 < 21){endStr = resultatScanBlaster[0], embed.setColor("DARK_RED")}
            if(roll1 > 19  && roll1 < 50){endStr = resultatScanBlaster[1], embed.setColor("DARK_RED")}
            if(roll1 > 49  && roll1 < 71){endStr = resultatScanBlaster[2], embed.setColor("YELLOW")}
            if(roll1 > 79){endStr = resultatScanBlaster[3], embed.setColor("GREEN")}

            embed.setFields(
                {
                    name: "Etat du patient",
                    value: endStr + "  (roll " + roll1 + ")"
                }
            )
            embed.setThumbnail("https://tenor.com/view/star-wars-look-hurt-grief-gif-16294662")


            interaction.reply({
                embeds: [embed]
            })

            return

        }

    }

}as ICommand