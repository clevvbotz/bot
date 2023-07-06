let handler = async(m, { conn, usedPrefix, command }) => {
	
    let img = await conn.getFile(global.API('fgmods', '/api/img/asupan-la', { }, 'apikey'))
    let asupan = img.data
   
conn.sendFile(m.chat, asupan, 'file.mp4', 'Done!', m)
    m.react(dmoji)
    
}
handler.help = ['asupan']
handler.tags = ['img']
handler.command = ['asupan']
handler.premium = false
handler.limit = true

export default handler