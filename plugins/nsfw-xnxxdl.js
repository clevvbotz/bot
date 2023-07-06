
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `Grup ini tidak mendukung konten nsfw!\n\nUntuk mengaktifkan ketik:\n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `Kamu masih di bawah umur! Kembalilah saat kamu berusia di atas 18 tahun`
  if (!text) throw `Untuk mencari\nGunakan : *${usedPrefix + command} <search>*\n\nUntuk mengunduh dari URL:\nGunakan : *${usedPrefix + command} <url>*`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Masukkan tautan ke *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌 Judul*: ${xn.result.title}
▢ *⌚ Durasi:* ${xn.result.duration}
▢ *🎞️ Kualitas:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Kesalahan: Coba lagi nanti`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Titulo* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Kesalahan: Coba Lagi Nanti`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
