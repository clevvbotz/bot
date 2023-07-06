//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Pesan berhasil diatur!')
  } else throw `Harap masukkan pesan!\n\n@user (menyebut peserta dalam tag)\n@group (Nama grup saat ini)\n@desc (Deskripsi grup)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
