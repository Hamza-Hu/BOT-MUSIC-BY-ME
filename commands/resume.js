const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "resume",
  description: "Start paused music.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({ content: '⚠️ Queue is empty!!', ephemeral: true });
      }

      if (!queue.paused) {
        return interaction.reply({ content: '⚠️ No paused music!!', ephemeral: true });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor('#7645fe')
        .setAuthor({
          name: 'Song Resumed',
          iconURL: 'https://cdn.discordapp.com/attachments/1218730959197966447/1218953025737982012/standard.gif?ex=66098978&is=65f71478&hm=71f544a060803d8580aa74a215ab14aa4d45ad7e2b8da2963748894950e1eddd&',
          url: 'https://discord.gg/gAqyGWeDym'
        })
        .setDescription(success ? '**The music springs back to life!!**' : '❌ Error: Unable to resume song')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
