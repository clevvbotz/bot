
let handler = async (m, { conn, usedPrefix, command }) => {
	
if (!m.quoted) throw `Balas pesan yang ingin kamu hapus`
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (isAdmin && isBotAdmin) return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
handler.help = ['delete']
handler.tags = ['tool']
handler.command = /^del(ete)?$/i
handler.group = false

export default handler
