const WhatsAlexa = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'link', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'β‘οΈ..πΆπΈπ..π»π½πΊ..β‘οΈ  \n\n\nhttps://github.com/Ajx-Abu/Sana-Mwol'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'β‘οΈ..πΆππΎππΏ..π»πΈπ½πΊ..β‘οΈ   \n\n\nhttps://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'β‘οΈ..πΎππ½π΄π..β‘οΈ    \n\n\nhttp://wa.me/917025994178'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "β‘οΈ..α΄ΚΙͺα΄α΄..Κα΄Κ..α΄α΄..Κα΄α΄α΄α΄Ι΄..β‘οΈ",

          footerText: 'β’β‘οΈ..α΄Κα΄..Β©',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
