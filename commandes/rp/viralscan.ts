import { Icommands } from "WOKCommands";
import DiscordJS, { MessageEmbed } from 'discord.js';

export default{

    category: 'Rôle-Play',
    description: "Commande pour effectuer un scan viral d'un agent biologique.",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "type",
            description: "Ce que vous êtes en train d'analyser.",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            choices: [
                {
                    name: "Agent Viral",
                    value: "vAgent"
                },
                {
                    name: "Gaz",
                    value: "vGaz"
                },
                {
                    name: "Liquide/Poison",
                    value: "lAgent",
                }
            ]
        },
        {
            name:  "connu",
            description: "Si votre objet d'analyse est connu.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN
        }
    ],


    callback : ({interaction}) => {






    }


} as Icommand