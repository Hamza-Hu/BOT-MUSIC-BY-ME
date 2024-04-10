const config = require('./config.js');

if(config.shardManager.shardStatus == true){

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN });
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

  // Set bot status

  client.user.setPresence({

    activities: [{

      name: `MrakTeam Dev`,
        name : `By Mrakchi /Help` ,
      type: 'WATCHING'

    }],

    status: 'idle'

  });

});
} else {

require("./bot.js")

}
