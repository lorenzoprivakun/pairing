let { Configuration, OpenAIApi } = require("openai")
let fetch = require("node-fetch")
let { generateWAMessageFromContent } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn, text }) => {
            if (!text) return m.reply(`Membuat gambar dengan bantuan AI \nContoh : .imgai Pohon Sakura dekat sungai`);
            const configuration = new Configuration({
              apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            conn.sendFile(m.chat, response.data.data[0].url, text);
            }
handler.help = ['imageai']
handler.tags = ['fun']
handler.command = /^(img|imgai|imageai)$/i
module.exports = handler