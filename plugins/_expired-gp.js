export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `Sayonara👋 *${this.user.name}* akan meninggalkan grup karena batas sewa kamu sudah habis\n\n_Chat owner jika ingin menyewa bot ini lagi ya!_`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}