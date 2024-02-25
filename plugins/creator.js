let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
// FAKE KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Owner\nNICKNAME: Owner\nORG: owner\nTITLE:\nitem1.TEL;waid=6285876830674:+62 858 7683 0674\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://chat.whatsapp.com/LvFWJkJHanHLRAPB0MgmCO\nitem2.EMAIL;type=INTERNET: ivantheo159@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fcon })
let caption = `*@${who.split("@")[0]}*, Lord saya itu. Jangan dispam.`
    await conn.sendButton(m.chat, caption, wm, null, [['Menu', '.menu']], m, { quoted: fcon, mentions: conn.parseMention(caption) })
}
if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; owner\nNICKNAME: Creator\nORG: creator\nTITLE:\nitem1.TEL;waid=6285809011357:+62 858 0901 1357\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://chat.whatsapp.com/LvFWJkJHanHLRAPB0MgmCO\nitem2.EMAIL;type=INTERNET: 6285876830674\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fcon })
let caption = `*@${who.split("@")[0]}*, Lord saya itu. Jangan dispam.`
    await conn.sendButton(m.chat, caption, wm, null, [['Menu', '.menu']], m, { quoted: fcon, mentions: conn.parseMention(caption) })
  
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner)$/i

module.exports = handler