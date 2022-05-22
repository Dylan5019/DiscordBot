const { getFiles} = require('../util/functions');
const fs = require(`fs`);

module.exports = (bot, reload) => {
    const { client } = bot;

    fs.readdirSync("./commands/").forEach((cateogry) => {
      let commands = getFiles(`./commands/${cateogry}`, `.js`);

      commands.forEach((f) => {
        if (reload) {
          delete require.cache[
            require.resolve(`../commands/${cateogry}/${f}}`)
          ];
        }
        const command = require(`../commands/${cateogry}/${f}`);
        client.commands.set(command.name, command);
      });

    })

    console.log(`Loaded ${client.commands.size} commands`);
}