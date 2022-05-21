const { Client, Intents, Interaction } = require ('discord.js');
require("dotenv").config()

const generateImage = require("./generateImage")

// Create a New Client Instance
const client = new Client({ 
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
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

const welcomeChannelID = "977634108123541545";

client.on(`guildMemberAdd`, async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelID).send({
    content: `<@${member.id}> Welcome to the Server!`,
    files: [img]
  })
})


client.login(process.env.TOKEN);