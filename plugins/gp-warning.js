
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `Harap tag pengguna!\n\nContoh : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `Pengguna tidak terdaftar didalam database!`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Pengguna yang diberi WARN* ⚠️

▢ *Admin:* ${name}
▢ *Pengguna:* @${who.split`@`[0]}
▢ *Warn:* ${warn + 1}/${war}
▢ *Alasan:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *WARN* ⚠️
Anda menerima warn dari admin

▢ *Warn:* ${warn + 1}/${war} 
Jika kamu menerima *${war}* warn\nKamu akan dikeluarkan otomatis dari grup ini!`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`Kamu melebihi *${war}* warn\n\n*Maaf kamu akan dikeluarkan dari grup ini!*`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`Kamu telah dikeluarkan dari grup *${groupMetadata.subject}* karena kamu sudah menerima warn sebanyak *${war}* kali`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
