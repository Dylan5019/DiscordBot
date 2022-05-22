const generateImage = require('../generateImage');

const welcomeChannelID = "977634108123541545";

module.exports = {
  name: "guildMemberAdd",
  run: async (bot, member) => {
   const img = await generateImage(member);
   member.guild.channels.cache.get(welcomeChannelID).send({
     content: `<@${member.id}> Welcome to the Server!`,
     files: [img],
   });
  },
};
