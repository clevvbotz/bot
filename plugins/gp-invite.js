
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `Harap masukkan nomor yang ingin kamu undang ke grup\n\nContoh :\n*${usedPrefix + command}* 62851743061830`
if (text.includes('+')) throw  `Harap masukkan nomor sejajar tanpa tanda *+* dan nomor *0*\n\nDan awalan harus berupa kode negara!`
if (isNaN(text)) throw 'Harap masukkan hanya angka ditambah kode negara kamu tanpa spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\nSeorang pengguna mengundang kamu untuk bergabung dengan grup ini\n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`Berhasil mengirim tautan undangan ke pengguna!`) 

}
handler.help = ['invite <628xxx>']
handler.tags = ['group']
handler.command = ['invite','undang'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
