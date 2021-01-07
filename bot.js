const telegraf = require("telegraf");
const axios = require("axios");
const bot = new telegraf("1545033877:AAER-07UtJrNoZ5SbUibEA7QutixZDxLlyQ");
// get URL from User


bot.command('tell', async (ctx) => {
    try {
        console.log();
        const content = await genJoke();
        bot.telegram.sendMessage(ctx.chat.id, content)
    } catch (err) {
        console.log(err);
    }

})
//functions
async function genJoke() {
    let joke;
    await axios.request({
        method: 'GET',
        url: 'https://joke3.p.rapidapi.com/v1/joke',
        headers: {
            'x-rapidapi-key': 'e6b6dc7894msh3e5fba24f14c7a4p10d06djsn31c3e0bcdab5',
            'x-rapidapi-host': 'joke3.p.rapidapi.com'
        }
    }).then(res => {
        let {
            data: {
                content
            }
        } = res;
        joke = content;
    }).catch(err => {
        return err;
    })
    return joke;
}
bot.launch();