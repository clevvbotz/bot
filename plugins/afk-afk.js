//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
*${conn.getName(m.sender)}* sekarang AFK!
▢ *Dengan alasan:* ${text ? text : ''}
  `)
}
handler.help = ['afk <alasan>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
