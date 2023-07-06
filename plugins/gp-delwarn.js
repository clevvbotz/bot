
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `Harap tag pengguna yang ingin diberi warn!`
        if (!(who in global.db.data.users)) throw `Pengguna tidak terdaftar didalam database!`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *WARN* ⚠️
         
▢ Warn saat ini: *-1*
▢ Total Warn: *${warn - 1}*`)
         m.reply(`Admin telah mengurangi warn kamu. Sekarang kamu memiliki *${warn - 1}* warn`, who)
         } else if (warn == 0) {
            m.reply('Kamu tidak memiliki warn!')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
