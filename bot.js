const Discord = require('discord.js');
const client = new Discord.Client();
console.log("⪧ SPAMMER ⪦");

client.login(process.env.TOKEN);

client.on("ready", () => {

const prefix = "-"

let channel =     client.channels.get(process.env.CHANNEL)
setInterval(function() {
channel.send(process.env.MESSAGE);
}, 30)
})
client.on('message', message => {

if(message.author.bot) return;
if(message.content.indexOf(config.prefix) !== 0) return;

const args = message.content.slice(config.prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage)
}
})
