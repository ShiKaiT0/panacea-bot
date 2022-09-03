import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";


export default {
    category: "Utilitaires",
    description: "Effectuer un roll.",
    slash: true,
    testOnly: true,
    

    callback: ({message, interaction}) => {
        let roll = Math.floor(Math.random() * 101)
        


        const embed = new MessageEmbed()
            .setAuthor({name: "" + interaction.member?.user.username, iconURL: interaction.user.avatarURL()??''}) 
            .setTitle("Pannel de roll")
            .setThumbnail("https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/512/dice.png")
            .addFields([
                {
                    name: "Résultat",
                    value: ""+roll,
                    inline: false,
                }
            ])

        if(roll >= 50){
            embed.setColor("GREEN")
        }else{
            embed.setColor("DARK_RED")
        }
        return(embed)
    }

} as ICommand