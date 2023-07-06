
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `Harap masukkan nama gambar yang ingin kamu cari\n\nContoh: *${usedPrefix + command}* Billie Eilish`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `Hasil dari: *${text}*`.trim(), m)
}
handler.help = ['image']
handler.tags = ['img']
handler.command = /^(img|image|gimage)$/i
handler.diamond = true

export default handler
