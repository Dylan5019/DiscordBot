const { Client } = require("discord.js");
const Discord = require("discord.js");
require("dotenv").config();



// Create a New Client Instance
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

let bot = {
  client,
  prefix: "n.",
  owners: ["219599323338375168"],
};

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload);

client.loadEvents(bot, false);
client.loadCommands(bot, false);


module.exports = bot;



// const welcomeChannelID = "977634108123541545";

// client.on(`guildMemberAdd`, async (member) => {
//   const img = await generateImage(member);
//   member.guild.channels.cache.get(welcomeChannelID).send({
//     content: `<@${member.id}> Welcome to the Server!`,
//     files: [img]
//   })
// })

client.login(process.env.TOKEN);
