const Discord = require('discord.js');
const client = new Discord.Client();
 var prefix = "6";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

});





client.on("ready", () => {
let channel =     client.channels.get("500018034405146634")
setInterval(function() {
channel.send(`اديلو سبام احية احية اديلة اسبام اديلوووووو`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
