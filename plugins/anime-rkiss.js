import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `Silakan tag orangnya!\n\nContoh : ${usedPrefix + command} @tag`
    
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 
   m.react(rwait)

  let rki = await fetch(`https://api.waifu.pics/sfw/kiss`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let { url } = jkis
   let stiker = await sticker(null, url, `(${name2}) mencium`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('😚') 
   
}

handler.help = ['kiss @tag']
handler.tags = ['rnime']
handler.command = /^(kiss|cium|cipok)$/i
handler.limit = true
handler.group = true

export default handler
