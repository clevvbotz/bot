
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `Harap masukkan nama pengguna instagram!\n\nContoh: ${usedPrefix + command} nanzone` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Nama:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Pengikut:* ${res.followersH}
▢ *🫂Mengikuti:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`Pastikan nama pengguna tersedia di instagram!`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
