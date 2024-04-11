const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://youtube.com/@mrakchi26?si=hNFm-hMCF6x8fbxO';
      const InstagramLink = 'https://www.instagram.com/mrakchi_5?igsh=OGQ5ZDc2ODk2ZA==';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://cdn.discordapp.com/attachments/1219371335592050759/1223409877985267782/d562d4205927c8d1ca5eed0adcaaa25d.jpg?ex=6619c03c&is=66074b3c&hm=7c0fdae3e30548efa2b1b594062f202a036f07c1dfacb80bca13023cfac1ff85&',
          url: 'https://discord.gg/6kvJChM28m'
        })
            .setDescription(`__**About me**__:\n\n ▶️ MRAKCHI. I am a discord bot developer. I love playing games. my Team : WickStudio | MrakTeam. Feel free to contact me!\n YouTube : ❤️ [Click here](${youtubeLink})\n Instagram : 💙 [Click here](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
