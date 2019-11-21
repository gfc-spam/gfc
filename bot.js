const Discord = require('discord.js');
const client = new Discord.Client();
console.log("⪧ SPAMMER ⪦");

client.login(process.env.TOKEN);

client.on("ready", () => {
let channel =     client.channels.get(process.env.CHANNEL)
setInterval(function() {
channel.send(process.env.MESSAGE);
}, 30)
})
