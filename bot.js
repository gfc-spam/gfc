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

client.on('message', message => {
if(message.content.toLowerCase() === 'daily'){
message.channel.send("#daily");
}
if(message.content.toLowerCase() === 'rep'){
message.channel.send("#rep 468185179316551710");
}
if(message.content.toLowerCase() === 'credits'){
message.channel.send("#credits");
}
if(message.content.toLowerCase() === 'profile'){
message.channel.send("#profile");
}
if(message.content.toLowerCase() === 'rank'){
message.channel.send("#rank");
}
if(message.content.toLowerCase() === 'user'){
message.channel.send("#user");
}
if(message.content.toLowerCase() === 'id'){
message.channel.send("#id");
}
})
