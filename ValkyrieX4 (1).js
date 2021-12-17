/*
Jangan Hapus Di Bawah
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴
*/
const
  {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
  } = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');
const brainly = require('brainly-scraper')
const yts = require('yt-search')
const ms = require('parse-ms')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File } = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let ValkyrieX4thumb = 'https://telegra.ph/file/f1674683f8d9cb89e015f.jpg'

banChats = true
offline = false
ownerNumber = ["6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net", "6283805897808@s.whatsapp.net"]
targetpc = '6283805897808'
owner = '6283805897808'
fake = '®Mecha Senku'
botName = '®Mecha Senku'
numbernye = '0'
waktu = '-'
alasan = '-'
tamnel = fs.readFileSync('./stik/thumb.jpeg')

xchillds = 'XChillDs'
HunterApi = 'Ikyy69'
XteamKey = 'MIMINETBOT'
apikey = 'MeyshuApii'
DapApi = 'dappauhuy'
spykey = 'SpyBotApi'
indoapi = 'Fxc7'
botxyz = 'Aprii'
rakukey = 'RakuKeyTod'
apisenku = 'SenkuApi'
valkey = 'rivalgans'

pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo

hargasc = setting.hargasc

hit_today = []
///database

let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))

//

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};
function parseMention(text = '') {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//=================================================//
module.exports = Valkyrie = async (Valkyrie, mek) => {
  try {
    if (!mek.hasNewMessage) return
    mek = mek.messages.all()[0]
    if (!mek.message) return
    if (mek.key && mek.key.remoteJid == 'status@broadcast') return
    global.blocked
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const type = Object.keys(mek.message)[0]
    const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
    responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
    button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
    isImage = (type === 'imageMessage')
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    hit_today.push(command)
    const arg = body.substring(body.indexOf(' ') + 1)
    const ar = args.map((v) => v.toLowerCase())
    const argz = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefix)
    const q = args.join(' ')
    const botNumber = Valkyrie.user.jid
    const botNumberss = Valkyrie.user.jid + '@c.us'
    const isGroup = from.endsWith('@g.us')
    let sender = isGroup ? mek.participant : mek.key.remoteJid
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await Valkyrie.chats.all()
    const groupMetadata = isGroup ? await Valkyrie.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupId = isGroup ? groupMetadata.jid : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupDesc = isGroup ? groupMetadata.desc : ''
    const groupOwner = isGroup ? groupMetadata.owner : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const isVote = isGroup ? voting.includes(from) : false
    const isWelkom = isGroup ? welkom.includes(from) : false
    const isAntiLink = isGroup ? antilink.includes(from) : false
    const conts = mek.key.fromMe ? Valkyrie.user.jid : Valkyrie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = mek.key.fromMe ? Valkyrie.user.name : conts.notify || conts.vname || conts.name || '-'
    const isOwner = ownerNumber.includes(sender)
    const isMybot = isOwner || mek.key.fromMe
    let d = new Date
    let locale = 'en'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

    //MESS
    mess = {
      wait: 'Otewe',
      success: 'Berhasil!',
      wrongFormat: 'Format salah, coba liat lagi di menu',
      error: {
        stick: 'bukan sticker itu:v',
        Iv: 'Linknya error:v'
      },
      only: {
        group: 'Khusus grup ngab',
      }
    }
    const isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
    }

    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
      let po = Valkyrie.prepareMessageFromContent(from, { "listMessage": { "title": title, "description": desc, "buttonText": "SELECT", "footerText": "_*®Mecha Senku", "listType": "SINGLE_SELECT", "sections": list } }, {})
      return Valkyrie.relayWAMessage(po, { waitForAck: true })
    }

    const runtime = function (seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor(seconds % (3600 * 24) / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 60);
      var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    }

    const fakevo = {
      key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: 'status@broadcast'
      },
      message: {
        imageMessage: {
          mimetype: 'image/jpeg',
          caption: 'KirBotz',
          jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'),
          viewOnce: true
        }
      }
    }
    const reply = (teks) => {
      Valkyrie.sendMessage(from, teks, text, { quoted: fvid })
    }
    //Button
    const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      let kma = gam1
      let mhan = await Valkyrie.prepareMessage(from, kma, image)
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4
      }
      Valkyrie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1
      }
      Valkyrie.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
    }
    const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {
      kma = vid1
      mhan = await Valkyrie.prepareMessage(from, kma, video)
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
      }
      Valkyrie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    const sendButloc = (from, title, text, desc, button, sen, men, file) => {
      return Valkyrie.sendMessage(from, { "text": '', "contentText": title + text, "footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file } }, MessageType.buttonsMessage, { quoted: mek, contextInfo: { "mentionedJid": men ? men : [] } })
    }
    const sendMess = (hehe, teks) => {
      Valkyrie.sendMessage(hehe, teks, text)
    }

    const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? Valkyrie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Valkyrie.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
    }

    const fakestatus = (teks) => {
      Valkyrie.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
          },
          message: {
            "imageMessage": {
              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              "mimetype": "image/jpeg",
              "caption": fake,
              "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              "fileLength": "28777",
              "height": 1080,
              "width": 1079,
              "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              "mediaKeyTimestamp": "1610993486",
              "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
              "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
          }
        }
      })
    }
    const fakethumb = (teks, yes) => {
      Valkyrie.sendMessage(from, teks, image, { thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: mek, caption: yes })
    }
    const fakegroup = (teks) => {
      Valkyrie.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
          },
          message: {
            "imageMessage": {
              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              "mimetype": "image/jpeg",
              "caption": fake,
              "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              "fileLength": "28777",
              "height": 1080,
              "width": 1079,
              "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              "mediaKeyTimestamp": "1610993486",
              "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
              "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
          }
        }
      })
    }
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
      download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
          let media = fs.readFileSync(asw)
          Valkyrie.sendMessage(to, media, MessageType.sticker, { quoted: mek })
          fs.unlinkSync(filess)
          fs.unlinkSync(asw)
        });
      });
    }
    const sticOwner = (hehe) => {
      ano = fs.readFileSync('./sticker/anime/owner.webp')
      Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi })
    }
    const sticNotAdmin = (hehe) => {
      ano = fs.readFileSync('./sticker/anime/notadmin.webp')
      Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi })
    }
    const sticAdmin = (hehe) => {
      ano = fs.readFileSync('./sticker/anime/admin.webp')
      Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi })
    }
    const sticWait = (hehe) => {
      ano = fs.readFileSync('./sticker/anime/wait.webp')
      Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi })
    }
    const sticOk = (hehe) => {
      ano = fs.readFileSync('./sticker/anime/ok.webp')
      Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi })
    }
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids)
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString()
      let mime = ""
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers['content-type']
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
      };
      download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0] + "Message"
        if (mime === "image/gif") {
          type = MessageType.video
          mime = Mimetype.gif
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio
        }
        Valkyrie.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text, contextInfo: { "mentionedJid": mids } })

        fs.unlinkSync(filename)
      });
    }
    //FUNCTION
    cekafk(afk)
    if (!mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Valkyrie.sendMessage(mek.key.remoteJid, `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text, { contextInfo: { mentionedJid: [`${owner}@s.whatsapp.net`], 'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': { "imageMessage": { "caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg') } } } })
      }
    }
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
              for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return
                  addafk(mek.key.remoteJid)
                  heheh = ms(Date.now() - waktu)
                  Valkyrie.sendMessage(mek.key.remoteJid, `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text, { contextInfo: { mentionedJid: [`${owner}@s.whatsapp.net`], 'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': { "imageMessage": { "caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg') } } } })
                }
              }
            }
          }
        }
      }
    }
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if (time2 < "23:59:00") {
      var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
    }
    const fdoc = {
      key: {
        participant: '0@s.whatsapp.net'
      },
      message: {
        documentMessage: {
          title: `${ucapanWaktu} ${pushname}`,
          jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
        }
      }
    }
    const floc = {
      key: {
        participant: '0@s.whatsapp.net'
      },
      message: {
        liveLocationMessage: {
          caption: `${ucapanWaktu} ${pushname}`,
          jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
        }
      }
    }
    const fgi = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
          { remoteJid: "6289643739077-1613049930@g.us" } : {})
      },
      message: {
        "videoMessage": {
          "title": `${ucapanWaktu} ${pushname}`,
          "h": `${ucapanWaktu} ${pushname}`,
          'duration': '99999',
          'gifPlayback': 'true',
          'caption': `${ucapanWaktu} ${pushname}`,
          'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
        }
      }
    }
    const fvid = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
          { remoteJid: "6289643739077-1613049930@g.us" } : {})
      },
      message: {
        "videoMessage": {
          "title": `${ucapanWaktu}`,
          "h": `${ucapanWaktu}`,
          'duration': '99999',
          'caption': `${ucapanWaktu}`,
          'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
        }
      }
    }
    function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    if (isGroup && !mek.key.fromMe && isAntiLink) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
        console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
        reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
        setTimeout(() => {
          Valkyrie.groupRemove(from, [sender])
        }, 2000);
      }
    }
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await Valkyrie.setStatus(`Aktif Selama: ${runtime(process.uptime())} | Mode: ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'} || ®Mecha Senku`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
    //========================================================================================================================//
    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === 'vote') {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283805897808@s.whatsapp.net'
        if (fil.includes(id_vote)) {
          return mentions('@' + sender.split('@')[0] + ' Anda sudah vote', fil, true)
        } else {
          vote.push({
            participant: id_vote,
            voting: '✅'
          })
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote))
          let _p = []
          let _vote = '*Vote* ' + '@' + _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
            _p.push(vote[i].participant)
          }
          _p.push(_votes[0].votes)
          mentions(_vote, _p, true)
        }
      } else if (budy.toLowerCase() === 'devote') {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6283805897808@s.whatsapp.net'
        if (fil.includes(id_vote)) {
          return mentions('@' + sender.split('@')[0] + ' Anda sudah vote', fil, true)
        } else {
          vote.push({
            participant: id_vote,
            voting: '❌'
          })
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote))
          let _p = []
          let _vote = '*Vote* ' + '@' + _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
            _p.push(vote[i].participant)
          }
          _p.push(_votes[0].votes)
          mentions(_vote, _p, true)
        }
      }
    }

    let mengt = `ValkyrieX4·Team`
    const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
    const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
    const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    if (!mek.key.fromMe && banChats === true) return

    // Auto 
    Valkyrie.updatePresence(from, Presence.recording)
    Valkyrie.chatRead(from, "read")
    if (!mek.key.fromMe && banChats === true) return
    switch (command) {
      case 'jadibot':
        if (!isOwner) return sticOwner(from)
        jadibot(reply, Valkyrie, from)
        break
      case 'stopjadibot':
        if (!isOwner) return sticOwner(from)
        stopjadibot(reply)
        break
      case 'listbot':
        let tekss = '「 *LIST JADIBOT* 」\n'
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
        }
        reply(tekss)
        break
      case 'own':
        let ValkyrieX4·Team = Valkyrie.prepareMessageFromContent(from, {
          "listMessage": {
            "title": `Hai kak ${pushname},${ucapanWaktu}\n`,
            "description": "INI CREDITS",
            "buttonText": "SELECT",
            "footerText": `THANKS TO ALL CREATOR`,
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "title": "◉ OWNER Ke-1",
                "rows": [
                  {
                    "title": "LordPebri",
                    "description": "YT FEBZABOTZ",
                    "rowId": `owner1`
                  }
                ]
              },
              {
                "title": "◉ OWNER ke-2",
                "rows": [
                  {
                    "title": "KahfzBot",
                    "description": "YT KAHFZBOTZ",
                    "rowId": `owner2`
                  }
                ]
              },
              {
                "title": "◉ OWNER ke-3",
                "rows": [
                  {
                    "title": "AkiraBot",
                    "description": "YT KIRBOTZ",
                    "rowId": `owner3`
                  }
                ]
              },
              {
                "title": "◉ OWNER ke-4",
                "rows": [
                  {
                    "title": "Aril Style",
                    "description": "YT ARILBOTZ",
                    "rowId": `owner4`
                  }
                ]
              },
              {
                "title": "◉ OWNER ke-5",
                "rows": [
                  {
                    "title": "FauzanBotz",
                    "description": "YT FAUZANBOTZ",
                    "rowId": `owner5`
                  }
                ]
              },
              {
                "title": "◉ OWNER ke-6",
                "rows": [
                  {
                    "title": "Adi Official",
                    "description": "YT ADI OFFICIAL",
                    "rowId": `owner6`
                  }
                ]
              },
              {
                "title": "◉ OWNER ke-7",
                "rows": [
                  {
                    "title": "Lord Galih",
                    "description": "Galih Aja",
                    "rowId": `owner7`
                  }
                ]
              }
            ]
          }


        },
          {}
        )
        Valkyrie.relayWAMessage(ValkyrieX4·Team, { waitForAck: true })
        break
      // CREDITS TEAM
      case 'owner1':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:LordPebri\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=6285849261085:6285849261085\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Jangan Lupa Subscribe_*\nhttps://youtube.com/c/FEBZABOTZ')
        break
      case 'owner2':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:KahfzBotz\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=6283127014833:6283127014833\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw')
        break
      case 'owner3':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:AkiraBotz\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=6283805897808:6283805897808\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg')
        break
      case 'owner4':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:ArilStyle\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=62881024358619:62881024358619\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCLPjdfA1WqgHLHc3lsn2kmA')
        break
      case 'owner5':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:FauzanBot\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=6289516004292:6289516004292\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCZnor19gyF010anLraDWTTA')
        break
      case 'owner6':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:Adi OFC\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=6289504585790:62895-04585790\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCXzxFx9pitmYFLJo4nHrRPg')
        break
      case 'owner7':
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:Lord Galih\n`
          + `ORG: Creator Bot ;\n`
          + `TEL;type=CELL;type=VOICE;waid=6289530863358:6289530863358\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `Creator Bot`, vcard: vcard2 }, contact,
          {
            quoted: mek,
          })
        reply('Chat aja bang_*')
        break
      case 'credit': // fix by Akira Gantenk
        stod = `${sender.split('@')[0]}@s.whatsapp.net`
        taggg = `
⬣ THANKS TO TEAM
    *ValkyrieX4·Team*
 • メ𝐀𝐤𝐢𝐫𝐚 ⟨ @6283805897808 ⟩
 • メ𝐊𝐚𝐡𝐟𝐳 ⟨ @6283127014833 ⟩
 • メ𝐀𝐫𝐢𝐥 ⟨ @62881024358619 ⟩
 • メ𝐆𝐚𝐥𝐢𝐡 ⟨ @6289530863358 ⟩
 • メ𝐅𝐚𝐮𝐳𝐚𝐧 ⟨ @6289516004292 ⟩
 • メ𝐏𝐞𝐛𝐫𝐢 ⟨ @6285849261085 ⟩
 
⬣ SPECIAL THANKS
 _*• Hexagonz/Base
 _*• Penyedia Api
 _*• Adiwajshing/Baileys
 _*• All User ${botName}
 `
        mentions(taggg, [`6283805897808@s.whatsapp.net`, `6283127014833@s.whatsapp.net`, `62881024358619@s.whatsapp.net`, `6289530863358@s.whatsapp.net`, `6289516004292@s.whatsapp.net`, `6285849261085@s.whatsapp.net`], true)
        break
      case 'menu': case 'help':
        reply('Wait Menampilkan Menu!!!')
        listMsg = {
          buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
          footerText: 'Lord KirBotz×',
          description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
          sections: [
            {
              "title": `${ucapanWaktu} - ${date}`,
              rows: [
                {
                  "title": "MENU PPTX",
                  "rowId": `menupptx`
                },
                {
                  "title": "MENU XLSX",
                  "rowId": `menuxlsx`
                },
                {
                  "title": "MENU DOCX",
                  "rowId": `menudocx`
                },
                {
                  "title": "MENU ZIP",
                  "rowId": `menuzip`
                },
                {
                  "title": "MENU PDF",
                  "rowId": `menupdf`
                },
                {
                  "title": "SEWA BOT",
                  "rowId": `sewabot`
                },
                {
                  "title": "OWNER BOT",
                  "rowId": `owner`
                }
              ]
            }],
          listType: 1
        }
        Valkyrie.sendMessage(from, listMsg, MessageType.listMessage, { contextInfo: { mentionedJid: [sender] }, quoted: fgi })
        break
      case 'menupptx':
        Valkyrie.sendMessage(from, {
          "contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283805897808*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`, "footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
          "buttons": [
            { buttonId: `.allmenu`, buttonText: { displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️' }, type: 1 },
            { buttonId: `.sc`, buttonText: { displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄' }, type: 1 }],
          "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "title": "KirBotz.pptx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
          }
        }, MessageType.buttonsMessage, { quoted: floc, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu}`, body: `${pushname}`, mediaType: "2", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg` } } })
        break
      case 'menuxlsx':
        Valkyrie.sendMessage(from, {
          "contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283805897808*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`, "footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
          "buttons": [
            { buttonId: `.allmenu`, buttonText: { displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️' }, type: 1 },
            { buttonId: `.sc`, buttonText: { displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄' }, type: 1 }],
          "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "title": "KirBotz.xlsx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
          }
        }, MessageType.buttonsMessage, { quoted: floc, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu}`, body: `${pushname}`, mediaType: "2", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg` } } })
        break
      case 'menudocx':
        Valkyrie.sendMessage(from, {
          "contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283805897808*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`, "footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
          "buttons": [
            { buttonId: `.allmenu`, buttonText: { displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️' }, type: 1 },
            { buttonId: `.sc`, buttonText: { displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄' }, type: 1 }],
          "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "title": "KirBotz.docx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
          }
        }, MessageType.buttonsMessage, { quoted: floc, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu}`, body: `${pushname}`, mediaType: "2", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg` } } })
        break
      case 'menuzip':
        Valkyrie.sendMessage(from, {
          "contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283805897808*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`, "footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
          "buttons": [
            { buttonId: `.allmenu`, buttonText: { displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️' }, type: 1 },
            { buttonId: `.sc`, buttonText: { displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄' }, type: 1 }],
          "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/zip",
            "title": "KirBotz.zip",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
          }
        }, MessageType.buttonsMessage, { quoted: floc, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu}`, body: `${pushname}`, mediaType: "2", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg` } } })
        break
      case 'menupdf':
        Valkyrie.sendMessage(from, {
          "contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283805897808*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`, "footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
          "buttons": [
            { buttonId: `.allmenu`, buttonText: { displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️' }, type: 1 },
            { buttonId: `.sc`, buttonText: { displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄' }, type: 1 }],
          "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "KirBotz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
          }
        }, MessageType.buttonsMessage, { quoted: floc, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu}`, body: `${pushname}`, mediaType: "2", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg` } } })
        break
      case 'script': case 'sc':
        Valkyrie.sendMessage(from, `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

Script Bot? Cek Yt Link Di Bawah ↓↓
•• https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg
`, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fdoc, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: "📄 𝕊ℂℝ𝕀ℙ𝕋 📄", body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sourceUrl: "https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg" } } })
        break
      case 'ssweb':
      case 'ss':
        if (args.length < 1) return reply('Urlnya mana om')
        teks = q
        anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
        buff = await getBuffer(anu.screenshot)
        Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: teks })
        break
      case 'infogrup':
      case 'infogrouup':
      case 'grupinfo':
      case 'groupinfo':
        if (!isGroup) return reply(mess.only.group)
        try {
          var pic = await Valkyrie.getProfilePicture(from)
        } catch {
          var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
        let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
        Valkyrie.sendMessage(from, await getBuffer(pic), image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6288215463787@g.us" } : {}) }, message: { "orderMessage": { "orderId": "6288215463787", "thumbnail": ``, "itemCount": 281005, "status": "INQUIRY", "surface": "CATALOG", "message": ` `, "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" } } }, caption: ingfo, contextInfo: { "mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')] } })
        break
        break
      case 'allmenu2':
        thu = await Valkyrie.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
        menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
「 𝐎𝐖𝐍𝐄𝐑 」
off
on
status

「 𝐌𝐀𝐊𝐄𝐑 」
sticker
swm <author|packname>
take <author|packname>
fdeface
emoji
nulis

「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 」
toimg
tomp3
tomp4
slow
fast
reverse
tourl

「 𝐔𝐏 𝐒𝐓𝐎𝐑𝐘 」
upswteks
upswimage
upswvideo

「 18+ 」
chiisaihentai
trap
blowjob
yaoi
ecchi
hentai
ahegao
hololewd
sideoppai
animefeets
animebooty
animethighss
hentaiparadise
animearmpits
hentaifemdom
lewdanimegirls
biganimetiddies
animebellybutton
hentai4everyone
loli
husbu
milf
cosplay
wallml
pornhub
glitch
avenger
space
ninjalogo
marvelstudio
lionlogo
wolflogo
steel3d
wallgravity
tiktok
arcade8bit
battlefield4
pubg

「 RANDOM 」
ppcouple
anime
wallpaper
neko
meme
quotes
quotesimage
randomnama
faktaunik
katabijak
pantun
bucin

「 TEXTPROME 」
blackpink
neon
greenneon
advanceglow
futureneon
sandwriting
sandsummer
sandengraved
metaldark
neonlight
holographic
text1917
minion
deluxesilver
newyearcard
bloodfrosted
halloween
jokerlogo
fireworksparkle
natureleaves
bokeh
toxic
strawberry
box3d
roadwarning
breakwall
icecold
luxury
cloud
summersand
horrorblood
thunderix}thunder


「 EPHOTO 360 」
wetglass
multicolor3d
watercolor
luxurygold
galaxywallpaper
lighttext
beautifulflower
puppycute
royaltext
heartshaped
birthdaycake
galaxystyle
hologram3d
greenneon
glossychrome
greenbush
metallogo
noeltext
glittergold
textcake
starsnight
wooden3d
textbyname
writegalacy
galaxybat
snow3d
birthdayday
freefire

「 PHOTO OXY 」
shadow
cup
cup1
romance
smoke
burnpaper
lovemessage
undergrass
love
coffe
woodheart
woodenboard
summer3d
wolfmetal
nature3d
underwater
golderrose
summernature
letterleaves
glowingneon
fallleaves
flamming
harrypotter
carvedwood

「 𝐅𝐔𝐍 」
fitnah
fitnahpc
kontak

「 𝐓𝐀𝐆 」
hidetag
kontag
sticktag
totag

「 *Music* 」
spotify <Url>
spotifysearch <query>

「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 」
ytsearch <query>
igstalk <query>
play <query>
video <query>
ytmp3 <link>
ytmp4 <link>
ig <link>
igstory <username>
twitter <link>
tiktok <link>
tiktokaudio <link>
fb <link>
brainly <query>
image <query>
anime <random>
pinterest <query>
komiku <query>
lirik <query>
chara <query>
playstore <query>
otaku <query>

「 𝐎𝐓𝐇𝐄𝐑 」
self
public
setthumb
settarget
setfakeimg
setreply
ping
inspect
join
caripesan <query>
get
term <code>
x <code>

「 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
jadibot
stopjadibot
listbot

「 𝐕𝐎𝐓𝐄 」
voting
delvote
vote
devote`
        Valkyrie.sendMessage(from, {
          contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6283805897808*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*

Runtime : *${runtime(process.uptime())}*
Tanggal *${date}*

Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord AriL⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴
̵`, buttons: [{ buttonId: `donasi`, buttonText: { displayText: 'メ Donasi' }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: 'メ Sewabot' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: { mentionedJid: [sender, owner] } }
        }, 'buttonsMessage')
        break
      case "astetick":
      case "videoanime":
      case "storyanime2":
        sticWait(from)
        Iki = await getBuffer(`https://megayaa.herokuapp.com/api/randomaesthetic`)
        Valkyrie.sendMessage(from, Iki, video, { quoted: mek, thumbnail: tamnel })
        break
      case 'sewabot':
