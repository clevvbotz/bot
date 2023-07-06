import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `*Contoh Penggunaan:*\n\n *${usedPrefix + command}* Apakah aku jelek?`
  m.react('🫣') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) 
m.reply(`≡ *PERTANYAAN*
 
▢ *Pertanyaan:* ${text}
▢ *Jawaban :* ${json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux')}`) 
  else throw json
}

handler.help = ['apakah']
handler.tags = ['fun']
handler.command = ['apakah'] 

export default handler
