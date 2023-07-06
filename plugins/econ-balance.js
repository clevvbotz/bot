
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `Pengguna tidak terdaftar dalam database!`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *Nama* : _@${who.split('@')[0]}_
▢ *Limit* : _${user.limit}_
▢ *XP* : _Total ${user.exp}_
└──────────────

*NOTA :* 
Anda dapat membeli limit menggunakan perintah
❏ *${usedPrefix}buy <jumlah>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'limit', 'balance'] 

export default handler
