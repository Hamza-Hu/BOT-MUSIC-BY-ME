module.exports = {
  TOKEN: "MTIxODk0NjMwMDE0NjYxNDMyMg.GhmABO.Y5fjk5aX78kFbBvpKd6du4LFZILu8NRMOCizDc",
  ownerID: ["1155151049355702314", ""],
  botInvite: "https://discord.com/oauth2/authorize?client_id=1218946300146614322&permissions=8&scope=bot",
  supportServer: "https://discord.gg/gAqyGWeDym",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'MrakBot',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: false,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
