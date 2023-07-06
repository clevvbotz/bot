//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `*Harap masukkan nomor seri*\nPeriksa nomor seri Anda dengan perintah...\n\n*${usedPrefix}nomor seri*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '*Nomor seri tidak valid!*'
  user.registered = false
  m.reply(`Berhasil melakukan unreg. Sekarang kamu tidak terdaftar di bot ini!`)
}
handler.help = ['unreg <nomor seri>'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler

