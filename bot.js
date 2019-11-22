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

client.on("message", async message => {
    const prefix = "-";

    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Arguments and command variable
    // cmd is the first word in the message, aka the command
    // args is an array of words after the command
    // !say hello I am a bot
    // cmd == say (because the prefix is sliced off)
    // args == ["hello", "I", "am", "a", "bot"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd === "ping") {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }

    if (cmd === "say") {
        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
            message.channel.send(args.join(" "));
    }
    if (cmd === "spsay") {
        // Check if you can delete the message
        
        // Role color

        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
        if (args[0].toLowerCase() === process.env.INDEX ) {
            message.channel.send(args.slice(1).join(" "));
        }
    }
    if (cmd === "scsay") {
        // Check if you can delete the message
        if (message.deletable) message.delete();
        
        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
            message.channel.send(args.slice(1).join(" "));
        
    }
    if (cmd === "spscsay") {
        if (message.deletable) message.delete();
        // Check if you can delete the message
        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
        if (args[0].toLowerCase() === process.env.INDEX ) {
            message.channel.send(args.slice(1).join(" "));
        }
    }
});
