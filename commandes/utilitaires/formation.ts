import { ICommand } from "wokcommands";
import DiscordJS, { Intents, Message, MessageEmbed } from 'discord.js';



export default{

    category: "Utilitaires",
    description: "Obtenez les formations que vous voulez. Vous seul verrez le pannel !",
    testOnly: true,

    slash: true,
    options : [
        {
            name: "formation",
            description: "Quelle formation ?",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            required: true,
            choices: [
                {
                    name: "Base",
                    value:"fBase"
                },
                {
                    name: "Chirurgien",
                    value: "fChirur"
                },
                {
                    name: "Biologiste",
                    value: "fBIO"
                },
                {
                    name: "Grenade Bacta",
                    value: "fBacta"
                }
            ]
        }
    ],


    callback: ({guild, args, interaction}) => {


        const memberID = interaction.user.id
        const roleChirurgien = "984876498735476808"
        const roleBiologiste = "984876498735476809"
        const roleBactaGrenade = "1002237557968478359"


        const member = guild?.members.cache.get(memberID)

        const embed = new MessageEmbed()
            .setAuthor({name: "Administration Républicaine", iconURL: "https://cdn3.emoji.gg/emojis/4402-yesicon.png"})
            .setFooter("Heureux d'avoir pu vous aider !")

    


        if((interaction.options.getString("formation") == "fChirur" && member?.roles.cache.has(roleChirurgien))){
            embed.setFields({
                name:"Formation Chirurgien",
                value: "https://docs.google.com/document/d/1LS-0qlbxvV4Zc1VKgHkiWaOonf9H7R4P1u1XDgC9qXk/edit?usp=sharing",
            })

            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return
        }else if((interaction.options.getString("formation") == "fBIO" && member?.roles.cache.has(roleBiologiste))){
            embed.setFields({
                name: "Formation Biologiste",
                value: "https://docs.google.com/document/d/1w24ZAzpvNfgOCVsQeWavFSpnpQzTGnGWsc7nPtt-OXA/edit?usp=sharing"
            })

            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return

        }else if(interaction.options.getString("formation") == "fBase"){
            embed.setFields({
                name: "Formation Médecin",
                value: "https://docs.google.com/document/d/1hLmiMI66wgegObZunNsPjyNNISH7QfK6iJM1RgWafi4/edit?usp=sharing"
            })
            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return
        }else if(interaction.options.getString("formation") == "fBacta" && member?.roles.cache.has(roleBactaGrenade)){
            embed.setFields({
                name: "Formation Grenade Bacta",
                value: "https://docs.google.com/document/d/1hLmiMI66wgegObZunNsPjyNNISH7QfK6iJM1RgWafi4/edit?usp=sharing"
            })
            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return
        }else{
            interaction.reply({
                ephemeral: true,
                content: "❌ Vous n'avez pas le rôle nécessaire à la formation."
            })
        }

        
        


    }


} as ICommand