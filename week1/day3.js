// const {readFile} = require('fs/promises') // this is common js
// import { writeFile } from 'fs';
// import {readFile} from 'fs/promises'
// // const pathToFile = __dirname + "/week1/a.txt" //not in es modeule

// const pathToFile =  new URL('./a.txt', import.meta.url) // creates a url pointing to a.txt relative to hte current js file
// console.log(pathToFile);
// console.log(import.meta.url); //contian url of the current file


// const data = await readFile(pathToFile) //i can use await asa  top level without async
// console.log(data.toString());

// ///render data on browser-- two type server side or client side
// //server side -- maniputler html on server side

// //erb -- templeting engins----- let server ganerate html dynamualtyy before sending it to the browser
// let temp = data.toString()
// const obj = {
//     name:"s",
//     message:"helo"
// }

// for(const [key, value] of Object.entries(obj)){
//     temp = temp.replace(`{{${key}}}`, value)

// }

// await writeFile(new URL('./index.html'), import.meta.url, temp)

//dtaabases
//netwoking
//how we scale things up
//tech stack

//how client is going to make interaction with server
//to make a call to server client need to know wehere the server is
//why zepto cnt deliver to bagladesh -- coz zepto doesnot have road network for that

//compuetr netwok is an interconnected set of conputers sharig resources and data
//Internet -- Netork of computer networks

//so we want our client machine and servers machine connected to internet for connection.
//renting and buying goes with ip address
//when we have a connection of internet we get ip address, and chnages, called dynamic ip wehnever i can connect to internt
//i can buy ip address too which is static 

//for eaxple - client have dynmic ip and server hahve static ip

//npm -- package has various module it manages these modules.
//package lock keeps modules and its versions.
///we can also create from scracth.           

//bot father -- helps get u bot token, wwe can idenfied who is using that token using bot token.

import dotenv from 'dotenv';
import {Telegraf} from "Telegraf";
const bot = new Telegraf(process.env.BOT_TOKEN);


bot.start