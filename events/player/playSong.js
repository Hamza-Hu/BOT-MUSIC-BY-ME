const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Currently playing a Track',
        iconURL: 'https://cdn.discordapp.com/attachments/1218730959197966447/1218953025737982012/standard.gif?ex=66098978&is=65f71478&hm=71f544a060803d8580aa74a215ab14aa4d45ad7e2b8da2963748894950e1eddd&', 
        url: 'https://discord.gg/gAqyGWeDym'
    })
    .setDescription(`\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`)
.setImage(queue.songs[0].thumbnail)
    .setColor('#FF0000')
    .setFooter({ text: 'More info - Use /help command [ MRAKCHI ]' });
     
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
