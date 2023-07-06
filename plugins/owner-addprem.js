//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `Harap tag pengguna yang ingin dijadikan premium!\n\nContoh : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw 'Pengguna tersebut sudah menjadi premium!'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
@${who.split`@`[0]} Sekarang kamu menjadi pengguna premium
┌───────────
▢ *Nama:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
