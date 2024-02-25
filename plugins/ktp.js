let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh: 97191937399918|lins-MD|Sampang, 11-04-2006|Laki-Laki|Jawa Timur|00/00|Pangarengan|Sampang|Islam|Belum Kawin|Main ML|Indonesia|Seumur Hidup|Jawa Timur|Sampang|https://telegra.ph/file/2cb377366f990d128aede.jpg'
  m.reply('Tunggu Sebentar...')
  let res = `https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${response[0]}&nama=${response[1]}&ttl=${response[2]}&jk=${response[3]}&gd=abc&almt=${response[4]}&rtw=${response[5]}&kel=${response[6]}&kc=${response[7]}&agm=${response[8]}&st=${response[9]}&krj=${response[10]}&ngr=${response[11]}&blk=${response[12]}&prv=${response[13]}&kab=${response[14]}&picturl=${response[15]}`
    conn.sendFile(m.chat, res, 'ktp.jpg', `Nih kak\n${global.wm}`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(ktp)$/i
handler.limit = false

module.exports = handler