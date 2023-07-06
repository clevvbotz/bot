import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `Harap masukkan judul lagu\n\nContoh: *${usedPrefix + command}* melukis senja`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `Video/Audio Tidak Ditemukan`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `
	≡ *PLAY MUSIC*
┌──────────────
▢ 📌 *Judul* : ${title}
▢ 📆 *Diterbitkan:* ${ago}
▢ ⌚ *Durasi:* ${timestamp}
▢ 👀 *Penonton:* ${views}
└──────────────`
 await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = true

export default handler