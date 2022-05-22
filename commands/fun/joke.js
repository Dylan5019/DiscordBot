let jokes  = require(`../../jokes.json`);

module.exports = {
    name: "joke",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        
        let randNum = Math.floor(Math.random() * (387 - 1) + 1);
        let joke = jokes.filter(d => (d.id === randNum));
        
        message.reply(joke[0].setup);
        setTimeout(function() {
            message.reply(`${joke[0].punchline.toString()}`);
        }, 3000)


    }
}

