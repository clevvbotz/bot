import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Gambar apa yang kamu ingin bot cari?\n\nContoh  : ${usedPrefix + command} cewek cantik`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest'] 

export default handler
