
import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `Harap masukkan teks yang ingin kamu telusuri!\n\n*Contoh:*\n${usedPrefix + command} homero`
    
    //Resultados de https://getstickerpack.com/
    try {
   /*let res = await fetch(global.API('fgmods', '/api/getsticker', { q:text }, 'apikey'))
   let json = await res.json()*/
   let json = await fg.StickerSearch(text) 
    m.reply(`
▢ *Judul:* ${json.title}
▢ *Total stiker:* ${json.sticker_url.length}
▢ *Perkiraan waktu pengiriman:* _*${json.sticker_url.length * 2} s*_`)
    for (let i of json.sticker_url) {
        const stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        //await delay(1500)
    }
    } catch (e) {
	m.reply(`Kesalahan: Coba yang lain`)
	} 
}
handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['getsticker', 'getstick', 'stickersearch', 'sticksearch'] 
handler.limit = 3

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
