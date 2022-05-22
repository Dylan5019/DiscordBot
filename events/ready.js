module.exports = {
  name: "ready",
  run: async (bot) => {
    console.log("Ready");
    console.log(`Logged in as ${bot.client.user.tag}`);
  },
};
