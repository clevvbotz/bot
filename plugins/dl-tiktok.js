
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `Harap masukkan tautan tiktok!\n\nContoh : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `Pastikan bahwa tautan tersebut berasal dari tiktok!`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Nama:* ${p.nickname}
▢ *Username:* ${p.unique_id}
▢ *Durasi:* ${p.duration}
▢ *Deskripsi:* ${p.description}
└───────────`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Terjadi kesalahan saat mengunduh video'
    conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *TIKTOK DL-2*
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Deskripsi:* ${description}` : ''}
└───────────`, m)
m.react(done)
} catch {
    m.reply(`Terjadi kesalahan saat mengunduh video`)
}
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt)$/i
handler.limit = true

export default handler
