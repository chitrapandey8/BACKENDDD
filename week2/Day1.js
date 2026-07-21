//Module pattern in nodejs
//Module is a mechanism for splitting js program inti seperate managable chunk called as modul , thar can be imported wherver needed.

// export function add(a, b){
// return a+b;
// }
//with export default i can import without destructing
// module.exports = {
//     add
// }


import {Telegraf} from "Telegraf";
import dotenv from 'dotenv';
dotenv.config();

function add(a, b){
return a+b;
}

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("HEy ask me Anything"))
// bot.command('add', add);

bot.command('add', (ctx)=>ctx.reply(`${add(2,3)}`)) // regtisting a cmommad ig sombody give commad add it will run this
bot.on('sticker', (ctx)=>ctx.reply('lesgoo'))
bot.on('text', (ctx)=>{

    let a = ctx.text.split(' ');
    let b = a.map((i)=>parseInt(i))
    let c = b.reduce((i,j)=> i+j, 0)
    ctx.reply(c)
})
bot.launch()