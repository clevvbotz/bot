let handler = async (m, { conn, usedPrefix }) => {
	let name = conn.getName(m.sender)
    m.reply(`Halo!, silakan ketik ${usedPrefix}menu untuk memulai bot ini ya!`)
} 

handler.customPrefix = /^(bot|tsukasa)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
