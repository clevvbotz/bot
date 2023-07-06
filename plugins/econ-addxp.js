//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Harap tag pengguna'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah *XP* yang ingin kamu tambahkan'
  if (isNaN(txt)) throw 'Teks harus berupa angka!'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw 'Pemberian XP minimum *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *BERHASIL MENAMBAHKAN XP*
┌──────────────
▢  *Total:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Mendapat \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

