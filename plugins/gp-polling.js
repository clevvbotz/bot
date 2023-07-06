
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `Harap masukkan pesan polling!\n\nContoh :\n*${usedPrefix + command}* Ini pesan polling|Pilihan 1|Pilihan 2|Pilihan 3`
if (!text.includes('|')) throw  `Harap isi pesan polling dengan *|* \n\nContoh : \n*${usedPrefix + command}* Ini pesan polling|Pilihan 1|Pilihan 2|Pilihan 3`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survei diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll']
handler.tags = ['group'] 
handler.command = ['poll', 'survei', 'polling'] 
handler.group = true

export default handler
