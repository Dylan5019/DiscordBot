const { Client, Intents, Interaction } = require ('discord.js');
require("dotenv").config()


// Create a New Client Instance
const client = new Client({ 
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ] 
});


//Ready Event Listener
client.on(`ready`, () => {
  console.log('Ready');
  console.log(`Logged in as ${client.user.tag}`)
});


client.on(`messageCreate`, (message) => {
  if (message.content == `hi`) {
    message.reply(`Hello World`);
  }
})





client.login(process.env.TOKEN);