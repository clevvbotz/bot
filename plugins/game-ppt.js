//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `Contoh : *${usedPrefix + command}* kertas\n\n*Pilihan yang tersedia:*\n• Batu\n• Gunting\n• Kertas`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Seri*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Hadiah (±)100 XP`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Kamu menang!* 🎊\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Hadiah *${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu kalah!*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n Poin kamu berkurang *${poin} XP*`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Kamu menang!* 🎊\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Hadiah *${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu kalah!*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\nPoin kamu berkurang *${poin} XP*`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Kamu menang!* 🎊\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Hadiah *${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu kalah!*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\nPoin kamu berkurang *${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['suit <batu/gunting/kertas>']
handler.tags = ['game']
handler.command = ['suit'] 
handler.register = false

export default handler
