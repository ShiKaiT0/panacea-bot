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
            maxLength: 1024
        },
        {
            name: "titre",
            description: "Si vous voulez ajouter un titre en particulier à votre message.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            max_length:256
        }
    ],
 

    callback: ({interaction}) => {

        if(interaction.options.getString("type") == "messV"){
            return(interaction.options.getString("contenu"))
        }

        const embed = new MessageEmbed()

        if(interaction.options.getString("type") == "messAdmin"){
            embed.setColor("DARK_RED")
                .setAuthor({name: "Administration du Corps Médical", iconURL: "https://static.wikia.nocookie.net/starwars/images/d/db/Medical_emblem.svg/revision/latest/scale-to-width-down/1200?cb=20150629233854"})
                .setFooter({text: "Merci de bien lire l'intégralité du message."})
                .setFields({
                    name: "Veuillez prendre connaissance du message ci-dessous.",
                    value: interaction.options.getString("contenu")??'',
                })
                    embed.setTitle(interaction.options.getString("titre")??"A votre attention :")
                

                interaction.reply({
                    embeds: [embed],
                })
        }       
        
        if(interaction.options.getString("type") == "messNara"){

            embed.setColor("YELLOW")
            .setAuthor({name: "Narration", iconURL: "https://cdn3.emoji.gg/emojis/3389-yellowbook.gif"})
            .setFields(
                {
                    
                    name: interaction.options.getString("titre")??"L'action continue...",
                    value: interaction.options.getString("contenu")??""
                }
            )

            interaction.reply({
                embeds: [embed],
            })

        }

        if(interaction.options.getString("type") == "messSystem"){
            embed.setAuthor({name: "Système", iconURL: "https://cdn3.emoji.gg/emojis/4887-databaseerror.png"})
            .setColor("BLUE")
            .setFooter({text: "Merci de bien lire l'intégralité du message."})
            .setTitle(interaction.options.getString("titre")??"Informations Système.")

            .setFields(
                {
                    name: "Reçu :",
                    value: interaction.options.getString("contenu")??""
                }
            )

        }


    }



} as ICommand