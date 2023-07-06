//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Harap tag pengguna!'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'Masukkan jumlah *Limit* yang ingin kamu tambahkan'
    if (isNaN(txt)) throw 'Teks harus berupa angka!'
    let dmt = parseInt(txt)
    let limit = dmt
    
    if (limit < 1) throw 'Pemberian limit minimum *1*'
    let users = global.db.data.users
   users[who].limit += dmt

    await m.reply(`≡ *BERHASIL MENAMBAHKAN LIMIT*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Mendapat \n\n *+${dmt}* Limit`, who, m.text)
}

handler.help = ['addlimit <@user>']
handler.tags = ['econ']
handler.command = ['addlimit'] 
handler.rowner = true

export default handler

