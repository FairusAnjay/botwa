const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b31b5f0109ff5bd098704.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/62895604670507?text=.chat 62895604670507|Hi Zens Hehehe ๐น', body: 'Yor  Botz By Zens', thumbnail: await (await fetch('https://telegra.ph/file/b31b5f0109ff5bd098704.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/62895604670507?text=.chat 62895604670507|Hi Zens Hehehe ๐น', body: 'Yor  Botz By Zens', thumbnail: await (await fetch('https://telegra.ph/file/b31b5f0109ff5bd098704.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/62895604670507?text=.chat 62895604670507|Hi Zens Hehehe ๐น', body: 'Yor  Botz By Zens', thumbnail: await (await fetch('https://telegra.ph/file/b31b5f0109ff5bd098704.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก

๐ Pesan : ${pesan}

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก

Maaf Anda Belum Bisa Membalas ke Pengirim`

let haori = `โฎPENGIRIM RAHASIA ใ 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

    
    let logs = `BOT AKAN BLOKIR KONTAKMU?
    
โซ Spam
โซ Chat Aneh Aneh
โซ Berantem`

 let haori1 = `Sukses Mengirim Pesan
๐ฅ Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก

Isi Pesan : ${pesan}

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก`
handler.help = ['menfes <nomor|pesan>']
handler.tags = ['menfes']
handler.command = /^(chat|menfess)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
