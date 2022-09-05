import { ICommand} from "WOKCommands";
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
            description: "Si votre objet d'analyse est connu. Pour vérifier /checkexistant",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN,
            required: true,
        },
        {
            name: "difficulté",
            description : "Difficulté/Niveau de dangerosité du Pathogène",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
            choices: [
                {
                    name: "1",
                    value: 1,
                },
                {
                    name: "2",
                    value: 2,
                },
                {
                    name: "3",
                    value: 3,
                },
                {
                    name: "4",
                    value: 4,
                },
                {
                    name: "5",
                    value: 5,
                }
            ]
        }
    ],


    callback : ({interaction}) => {
        let firstRoll = Math.floor(Math.random() * 101)
        let checkQuaRoll = Math.floor(Math.random() * 101)
        let lTime = 0
        let override = false
        const tChoices = [15,10,8,7,6]

        /**
         * Possible : 15m 0-5 ; 10mn 5 -> 30 ; 30-49 : 8mn, 50 -> 75 7mn, >75 6.
         * Deuxième roll pour vérifier la qualité du scan.
         */

        const embed = new MessageEmbed()
        .setAuthor({name: "Technologie d'analyse républicaine", iconURL:"https://cdn3.emoji.gg/emojis/5405_among_us_medbay_remake.png"})

        if(interaction.options.getInteger("difficulté")  != undefined ){
            if(interaction.options.getInteger("difficulté") == 1){lTime = tChoices[4], embed.setColor("GREEN"), override = true}
            if(interaction.options.getInteger("difficulté") == 2){lTime = tChoices[3], embed.setColor("DARK_GREEN"), override = true}
            if(interaction.options.getInteger("difficulté") == 3){lTime = tChoices[2], embed.setColor("YELLOW"), override = true}
            if(interaction.options.getInteger("difficulté") == 4){lTime = tChoices[1], embed.setColor("RED"), override = true}
            if(interaction.options.getInteger("difficulté") == 5){lTime = tChoices[0], embed.setColor("DARK_RED"), override = true}
        }

        

    }


} as ICommand