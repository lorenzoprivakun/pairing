var api = require('hxz-api')
var handler = async (m, { conn, text, usedPrefix, command }) => {
 
 if (!text) throw `Link Facebook-nya mana?\n\n📌 Contoh:\n*${usedPrefix + command}* https://fb.watch/7B5KBCgdO3`
var response = await api.fbdown(text)
  
 	  
 conn.sendFile(m.chat, response.Normal_video, 'fb.mp4', wm, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
module.exports = handler