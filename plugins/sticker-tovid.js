import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `Harap balas stiker dengan :\n\n *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw `Harap balas stiker dengan :\n\n *${usedPrefix + command}*`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'tovid.mp4', '✅ Done' , m)
}
handler.help = ['tovid']
handler.tags = ['sticker']
handler.command = ['tovideo', 'tovid']

export default handler
