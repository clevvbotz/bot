
import yts from 'yt-search'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `Harap masukkan judul lagu!\n\nContoh *${usedPrefix + command}* Cupid`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `Video/Audio Tidak Ditemukan`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `
	≡ *PLAY MUSIC*
┌──────────────
▢ 📌 *Judul* : ${vid.title}
▢ 📆 *Diterbitkan:* ${vid.ago}
▢ ⌚ *Durasi:* ${vid.timestamp}
▢ 👀 *Penonton:* ${vid.views}
└──────────────

_File sedang dikirim, mohon tunggu sebentar..._`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpl)

if (size.split('MB')[0] >= limit) return m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️ Ukuran* : ${size}\n▢ *🎞️ Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`) 
if (size.includes('GB')) return m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️ Ukuran* : ${size}\n▢ *🎞️ Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *PLAY YTDL*
  
▢ *📌 Judul* : ${title}
▢ *🎞️ Kualitas* : ${q}
▢ *⚖️ Ukuran* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Kesalahan: Silakan coba lagi beberapa saat`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
