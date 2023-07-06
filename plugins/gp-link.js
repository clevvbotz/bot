import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya dapat digunakan didalam grup!'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata tidak diketahui!'
    if (!('participants' in groupMetadata)) throw 'Peserta tidak ada dalam grup itu!'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Bot tidak sedang berada didalam grup itu!'
    if (!me.admin) throw 'Bot bukan admin!'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['link']
handler.tags = ['group']
handler.command = ['link', 'linkgroup'] 

export default handler