thu = await Valkyrie.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
Valkyrie.sendMessage(from, { contentText: `${menuh}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nRuntime : *${runtime(process.uptime())}*\n𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`, buttons: [{ buttonId: `sewa1`, buttonText: { displayText: '🗿Ya' }, type: 1 },{ buttonId: `gk`, buttonText: { displayText: '👀Tidak' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'sewa1':
               list = []
               listmenu = [`waktu 1bulan`,`waktu 2bulan`,`waktu 6bulan`,`waktu panjang`]
               listmenuu = [`1 BULAN`,`2 BULAN`,`6 BULAN`,`PERPANJANG SEWA`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'LIST KE ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Silahkan Pilih List Yang Mau Di Sewa\n\n\n_*××× KirBotz`,`  `, list)
               break
case 'waktu':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            const buttonpulsa = [{buttonId: `via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            const buttongopay = [{buttonId: `via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            const buttonovo = [{buttonId: `via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            const buttonovo = [{buttonId: `via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            break
case 'via':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == 'pulsa'){
            saai =`${pulsa}`            
            const buttonpulsa = [{buttonId: `owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saai}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonpulsa,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'gopay'){
            payu =`${gopay}`            
            const buttongopay = [{buttonId: `owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${payu}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttongopay,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'ovo'){
            voto =`${ovo}`            
            const buttonovo = [{buttonId: `owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
                   
            }
            break
case 'donasi':
case 'payment':
               list = []
               listmenu = [`via gopay`,`via pulsa`,`via ovo`,`via ovo`]
               listmenuu = [`GOPAY`,`DANA`,`OVO`,`PULSA`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'PayMent Ke ·' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `hai kak ${pushname} \n\nSilahkan pilih metode pembayaran di bawah ya !`,`  `, list)
               break
      case 'allmenu':
        menunyai = `
*🌹ℍ𝔼𝕃𝕃𝕆𝕎𝕆ℝ𝕃𝔻🌹*

「 𝐎𝐖𝐍𝐄𝐑 」
off
on
status

「 𝐌𝐀𝐊𝐄𝐑 」
sticker
swm <author|packname>
take <author|packname>
fdeface
emoji
nulis

「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 」
toimg
tomp3
tomp4
slow
fast
reverse
tourl

「 𝐔𝐏 𝐒𝐓𝐎𝐑𝐘 」
upswteks
upswimage
upswvideo

「 18+ 」
chiisaihentai
trap
blowjob
yaoi
ecchi
hentai
ahegao
hololewd
sideoppai
animefeets
animebooty
animethighss
hentaiparadise
animearmpits
hentaifemdom
lewdanimegirls
biganimetiddies
animebellybutton
hentai4everyone
loli
husbu
milf
cosplay
wallml
pornhub
glitch
avenger
space
ninjalogo
marvelstudio
lionlogo
wolflogo
steel3d
wallgravity
tiktok
arcade8bit
battlefield4
pubg

「 RANDOM 」
ppcouple
anime
wallpaper
neko
meme
quotes
quotesimage
randomnama
faktaunik
katabijak
pantun
bucin

「 TEXTPROME 」
blackpink
neon
greenneon
advanceglow
futureneon
sandwriting
sandsummer
sandengraved
metaldark
neonlight
holographic
text1917
minion
deluxesilver
newyearcard
bloodfrosted
halloween
jokerlogo
fireworksparkle
natureleaves
bokeh
toxic
strawberry
box3d
roadwarning
breakwall
icecold
luxury
cloud
summersand
horrorblood
thunderix}thunder


「 EPHOTO 360 」
wetglass
multicolor3d
watercolor
luxurygold
galaxywallpaper
lighttext
beautifulflower
puppycute
royaltext
heartshaped
birthdaycake
galaxystyle
hologram3d
greenneon
glossychrome
greenbush
metallogo
noeltext
glittergold
textcake
starsnight
wooden3d
textbyname
writegalacy
galaxybat
snow3d
birthdayday
freefire

「 PHOTO OXY 」
shadow
cup
cup1
romance
smoke
burnpaper
lovemessage
undergrass
love
coffe
woodheart
woodenboard
summer3d
wolfmetal
nature3d
underwater
golderrose
summernature
letterleaves
glowingneon
fallleaves
flamming
harrypotter
carvedwood

「 𝐅𝐔𝐍 」
fitnah
fitnahpc
kontak

「 𝐓𝐀𝐆 」
hidetag
kontag
sticktag
totag

「 *Music* 」
spotifysearch <query>

「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 」
ytsearch <query>
igstalk <query>
play <query>
video <query>
ytmp3 <link>
ytmp4 <link>
ig <link>
igstory <username>
twitter <link>
tiktok <link>
tiktokaudio <link>
fb <link>
brainly <query>
image <query>
anime <random>
pinterest <query>
komiku <query>
lirik <query>
chara <query>
playstore <query>
otaku <query>

「 𝐎𝐓𝐇𝐄𝐑 」
self
public
setthumb
settarget
setfakeimg
setreply
ping
inspect
join
caripesan <query>
get
term <code>
x <code>

「 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
jadibot
stopjadibot
listbot

「 𝐕𝐎𝐓𝐄 」
voting
delvote
vote
devote



*──────" 𝕰𝖓𝖉𝖎𝖓𝖌 𝕺𝖋 𝕸𝖊𝖓𝖚 "──────*`
        var imgs = await Valkyrie.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
        var imgCatalog = imgs.message.imageMessage
        var ctlg = await Valkyrie.prepareMessageFromContent(from, {
          "productMessage": {
            "product": {
              "productImage": imgCatalog,
              "productId": "4457725420906655",
              "title": `𝒜𝓁𝓁 𝑀𝑒𝓃𝓊`,
              "description": menunyai,
              "footerText": `©Mecha senku`,
              "currencyCode": "IDR",
              "priceAmount1000": "50000",
              "productImageCount": 1,
              "firstImageId": 1,
              "salePriceAmount1000": "20000",
              "retailerId": `Sc ini Dijual Seharga 20K Dibantu Ganti2 Nama Jadi Nama Kalian`,
              "url": "https://wa.me/6283805897808"
            },
            "businessOwnerJid": "6283805897808@s.whatsapp.net",
          }
        }, { quoted: mek, mimetype: 'image/jpeg' })
        Valkyrie.relayWAMessage(ctlg)
        break

      case 'delvote':
        if (!mek.key.remoteJid) return
        if (isVote) return reply('Tidak ada sesi Voting')
        delVote(from)
        reply('Sukses Menghapus sesi Voting Di Grup Ini')
        break
      case 'voting':
        if (!isGroupAdmins && !mek.key.fromMe) return
        if (!isGroup) return reply(mess.only.group)
        if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
        if (!q) return reply('*Voting*\n\n' + prefix + 'voting @tag target | reason  | 1 (1 = 1 Menit)')
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          split = args.join(' ').replace('@', '').split('|')
          if (!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
          await mentions('Vote ' + '@' + id.split('@')[0] + ' Di Mulai' + '\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`, [id], true)
          addVote(from, split[1], split[0], split[2], reply)
        }
        break
      case 'linkwa':
        if (!q) return reply('cari group apa?')
        hx.linkwa(q)
          .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
              res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
          });
        break
      case 'igstory':
        if (!q) return reply('Usernamenya?')
        hx.igstory(q)
          .then(async result => {
            for (let i of result.medias) {
              if (i.url.includes('mp4')) {
                let link = await getBuffer(i.url)
                Valkyrie.sendMessage(from, link, video, { quoted: mek, caption: `Type : ${i.type}` })
              } else {
                let link = await getBuffer(i.url)
                Valkyrie.sendMessage(from, link, image, { quoted: mek, caption: `Type : ${i.type}` })
              }
            }
          });
        break
      case 'bay':
        reply('Sayonara Buat Yang Pergi😔\n Semoga Amal Ibadahnya Di Terima Tapi Kalo Lu Balik Harus Donasi')
        break
      case 'selamatdatang':
        reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \n Semoga Betah👏')
        break
      case 'caripesan':
        if (!q) return reply('pesannya apa bang?')
        let v = await Valkyrie.searchMessages(q, from, 10, 1)
        let s = v.messages
        let el = s.filter(v => v.message)
        el.shift()
        try {
          if (el[0].message.conversation == undefined) return
          reply(`Ditemukan ${el.length} pesan`)
          await sleep(3000)
          for (let i = 0; i < el.length; i++) {
            await Valkyrie.sendMessage(from, 'Nih pesannya', text, { quoted: el[i] })
          }
        } catch (e) {
          reply('Pesan tidak ditemukan!')
        }
        break
      case 'lirik':
        if (!q) return reply('lagu apa?')
        let song = await hx.lirik(q)
        sendMediaURL(from, song.thumb, song.lirik)
        break
      case 'komiku':
        if (!q) return reply(`judulnya?\nkomiku mao gakuin`)
        let komik = await hx.komiku(q)
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
        sendMediaURL(from, komik.image, result)
        break
      case 'chara':
        if (!q) return reply(`gambar apa?\nchara nino`)
        let im = await hx.chara(q)
        let acak = im[Math.floor(Math.random() * im.length)]
        let li = await getBuffer(acak)
        await Valkyrie.sendMessage(from, li, image, { quoted: mek })
        break
      case 'pinterest':
        if (!q) return reply('gambar apa?')
        let pin = await hx.pinterest(q)
        let ac = pin[Math.floor(Math.random() * pin.length)]
        let di = await getBuffer(ac)
        await Valkyrie.sendMessage(from, di, image, { quoted: mek })
        break
      case 'playstore':
        if (!q) return reply('lu nyari apa?')
        let play = await hx.playstore(q)
        let store = '❉─────────────────────❉\n'
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
        }
        reply(store)
        break
      case 'on':
        if (!mek.key.fromMe) return
        offline = false
        fakestatus(' ```ANDA TELAH ONLINE``` ')
        break
      case 'status':
        fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
        break
      case 'off':
        if (!mek.key.fromMe) return
        offline = true
        waktu = Date.now()
        anuu = q ? q : '-'
        alasan = anuu
        fakestatus(' ```ANDA TELAH OFFLINE``` ')
        break
      case 'get':
        if (!q) return reply('linknya?')
        fetch(`${args[0]}`).then(res => res.text())
          .then(bu => {
            fakestatus(bu)
          })
        break
      case 'kontag':
        if (!mek.key.fromMe) return reply('SELF-BOT')
        pe = args.join('')
        entah = pe.split('|')[0]
        nah = pe.split('|')[1]
        if (isNaN(entah)) return reply('Invalid phone number');
        members_ids = []
        for (let mem of groupMembers) {
          members_ids.push(mem.jid)
        }
        vcard = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:${nah}\n`
          + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `${nah}`, vcard: vcard }, contact, { contextInfo: { "mentionedJid": members_ids } })
        break
      case 'sticktag':
        if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
          encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, sticker, options)
          fs.unlinkSync(file)
        } else {
          reply(`*Reply sticker yang sudah dikirim*`)
        }
        break
      case 'cerpen':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=MeyshuApii`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Creator : ${get_result.creator}\n`
        ini_txt += `Story :\n${get_result.cerpen}`
        titid = ini_txt
        sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
      case 'ceritahoror':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=MeyshuApii`)
        get_result = get_result.result
        ini_txt = `Title : ${get_result.title}\n`
        ini_txt += `Desc : ${get_result.desc}\n`
        ini_txt += `Story :\n${get_result.story}\n`
        buff = await getBuffer(get_result.thumbnail)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: 'KirBotz', imageMessage: imageMsg,
          contentText: ini_txt, buttons, headerType: 4
        }
        prep = await Valkyrie.prepareMessageFromContent(from, { buttonsMessage }, { quoted: mek })
        Valkyrie.relayWAMessage(prep)
        break
      case 'totag':
        if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
          encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, sticker, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, image, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
          encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, audio, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
          encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            mimetype: 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, video, options)
          fs.unlinkSync(file)
        } else {
          reply(`reply gambar/sticker/audio/video dengan caption totag`)
        }
        break
      case 'fitnah':
        if (args.length < 1) return reply(`Usage :\nfitnah [@tag|pesan|balasanbot]]\n\nEx : \nfitnah @tagmember|hai|hai juga`)
        var gh = args.join('')
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        Valkyrie.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
        break
      case 'settarget':
        if (!q) return reply(`settarget 628xxxxx`)
        targetpc = args[0]
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
        break
      case 'fitnahpc':
        if (!q) return reply(`fitnahpc teks target|teks lu`)
        jids = `${targetpc}@s.whatsapp.net` // nomer target
        var split = args.join(' ').replace(/@|\d/gi, '').split('|')
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        var options = { contextInfo: { quotedMessage: { extendedTextMessage: { text: split[0] } } } }
        const responye = await Valkyrie.sendMessage(jids, `${split[1]}`, MessageType.text, options)
        await Valkyrie.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
        break
      case 'tomp3':
        if (!isQuotedVideo) return fakegroup('Reply videonya!')
        fakegroup(mess.wait)
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return fakegroup(`Err: ${err}`)
          buffer453 = fs.readFileSync(ran)
          Valkyrie.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'fast':
        if (!isQuotedVideo) return fakegroup('Reply videonya!')
        fakegroup(mess.wait)
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return fakegroup(`Err: ${err}`)
          buffer453 = fs.readFileSync(ran)
          Valkyrie.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'slow':
        if (!isQuotedVideo) return fakegroup('Reply videonya!')
        fakegroup(mess.wait)
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return fakegroup(`Err: ${err}`)
          buffer453 = fs.readFileSync(ran)
          Valkyrie.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'reverse':
        if (!isQuotedVideo) return fakegroup('Reply videonya!')
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return fakegroup(`Err: ${err}`)
          buffer453 = fs.readFileSync(ran)
          Valkyrie.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'maker3d4':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'transformer':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'googletxt':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz|chan|kawai`)
        makell = args.join(" ")
        ll1 = makell.split("|")[0];
        ll2 = makell.split("|")[1];
        ll3 = makell.split("|")[0];
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'battlefield':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        ll1 = makell.split("|")[0];
        ll2 = makell.split("|")[1];
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'coffeecup':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'coffeecup2':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'maker2d2':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'maker2d3':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'maker2d4':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'maker3d':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = body.slice(8)
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'maker3d2':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'maker3d3':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'wasted':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption wasted`)
        }
        break
      case 'joke':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption joke`)
        }
        break
      case 'picture': l
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption picture`)
        }
        break

      case 'invert':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption invert`)
        }
        break
      case 'sepia':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption sepia`)
        }
        break
      case 'blur':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption blur`)
        }
        break
      case 'circle':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption circle`)
        }
        break
      case 'trash':
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
          buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
          Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success })
        } else {
          reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption trash`)
        }
        break
      case 'tahta':
        if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\ntahta KirBotz`)
        buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
        buttons = [{ buttonId: `!infoig`, buttonText: { displayText: `®Mecha Senku` }, type: 1 }]
        imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: '©KirBotz×', imageMessage: imageMsg,
          contentText: `Nih Kak!!!`, buttons, headerType: 4
        }
        prep = await Valkyrie.prepareMessageFromContent(from, { buttonsMessage }, { quoted: mek })
        Valkyrie.relayWAMessage(prep)
        break
      case 'epepserti':
        if (args.length < 1) return reply(`*Example :*\n${prefix + command} KirBotz`)
        teksnya = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker/special/epep?text=${teksnya}&apikey=xnxx`)
        buffer1 = await getBuffer(anu.result.results)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'neonn':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'glow':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'ppcp':
           case 'ppcouple':
           anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=MeyshuApii`)
           buff1 = await getBuffer (anu.result.male)
           Valkyrie.sendMessage(from, buff1, image, {quoted: mek, caption: 'COWOK'})
           buff2 =await getBuffer (anu.result.female)
           Valkyrie.sendMessage(from, buff2, image, {quoted: mek, caption: 'CEWEK'})
           break
      case 'summer':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'flower':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'burn':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'quote':
        if (args.length < 1) return reply(`*Example :*\n${command} KirBotz`)
        makell = args.join(" ")
        sticWait(from)
        anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
        buffer1 = await getBuffer(anu.result.url)
        Valkyrie.sendMessage(from, buffer1, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg') })
        break
      case 'attp':
        if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\nattp KirBotz`)
        atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
        Valkyrie.sendMessage(from, atetepe, sticker, { quoted: mek })
        break
      //
      case 'cogan':
        reply(`✍️Tunggu Sebentar....`)
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=MeyshuApii`)
        wmn = `®Mecha Senku`
        trans = `®Mecha Senku`
        but = [
          { buttonId: `cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }, { buttonId: `owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
        break
      case 'cecan':
        reply(`✍️Tunggu Sebentar....`)
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=MeyshuApii`)
        wmn = `®Mecha Senku`
        trans = `®Mecha Senku`
        but = [
          { buttonId: `cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
        break
      case 'cecanvietnam':
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
        sticWait(from)
        goo = await getBuffer(huft.result.url)
        Valkyrie.sendMessage(from, goo, image, { quoted: fvid, caption: 'Nih Jangan Lupa Subscribe YT : KirBotz×' })
        break
      case 'cecanrandom':
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, image, { quoted: fvid, caption: '' })
        break
      case 'hijaber':
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, image, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'santuy':
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, video, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'ukhti':

        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, video, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'bocil':

        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, video, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'ghea':

        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, video, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'rika':

        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
        sticWait(from)
        buffer = await getBuffer(ini.result.url)
        Valkyrie.sendMessage(from, buffer, video, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'cecanmalaysia':
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
        sticWait(from)
        goo = await getBuffer(huft.result.url)
        Valkyrie.sendMessage(from, goo, image, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'cecankorea':

        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
        sticWait(from)
        goo = await getBuffer(huft.result.url)
        Valkyrie.sendMessage(from, goo, image, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'cecanindonesia':

        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
        sticWait(from)
        goo = await getBuffer(huft.result.url)
        Valkyrie.sendMessage(from, goo, image, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'cecanjapan':

        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
        sticWait(from)
        goo = await getBuffer(huft.result.url)
        Valkyrie.sendMessage(from, goo, image, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      case 'cecanthailand':

        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
        sticWait(from)
        goo = await getBuffer(huft.result.url)
        Valkyrie.sendMessage(from, goo, image, { quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)' })
        break
      //
      case 'kontak':
        pe = args.join(' ')
        entah = pe.split('|')[0]
        nah = pe.split('|')[1]
        if (isNaN(entah)) return reply('Invalid phone number');
        vcard = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:${nah}\n`
          + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
          + 'END:VCARD'.trim()
        Valkyrie.sendMessage(from, { displayName: `${nah}`, vcard: vcard }, contact)
        break
      case 'take':
      case 'colong':
        if (!isQuotedSticker) return reply('Stiker aja om')
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
        anu = args.join(' ').split('|')
        satu = anu[0] !== '' ? anu[0] : `SELF`
        dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
        require('./lib/fetcher.js').createExif(satu, dua)
        require('./lib/fetcher.js').modStick(media, Valkyrie, mek, from)
        break
      case 'stikerwm':
      case 'stickerwm':
      case 'swm':
        pe = args.join('')
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
          await createExif(a, b)
          out = getRandom('.webp')
          ffmpeg(media)
            .on('error', (e) => {
              console.log(e)
              Valkyrie.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
            })
            .on('end', () => {
              _out = getRandom('.webp')
              spawn('webpmux', ['-set', 'exif', './stik/data.exif', out, '-o', _out])
                .on('exit', () => {
                  Valkyrie.sendMessage(from, fs.readFileSync(_out), 'stickerMessage', { quoted: mek })
                  fs.unlinkSync(out)
                  fs.unlinkSync(_out)
                  fs.unlinkSync(media)
                })
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)
        } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          const media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
          pe = args.join('')
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b)
          out = getRandom('.webp')
          ffmpeg(media)
            .on('error', (e) => {
              console.log(e)
              Valkyrie.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
            })
            .on('end', () => {
              _out = getRandom('.webp')
              spawn('webpmux', ['-set', 'exif', './stik/data.exif', out, '-o', _out])
                .on('exit', () => {
                  Valkyrie.sendMessage(from, fs.readFileSync(_out), 'stickerMessage', { quoted: mek })
                  fs.unlinkSync(out)
                  fs.unlinkSync(_out)
                  fs.unlinkSync(media)
                })
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)
        } else {
          reply(`Kirim gambar dengan caption swm teks|teks atau tag gambar yang sudah dikirim`)
        }
        break
      case 'upswteks':
        if (!q) return fakestatus('Isi teksnya!')
        Valkyrie.sendMessage('status@broadcast', `${q}`, extendedText)
        fakegroup(`Sukses Up story wea teks ${q}`)
        break
      case 'upswimage':
        if (isQuotedImage) {
          const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          cihcih = await Valkyrie.downloadMediaMessage(swsw)
          Valkyrie.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
          bur = `Sukses Upload Story Image dengan Caption: ${q}`
          Valkyrie.sendMessage(from, bur, text, { quoted: mek })
        } else {
          fakestatus('Reply gambarnya!')
        }
        break
      case 'upswvideo':
        if (isQuotedVideo) {
          const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          cihcih = await Valkyrie.downloadMediaMessage(swsw)
          Valkyrie.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
          bur = `Sukses Upload Story Video dengan Caption: ${q}`
          Valkyrie.sendMessage(from, bur, text, { quoted: mek })
        } else {
          fakestatus('reply videonya!')
        }
        break
      case 'fdeface':
        ge = args.join('')
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion fdeface link|title|desc|teks`
        if (args.length < 1) return reply(fde)
        const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
        const tipes = await Valkyrie.downloadAndSaveMediaMessage(dipes)
        const bufer = fs.readFileSync(tipes)
        const desc = `${pn}`
        const title = `${pen}`
        const url = `${pe}`
        const buu = `https://${be}`
        var anu = {
          detectLinks: false
        }
        var mat = await Valkyrie.generateLinkPreview(url)
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        Valkyrie.sendMessage(from, mat, MessageType.extendedText, anu)
        break
      case 'public':
        if (!mek.key.fromMe) return fakestatus('SELF-BOT')
        if (banChats === false) return
        // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false
        fakestatus(`「 *PUBLIC-MODE* 」`)
        break
      case 'self':
        if (!mek.key.fromMe) return fakestatus('SELF-BOT')
        if (banChats === true) return
        uptime = process.uptime()
        // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true
        fakestatus(`「 *SELF-MODE* 」`)
        break
      case 'hidetag':
        if (!mek.key.fromMe) return fakestatus('SELF-BOT')
        if (!isGroup) return reply(mess.only.group)
        var value = args.join(' ')
        var group = await Valkyrie.groupMetadata(from)
        var member = group['participants']
        var mem = []
        member.map(async adm => {
          mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek
        }
        Valkyrie.sendMessage(from, optionshidetag, text)
        break
      case 'tagall':
        if (!isGroup) return reply(mess.only.group)
        let arr = [];
        let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
        for (let i of groupMembers) {
          txti += `=> @${i.jid.split("@")[0]}\n`
          arr.push(i.jid)
        }
        mentions(txti, arr, true)
        break
      case 'play':
        if (args.length < 1) return reply(`Kirim perintah *play query`)
        sticWait(from)
        let yut = await yts(q)
        yta(yut.videos[0].url)
          .then(async (res) => {
            const { thumb, title, filesizeF, filesize } = res
            const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
            ya = await getBuffer(thumb)
            py = await Valkyrie.prepareMessage(from, ya, image)
            gbutsan = [{ buttonId: `buttonmusic ${yut.all[0].url}`, buttonText: { displayText: '🎵AUDIO' }, type: 1 }, { buttonId: `buttonvideo ${yut.all[0].url}`, buttonText: { displayText: '🎥VIDEO' }, type: 1 }]
            gbuttonan = {
              imageMessage: py.message.imageMessage,
              contentText: capti,
              footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
              buttons: gbutsan,
              headerType: 4
            }
            await Valkyrie.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
          })
        break
      case 'buttonmusic':
        if (!q) return reply('linknya?')
        res = await yta(`${q}`).catch(e => {
          reply('```[ ! ] Error Saat Mengirim Audio```')
        })
        sendMediaURL(from, `${res.dl_link}`, { quoted: mek })
        break
      case 'buttonvideo':
        if (!q) return reply('linknya?')
        res = await ytv(`${q}`).catch(e => {
          reply('```[ ! ] Error Saat Mengirim Video```')
        })
        sendMediaURL(from, `${res.dl_link}`, 'Nih Kack')
        break
      case 'music':
        if (args.length === 0) return reply(`Kirim perintah *play* _Judul lagu yang akan dicari_`)
        var srch = args.join('')
        aramas = await yts(srch);
        aramat = aramas.all
        var mulaikah = aramat[0].url
        try {
          yta(mulaikah)
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then(async (a) => {
                  if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                  const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                  sendMediaURL(from, thumb, captions)
                  await sendMediaURL(from, dl_link).catch(() => reply('error'))
                })
            })
        } catch (err) {
          reply(mess.error.api)
        }
        break
      case 'video':
        if (args.length === 0) return reply(`Kirim perintah *video* _Judul lagu yang akan dicari_`)
        var srch = args.join('')
        aramas = await yts(srch);
        aramat = aramas.all
        var mulaikah = aramat[0].url
        try {
          ytv(mulaikah)
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then(async (a) => {
                  if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                  const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                  sendMediaURL(from, thumb, captions)
                  await sendMediaURL(from, dl_link).catch(() => reply('error'))
                })
            })
        } catch (err) {
          reply(mess.error.api)
        }
        break
      //
      case 'faktaunik':
      case 'katabijak':
      case 'pantun':
      case 'bucin':
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=MeyshuApii`)
        titid = get_result.result
        sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
      case 'randomnama':
        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=MeyshuApii`)
        dasi = anu.result
        sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break;
      case 'quotes':
        anjy = await fetchJson(`https://spybot-api.herokuapp.com/api/randomquote?apikey=${spykey}`)
        titid = `${anjy.result.quotes}`
        sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break

      case 'quotesimage':
        get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=MeyshuApii`)
        await Valkyrie.sendMessage(from, get_result, image)
        break
      case 'meme':
        ano = await fetchJson(`https://spybot-api.herokuapp.com/api/random/meme?apikey=${spykey}`)
        inibaf = await getBuffer(`${ano.result.url}`, { method: 'get' })
        inicapt = `${ano.result.title}`
        trrans = `Mecha Senku`
        but = [
          { buttonId: `meme`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, inicapt, trrans, inibaf, but)
        break
      case 'neko':
        sticWait(from)
        amnnuu = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/nsfwNeko?apikey=${spykey}`)
        buff = await getBuffer(`${amnnuu.result}`, { method: 'get' })
        tekkss = `Siapkan Sabun:v`
        ttrans = `Mecha Senku`
        but = [
          { buttonId: `neko`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, tekkss, ttrans, buff, but)
        break
      case 'wallpaper':
        sticWait(from)
        anoh = await fetchJson(`https://spybot-api.herokuapp.com/api/random/wallpaper?apikey=${spykey}`)
        nahbaff = await getBuffer(`${anoh.result.url}`, { method: 'get' })
        teksss = `Ini Bang`
        trans = `Mecha Senku`
        but = [
          { buttonId: `wallpaper`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, teksss, trans, nahbaff, but)
        break
      //18+
      case 'chiisaihentai':
      case 'trap':
      case 'blowjob':
      case 'yaoi':
      case 'ecchi':
      case 'hentai':
      case 'ahegao':
      case 'hololewd':
      case 'sideoppai':
      case 'animefeets':
      case 'animebooty':
      case 'animethighss':
      case 'hentaiparadise':
      case 'animearmpits':
      case 'hentaifemdom':
      case 'lewdanimegirls':
      case 'biganimetiddies':
      case 'animebellybutton':
      case 'hentai4everyone':
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=MeyshuApii`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: '®Mecha Senku', imageMessage: imageMsg,
          contentText: `Jangan Sering-sering Ya. i Love You, Waterpark men`, buttons, headerType: 4
        }
        prep = await Valkyrie.prepareMessageFromContent(from, { buttonsMessage }, { quoted: mek })
        Valkyrie.relayWAMessage(prep)

        break
      case 'bj':
      case 'ero':
      case 'cum':
      case 'feet':
      case 'yuri':
      case 'trap':
      case 'lewd':
      case 'feed':
      case 'eron':
      case 'solo':
      case 'gasm':
      case 'poke':
      case 'anal':
      case 'holo':
      case 'tits':
      case 'kuni':
      case 'kiss':
      case 'erok':
      case 'smug':
      case 'baka':
      case 'solog':
      case 'feetg':
      case 'lewdk':
      case 'pussy':
      case 'femdom':
      case 'waifu':
      case 'cuddle':
      case 'hentai':
      case 'eroyuri':
      case 'cum_jpg':
      case 'erofeet':
      case 'holoero':
      case 'classic':
      case 'erokemo':
      case 'fox_girl':
      case 'futanari':
      case 'lewdkemo':
      case 'wallpaper':
      case 'pussy_jpg':
      case 'kemonomimi':
      case 'nsfw_avatar':
        buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=MeyshuApii`)
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
        buttonsMessage = {
          footerText: '®Mecha Senku', imageMessage: imageMsg,
          contentText: `Jangan Sering-sering Ya.I Love You,Waterpark Men`, buttons, headerType: 4
        }
        prep = await Valkyrie.prepareMessageFromContent(from, { buttonsMessage }, { quoted: mek })
        Valkyrie.relayWAMessage(prep)

        break
      case 'loli':
      case 'husbu':
      case 'milf':
      case 'cosplay':
      case 'wallml':
        let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
        let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
        buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
        imageMsg = (await Valkyrie.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', { thumbnail: Buffer.alloc(0) })).message.imageMessage
        buttonsMessage = {
          footerText: 'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`, buttons, headerType: 4
        }
        prep = await Valkyrie.prepareMessageFromContent(from, { buttonsMessage }, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6288215463787@g.us" } : {}) }, message: { "orderMessage": { "orderId": "6288215463787", "thumbnail": ``, "itemCount": 281005, "status": "INQUIRY", "surface": "CATALOG", "message": ` `, "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" } } } })
        Valkyrie.relayWAMessage(prep)
        fs.unlinkSync(`./${sender}.jpeg`)
        breakl
      //Maker
      case 'darkjokes':
        sticWait(from)
        anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=${setting.zekskey}`)
        anu1 = await getBuffer(anu.result)
        Valkyrie.sendMessage(from, anu1, image, { caption: `OK it's done`, quoted: mek })
        break
      case 'ytgold':
        if (args.length < 1) return reply(`*${command} Valkyrie*`)
        F = body.slice(8)
        reply(mess.wait)
        anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${F}&apikey=${setting.zekskey}`)
        Valkyrie.sendMessage(from, anu, image, { caption: `OK it's Done`, quoted: mek })
        break
      case 'ytsilver':
        if (args.length < 1) return reply(`*${command} Valkyrie*`)
        F = body.slice(10)
        reply(mess.wait)
        anu = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${F}&apikey=${setting.zekskey}`)
        Valkyrie.sendMessage(from, anu, image, { caption: `OK it's Done`, quoted: mek })
        break
      case 'blackpink':
      case 'neon':
      case 'greenneon':
      case 'advanceglow':
      case 'futureneon':
      case 'sandwriting':
      case 'sandsummer':
      case 'sandengraved':
      case 'metaldark':
      case 'neonlight':
      case 'holographic':
      case 'text1917':
      case 'minion':
      case 'deluxesilver':
      case 'newyearcard':
      case 'bloodfrosted':
      case 'halloween':
      case 'jokerlogo':
      case 'fireworksparkle':
      case 'natureleaves':
      case 'bokeh':
      case 'toxic':
      case 'strawberry':
      case 'box3d':
      case 'roadwarning':
      case 'breakwall':
      case 'icecold':
      case 'luxury':
      case 'cloud':
      case 'summersand':
      case 'horrorblood':
      case 'thunder':
        if (args.length == 0) return reply(`Example: ${prefix + command} text`)
        kipass = args.join(" ")
        kontolmu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=MeyshuApii&text=${kipass}`)
        Valkyrie.sendMessage(from, kontolmu, image, { quoted: mek })
        break
      case 'wetglass':
      case 'multicolor3d':
      case 'watercolor':
      case 'luxurygold':
      case 'galaxywallpaper':
      case 'lighttext':
      case 'beautifulflower':
      case 'puppycute':
      case 'royaltext':
      case 'heartshaped':
      case 'birthdaycake':
      case 'galaxystyle':
      case 'hologram3d':
      case 'greenneon':
      case 'glossychrome':
      case 'greenbush':
      case 'metallogo':
      case 'noeltext':
      case 'glittergold':
      case 'textcake':
      case 'starsnight':
      case 'wooden3d':
      case 'textbyname':
      case 'writegalacy':
      case 'galaxybat':
      case 'snow3d':
      case 'birthdayday':
      case 'freefire':
        if (args.length == 0) return reply(`Example: ${prefix + command} text`)
        ini_txt = args.join(" ")
        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=MeyshuApii&text=${ini_txt}`)
        Valkyrie.sendMessage(from, ini_buffer, image, { quoted: mek })
        break
      case 'shadow':
      case 'cup':
      case 'cup1':
      case 'romance':
      case 'smoke':
      case 'burnpaper':
      case 'lovemessage':
      case 'undergrass':
      case 'love':
      case 'coffe':
      case 'woodheart':
      case 'woodenboard':
      case 'summer3d':
      case 'wolfmetal':
      case 'nature3d':
      case 'underwater':
      case 'golderrose':
      case 'summernature':
      case 'letterleaves':
      case 'glowingneon':
      case 'fallleaves':
      case 'flamming':
      case 'harrypotter':
      case 'carvedwood':
        if (args.length == 0) return reply(`Example: ${prefix + command} text`)
        lemari = args.join(" ")
        ndasmu = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=MeyshuApii&text=${lemari}`)
        Valkyrie.sendMessage(from, ndasmu, image, { quoted: mek })
        break
      case 'pornhub':
      case 'glitch':
      case 'avenger':
      case 'space':
      case 'ninjalogo':
      case 'marvelstudio':
      case 'lionlogo':
      case 'wolflogo':
      case 'steel3d':
      case 'wallgravity':
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        txt1 = args[0]
        txt2 = args[1]
        getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=MeyshuApii&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          Valkyrie.sendMessage(from, gambar, image, { thumbnail: Buffer.alloc(0), caption: `®Mecha Senku`, quoted: mek })
        })
        break
      case 'tiktok':
      case 'arcade8bit':
      case 'battlefield4':
      case 'pubg':
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
        txt1 = args[0]
        txt2 = args[1]
        getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=MeyshuApii&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          Valkyrie.sendMessage(from, gambar, image, { thumbnail: Buffer.alloc(0), caption: `®Mecha Senku`, quoted: mek })
        })
        break
      case 'nulis':
      case 'tulis':
        if (args.length < 1) return reply('Yang mau di tulis apaan?')
        teks = args.join(' ')
        sticWait(from)
        nulis = encodeURIComponent(teks)
        res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
        if (res.data.error) return reply(res.data.error)
        buff = Buffer.from(res.data.result.split(',')[1], 'base64')
        Valkyrie.sendMessage(from, buff, image, { quoted: mek, caption: mess.success }).catch(e => {
          return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
        })
        break
      case 'toimg':
        if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
        sticWait(from)
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return reply('Yah gagal, coba ulangi ^_^')
          buffer = fs.readFileSync(ran)
          fakethumb(buffer, 'NIH')
          fs.unlinkSync(ran)
        })
        break
      case 'ytsearch':
        if (args.length < 1) return Valkyrie('Tolong masukan query!')
        var srch = args.join('');
        try {
          var aramas = await yts(srch);
        } catch {
          return await Valkyrie.sendMessage(from, 'Error!', MessageType.text, dload)
        }
        aramat = aramas.all
        var tbuff = await getBuffer(aramat[0].image)
        var ytresult = '';
        ytresult += '「 *YOUTUBE SEARCH* 」'
        ytresult += '\n________________________\n\n'
        aramas.all.map((video) => {
          ytresult += '❏ Title: ' + video.title + '\n'
          ytresult += '❏ Link: ' + video.url + '\n'
          ytresult += '❏ Durasi: ' + video.timestamp + '\n'
          ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
        });
        ytresult += '◩ *SELF-BOT*'
        await fakethumb(tbuff, ytresult)
        break
      case 'setreply':
      case 'setfake':
        if (!q) return fakegroup(mess.wrongFormat)
        fake = q
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
        break
      case 'setfakeimg':
        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          delb = await Valkyrie.downloadMediaMessage(boij)
          fs.writeFileSync(`./stik/fake.jpeg`, delb)
          fakestatus('Sukses')
        } else {
          reply(`Kirim gambar dengan caption sethumb`)
        }
        break
      case 'setthumb':
        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          delb = await Valkyrie.downloadMediaMessage(boij)
          fs.writeFileSync(`./stik/thumb.jpeg`, delb)
          fakestatus('Sukses')
        } else {
          reply(`Kirim gambar dengan caption sethumb`)
        }
        break
      case 'ytmp4':
        if (args.length === 0) return reply(`Kirim perintah *ytmp4 [linkYt]*`)
        let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
        if (!isLinks2) return reply(mess.error.Iv)
        try {
          sticWait(from)
          ytv(args[0])
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then((a) => {
                  if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                  const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                  sendMediaURL(from, thumb, captionsYtmp4)
                  sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                })
            })
        } catch (err) {
          reply(mess.error.api)
        }
        break
      case 'emoji':
        if (!q) return fakegroup('emojinya?')
        qes = args.join(' ')
        emoji.get(`${qes}`).then(emoji => {
          teks = `${emoji.images[4].url}`
          sendStickerFromUrl(from, `${teks}`)
          console.log(teks)
        })
        break
      case 'ytmp3':
        if (args.length === 0) return reply(`Kirim perintah *ytmp3 [linkYt]*`)
        let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
        if (!isLinks) return reply(mess.error.Iv)
        try {
          sticWait(from)
          yta(args[0])
            .then((res) => {
              const { dl_link, thumb, title, filesizeF, filesize } = res
              axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                .then((a) => {
                  if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                  const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                  sendMediaURL(from, thumb, captions)
                  sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                })
            })
        } catch (err) {
          reply(mess.error.api)
        }
        break
      case 'image':
        if (args.length < 1) return reply('Masukan teks!')
        const gimg = args.join('');
        sticWait(from)
        gis(gimg, async (error, result) => {
          n = result
          images = n[Math.floor(Math.random() * n.length)].url
          Valkyrie.sendMessage(from, { url: images }, image, { quoted: mek })
        });
        break
      case 'tiktokdl':
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        sticWait(from)
        hx.ttdownloader(`${args[0]}`)
          .then(result => {
            const { wm, nowm, audio } = result
            axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
              .then(async (a) => {
                me = `*Link* : ${a.data}`
                Valkyrie.sendMessage(from, { url: `${nowm}` }, video, { mimetype: 'video/mp4', quoted: mek, caption: me })
              })
          })
          .catch(e => console.log(e))
        break
      case 'tiktokaudio':
        if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        sticWait(from)
        hx.ttdownloader(`${args[0]}`)
          .then(result => {
            const { audio } = result
            sendMediaURL(from, audio, '')
          })
          .catch(e => console.log(e))
        break
      case 'brainly':
        if (args.length < 1) return reply('Pertanyaan apa')
        brien = args.join(' ')
        brainly(`${brien}`).then(res => {
          teks = '❉───────────────────────❉\n'
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
          }
          Valkyrie.sendMessage(from, teks, text, { quoted: mek, detectLinks: false })
        })
        break
      case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        sticWait(from)
        hx.igdl(args[0])
          .then(async (result) => {
            for (let i of result.medias) {
              if (i.url.includes('mp4')) {
                let link = await getBuffer(i.url)
                Valkyrie.sendMessage(from, link, video, { quoted: mek, caption: `Type : ${i.type}` })
              } else {
                let link = await getBuffer(i.url)
                Valkyrie.sendMessage(from, link, image, { quoted: mek, caption: `Type : ${i.type}` })
              }
            }
          });
        break
      case 'igstalk':
        if (!q) return fakegroup('Usernamenya?')
        ig.fetchUser(`${args.join(' ')}`).then(Y => {
          console.log(`${args.join(' ')}`)
          ten = `${Y.profile_pic_url_hd}`
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
          sendMediaURL(from, ten, teks)
        })
        break
      case 'fb':
        if (!q) return reply('Linknya?')
        if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
        sticWait(from)
        te = args.join(' ')
        hx.fbdown(`${te}`)
          .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`)
          })
        break
      case 'term':
        if (!q) return fakegroup(mess.wrongFormat)
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`)
          if (stdout) {
            fakegroup(stdout)
          }
        })
        break
      case 'bc':
        if (!isOwner) return sticOwner(from)
        if (args.length < 1) return reply('teks?')
        anu = await Valkyrie.chats.all()
        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          bc = await Valkyrie.downloadMediaMessage(encmedia)
          for (let _ of anu) {
            tes = `${body.slice(4)}`
            Valkyrie.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nBroadcast By *ValkyrieX4·Teamꪶ𖣂ꫂ*`, buttons: [{ buttonId: `menu`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: 'SEWABOT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
          }
          reply('Suksess broadcast')
        } else {
          for (let _ of anu) {
            textt = `${body.slice(4)}`
            Valkyrie.sendMessage(_.jid, { contentText: `${textt}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nBroadcast By *ValkyrieX4·Teamꪶ𖣂ꫂ*`, buttons: [{ buttonId: `menu`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: 'SEWABOT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { mentionedJid: [sender] } } }, 'buttonsMessage')
          }
          reply('Suksess broadcast')
        }
        break
      case 'bcc':
        if (!isOwner) return sticOwner(from)

        if (args.length < 1) return reply('teks?')

        anu100 = await Valkyrie.chats.all()

        if (isMedia && !Valkyrie.message.videoMessage || isQuotedImage) {

          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Kahfz

          bc1000 = await Valkyrie.downloadMediaMessage(encmedia)

          for (let _ of anu1000) {

            Valkyrie.sendMessage(_.jid, bc1000, image, { quoted: mek, caption: `*「 KAHFZ GAMTENG 」*\n\n${body.slice(4)}` })

          }

          reply('Suksess broadcast')

        } else {

          for (let _ of anu100) {

            Valkyrie.sendMessage(_.jid,

              {
                "contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,

                "footerText": '©𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ',

                "buttons": [{ buttonId: `menu`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `sewabot`, buttonText: { displayText: 'SEWABOT' }, type: 1 }], "headerType": "DOCUMENT", "documentMessage": {
                  "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
                  "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  "title": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ.pptx",
                  "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
                  "fileLength": "999999999999",
                  "pageCount": 999,
                  "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
                  "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
                  "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
                  "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
                  "mediaKeyTimestamp": "1634472176",
                  "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                }
              }, MessageType.buttonsMessage, { quoted: floc, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `BroadCast 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`, body: "", mediaType: "2", thumbnail: fs.readFileSync('./stik/thumb.jpeg'), mediaUrl: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg` } } })

          }

          reply('Suksess broadcast')

        }

        break
      case 'join':
        try {
          if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
          hen = args[0]
          if (!q) return fakestatus('Masukan link group')
          var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
          if (!codeInvite) return fakegroup('pastikan link sudah benar!')
          var response = await Valkyrie.acceptInvite(codeInvite)
          fakestatus('SUKSES')
        } catch {
          fakegroup('LINK ERROR!')
        }
        break
      case 'twitter':
        if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        ten = args[0]
        var res = await hx.twitter(`${ten}`)
        ren = `${g.HD}`
        sendMediaURL(from, ren, 'DONE')
        break
      case 'runtime':
      case 'test':
        run = process.uptime()
        teks = `${kyun(run)}`
        fakegroup(teks)
        break
      case 'speed':
      case 'ping':
        const timestamp = speed();
        const latensi = speed() - timestamp
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString('utf-8')
          const teks = child.replace(/Memory:/, "Ram:")
          const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
          fakegroup(pingnya)
        })
        break
      case 'totag':
        if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
          encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, sticker, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, image, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
          encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, audio, options)
          fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
          encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
          value = args.join(" ")
          var group = await Valkyrie.groupMetadata(from)
          var member = group['participants']
          var mem = []
          member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          var options = {
            mimetype: 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
          }
          ini_buffer = fs.readFileSync(file)
          Valkyrie.sendMessage(from, ini_buffer, video, options)
          fs.unlinkSync(file)
        } else {
          reply(`reply gambar/sticker/audio/video dengan caption totag`)
        }
        break
      case 'tomp4':
        if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
          ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
          webp2mp4File(owgi).then(res => {
            sendMediaURL(from, res.result, 'Done')
          })
        } else {
          reply('reply stiker')
        }
        fs.unlinkSync(owgi)
        break

      case 'owner':
        let inilist = []
        for (let i of ownerNumber) {
          const vname = Valkyrie.contacts[i] != undefined ? Valkyrie.contacts[i].vname || Valkyrie.contacts[i].notify : undefined
          inilist.push({
            "displayName": 'Akira',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Valkyrie.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
        }
        hehe = await Valkyrie.sendMessage(from, {
          "displayName": `${inilist.length} kontak`,
          "contacts": inilist
        }, 'contactsArrayMessage', { quoted: floc })
        button = [
          { buttonId: '.menu', buttonText: { displayText: 'MENU' }, type: 1 }
        ]
        buttons = {
          contentText: 'Nih Kak Owner ku ><',
          footerText: `*®Mecha Senku*`,
          buttons: button,
          headerType: 1
        }
        await Valkyrie.sendMessage(from, buttons, MessageType.buttonsMessage, { quoted: floc })
        break
      case 'tourl':
        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
          boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          owgi = await Valkyrie.downloadMediaMessage(boij)
          res = await upload(owgi)
          reply(res)
        } else {
          reply('kirim/reply gambar/video')
        }
        break
      case 'inspect':
        try {
          if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
          if (!q) return reply('masukan link wa')
          cos = args[0]
          var net = cos.split('https://chat.whatsapp.com/')[1]
          if (!net) return reply('pastikan itu link https://whatsapp.com/')
          jids = []
          let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation } = await Valkyrie.query({
            json: ["query", "invite", net],
            expect200: true
          })
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
          for (let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
            jids.push(`${y.id.replace(/@c.us/g, '@s.whatsapp.net')}`)
          }
          jids.push(`${owner ? `${owner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`)
          jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g, '@s.whatsapp.net')}` : '-'}`)
          Valkyrie.sendMessage(from, par, text, { quoted: mek, contextInfo: { mentionedJid: jids } })
        } catch {
          reply('Link error')
        }
        break
      //group
      case 'welcome':
        if (!isGroup) return reply(mess.only.group)
        if (args.length < 1) return reply('!welcome enable/disable')
        if ((args[0]) === 'enable') {
          if (isWelkom) return reply('Udah aktif')
          welkom.push(from)
          fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
          reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
        } else if ((args[0]) === 'disable') {
          welkom.splice(from, 1)
          fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
          reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
        } else {
          reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
        }
        break
      case 'antilink':
        if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
        if (!q) return reply(`Pilih enable atau disable`)
        if (args[0].toLowerCase() === 'enable') {
          if (isAntiLink) return reply(`Udah aktif`)
          antilink.push(from)
          fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
          reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
        } else if (args[0].toLowerCase() === 'disable') {
          let anu = antilink.indexOf(from)
          antilink.splice(anu, 1)
          fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
          reply('*「 ANTILINK DI NONAKTIFKAN 」*')
        } else {
          reply(`Pilih enable atau disable`)
        }
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=MeyshuApii&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'pixiv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=MeyshuApii&query=${query}`)
                    await Valkyrie.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=MeyshuApii&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await Valkyrie.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=MeyshuApii&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break  
case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=MeyshuApii&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await Valkyrie.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
      break     
      case 'brainly':
          if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=MeyshuApii&query=${query}`)
          get_result = get_result.result
          ini_txt = "Result : \n"
          for (var x of get_result) {
            ini_txt += `${x.title}\n`
            ini_txt += `${x.url}\n\n`
          }
          reply(ini_txt)
          break
case 'wikipedia':
          if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=MeyshuApii&query=${query}`)
          get_result = get_result.result
          reply(get_result)
          break
case 'chord':
          if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=MeyshuApii&query=${query}`)
          get_result = get_result.result
          ini_txt = `Title : ${get_result.title}\n`
          ini_txt += `Chord : \n${get_result.chord}`
          reply(ini_txt)
          break
case 'jarak':
          if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
          pauls = args.join(" ")
          teks1 = pauls.split("-")[0].trim()
          teks2 = pauls.split("-")[1].trim()
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=MeyshuApii&kota1=${teks1}&kota2=${teks2}`)
          x = get_result.result
          ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
          ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
          ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
          ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
          ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
          ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
          ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
          ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
          ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
          ini_txt += `   ╭───────────────❏\n`
          ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
          ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
          ini_txt += `❍┤ Mobil : ${x.mobil}\n`
          ini_txt += `❍┤ Motor : ${x.motor}\n`
          ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
          ini_txt += `   ╰───────────────❏\n`
          reply(ini_txt)
          break
case 'kbbi':
          if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=MeyshuApii&query=${args.join(" ")}`)
          lila = get_result.result
          ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
          ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
          ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
          ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
          for (var x of lila) {
            ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
            ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
            ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
            ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
            ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
          }
          reply(ini_txt)
          break
case 'lirik':
          if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=MeyshuApii&query=${query}`)
          reply(get_result.result)
          break
case 'cuaca':
          if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
          daerah = args[0]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=MeyshuApii`)
          get_result = get_result.result
          ini_txt = `Tempat : ${get_result.tempat}\n`
          ini_txt += `Cuaca : ${get_result.cuaca}\n`
          ini_txt += `Angin : ${get_result.angin}\n`
          ini_txt += `Description : ${get_result.description}\n`
          ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
          ini_txt += `Suhu : ${get_result.suhu}\n`
          ini_txt += `Udara : ${get_result.udara}\n`
          ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
          await Valkyrie.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
          reply(ini_txt)
          break
        case 'covidindo':
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=MeyshuApii`)
          get_result = get_result.result
          ini_txt = `Positif : ${get_result.positif}\n`
          ini_txt += `Sembuh : ${get_result.sembuh}\n`
          ini_txt += `Dirawat : ${get_result.dirawat}\n`
          ini_txt += `Meninggal : ${get_result.meninggal}`
          reply(ini_txt)
          break
        case 'covidglobal':
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=MeyshuApii`)
          get_result = get_result.result
          ini_txt = `Positif : ${get_result.positif}\n`
          ini_txt += `Sembuh : ${get_result.sembuh}\n`
          ini_txt += `Dirawat : ${get_result.dirawat}\n`
          ini_txt += `Meninggal : ${get_result.meninggal}`
          reply(ini_txt)
          break
case 'lk21':
          if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=MeyshuApii&query=${query}`)
          get_result = get_result.result
          ini_txt = `Title : ${get_result.title}\n`
          ini_txt += `Link : ${get_result.link}\n`
          ini_txt += `Genre : ${get_result.genre}\n`
          ini_txt += `Views : ${get_result.views}\n`
          ini_txt += `Duration : ${get_result.duration}\n`
          ini_txt += `Tahun : ${get_result.tahun}\n`
          ini_txt += `Rating : ${get_result.rating}\n`
          ini_txt += `Desc : ${get_result.desc}\n`
          ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
          ini_txt += `Location : ${get_result.location}\n`
          ini_txt += `Date Release : ${get_result.date_release}\n`
          ini_txt += `Language : ${get_result.language}\n`
          ini_txt += `Link Download : ${get_result.link_dl}`
          thumbnail = await getBuffer(get_result.thumbnail)
          await Valkyrie.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
          break
case 'quotesanime':
          quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=MeyshuApii`)
          quotes = quotes.result
          quote = quotes.quote
          char = quotes.character
          anime = quotes.anime
          episode = quotes.episode
          reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
          break
case 'wallpapersearch':
          if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=MeyshuApii&query=${query}`)
          ini_buffer = await getBuffer(get_result.result)
          await Valkyrie.sendMessage(from, ini_buffer, image, { quoted: mek })
          break
case 'artinama':
          if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
          ini_nama = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=MeyshuApii&nama=${ini_nama}`)
          reply(get_result.result)
          break
case 'sticker':
case 's':
          if ((isQuotedVideo || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            var filepath = await Valkyrie.downloadAndSaveMediaMessage(encmedia, getRandom())
            var randomName = getRandom('.webp')
            ffmpeg(`./.webp`)
              .input(filepath)
              .on('error', () => {
                fs.unlinkSync(filepath)
                reply('Terjadi kesalahan saat mengconvert sticker.')
              })
              .on('end', () => {
                Valkyrie.sendMessage(from, fs.readFileSync(randomName), sticker, { quoted: mek })
                fs.unlinkSync(filepath)
                fs.unlinkSync(randomName)
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('.webp')
              .save(randomName)
          } else {
            reply(`Kirim gambar dengan caption sticker atau tag gambar yang sudah dikirim`)
          }
          break
case 'ttp':
        case 'ttp2':
        case 'ttp3':
        case 'ttp4':
        case 'attp':
          if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
          ini_txt = args.join(" ")
          ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=MeyshuApii&text=${ini_txt}`)
          await Valkyrie.sendMessage(from, ini_buffer, sticker, { quoted: mek })
          break
        case 'triggered':
          ini_url = args[0]
          ranp = getRandom('.gif')
          rano = getRandom('.webp')
          ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=MeyshuApii&img=${ini_url}`
          exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
            fs.unlinkSync(ranp)
            buff = fs.readFileSync(rano)
            Valkyrie.sendMessage(from, buff, sticker, { quoted: mek }).then(() => {
              fs.unlinkSync(rano)
            })
          })
          break
case 'ktpmaker':
          if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
          get_args = args.join(" ").split("|")
          nik = get_args[0]
          prov = get_args[1]
          kabu = get_args[2]
          name = get_args[3]
          ttl = get_args[4]
          jk = get_args[5]
          jl = get_args[6]
          rtrw = get_args[7]
          lurah = get_args[8]
          camat = get_args[9]
          agama = get_args[10]
          nikah = get_args[11]
          kerja = get_args[12]
          warga = get_args[13]
          until = get_args[14]
          img = get_args[15]
          ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=MeyshuApii&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
          await Valkyrie.sendMessage(from, ini_buffer, image, { quoted: mek })
          break
case 'togif':
          if ((isQuotedSticker)) {
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
            filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
            file_name = getRandom(".mp4")
            request({
              url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=MeyshuApii`,
              method: 'POST',
              formData: {
                "img": fs.createReadStream(filePath),
              }
            }, function(error, response, body) {
              fs.unlinkSync(filePath)
              get_result = JSON.parse(body)
              getBuffer(get_result.result).then(result => {
                Valkyrie.sendMessage(from, result, video, { mimetype: Mimetype.gif })
                fs.unlinkSync(file_name)
              })
            });
          } else {
            reply(`Reply stickernya kawan`)
          }
          break
      default:
        if (budy.startsWith('x')) {
          try {
            return Valkyrie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
          } catch (err) {
            e = String(err)
            reply(e)
          }
        }

    }
    if (isGroup && budy != undefined) {
    } else {
      console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
    }
  } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
      console.log('Message : %s', color(e, 'green'))
    }
    // console.lbreak
(e)
  }
}







