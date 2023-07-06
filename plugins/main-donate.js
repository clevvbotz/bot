
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *Donasi*
Kamu dapat berdonasi jika ingin membantu agar bot tetap aktif

▢ *DANA*
• *Nomor :* 089524664142 
`
let img = 'https://telegra.ph/file/23725c41336747ace1ae9.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donate', 'donasi'] 

export default handler
