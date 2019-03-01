const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setActivity("Bot By B.N#0001", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === '@everyone') {
	  msg.channel.send(`@everyone`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`@everyone`)
  }
});

client.login("NTUwODQ3NjYwMTA2NDQ4ODk3.D1sB0g.LgsvseqpXvYhXek0RSN2ijI59Js");