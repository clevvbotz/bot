//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `Kamu sudah terdaftar\n\nIngin mendaftar ulang?\n\nGunakan perintah ini untuk menghapus pendaftaran kamu\n*${usedPrefix}unreg* <Nomor Seri>`
  if (!Reg.test(text)) throw `Format salah\n\nPenggunaan perintah: *${usedPrefix + command} nama.usia*\nContoh : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong'
  if (!age) throw 'Usia tidak bisa kosong'
  if (name.length >= 30) throw 'Namanya terlalu panjang' 
  age = parseInt(age)
  if (age > 100) throw 'Umur kamu teralu tua!'
  if (age < 5) throw 'Njir bayi bisa ngetik sesuai format🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTER* 」─
▢ *Nama:* ${name}
▢ *Umur* : ${age} tahun
▢ *Nomor Seri* :
${sn}
└──────────────

 *${usedPrefix}help* untuk melihat fitur bot ini
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nama.umur>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register'] 

export default handler

