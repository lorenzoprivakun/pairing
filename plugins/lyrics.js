let { lyrics, lyricsv2 } = require('@bochilteam/scraper')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Judul lagu mana?\n Contoh :${usedPrefix}${command} Onlu Love Can Hurt Like This`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['lirik'].map(v => v + ' <song name>')
handler.tags = ['internet','tools']
handler.command = /^(lirik|lyrics|lyric)$/i

module.exports = handler