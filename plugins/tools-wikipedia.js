import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `Harap masukkan apa yang ingin kamu cari di wikipedia?` 
	
    try {
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *Wikipedia*

‣ Pencarian : ${wik}

${resulw}`)
} catch (e) {
  m.reply('Tidak ada hasil yang ditemukan!')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','wikipedia'] 


export default handler
