import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6289524664142', 'My Owner', true],
  ['6282339922441'], 
  ['6289524664142'] 
] //Numeros de owner 

global.mods = ['6289524664142'] 
global.prems = ['6289524664142']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'TsukasaBotz-Md' 
global.author = '@TsukasaBotz-Md' 
global.fgig = '▢ ikuti saya di instagram \nhttps://www.instagram.com/jayasantika_26\n' 
global.dygp = 'https://chat.whatsapp.com/CzI7JlzRUBN88VEFXrK9TI'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'http://info-nanzone.nans.tech/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://telegra.ph/file/8a15db53ed4cca454bc48.jpg' 

global.wait = '*⌛ _Mohon tunggu sebentar..._*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})