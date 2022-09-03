import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"

export default{

    category: "Utilitaires",
    description: "Faire en sorte que le bot parle :D",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "type",
            description: "Type d'embed : Simple message, message administratif, narration, message système.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            required: true,
            choices: [
                {
                   name:"Message Vide",
                   value : "messV",
                },
                {
                    name: "Message Administratif",
                    value: "messAdmin",
                },
                {
                    name: "Message Narration",
                    value: "messNara",
                },
                {
                    name: "Message Système",
                    value: "messSystem",
                }
            ],
        },
        {
            name: "contenu",
            description: "Le contenu du message en lui-même.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            required:true,
        }
    ],
 

    callback: ({interaction}) => {

        if(interaction.options.getString("type") == "messV"){
            return(interaction.options.getString("contenu"))
        }



    }



} as ICommand