
let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/2cb377366f990d128aede.jpg'
let dann =
`
┏━━━ꕥ〔 *E-WALLET* 〕ꕥ━⬣ 
┃DANA💙: 087764814350
┃OVO💜: 087764814350 
┃GOPAY💚: 087764814350
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃WA Owner: wa.me/6285876830674
┃bantu
┃donasi
┃bang
┃agar on terus
┗━━━━━━━━━━━━━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler