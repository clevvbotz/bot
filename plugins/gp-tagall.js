let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Grup : *${groupMetadata.subject}*\n▢ Member : *${participants.length}*${text ? `\n▢ Pesan : ${text}\n` : ''}\n┌───⊷ *TAGALL*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ *Tag All Member By Admin* ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
