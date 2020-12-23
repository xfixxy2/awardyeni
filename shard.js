
const Discord = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const ayarlar = require('./ayarlar.json');
const captain = new Discord.ShardingManager('./bot.js', {
    totalShards: 5,
    token: (ayarlar.token)
});
// CaptainInvite Shard Bilgi
captain.spawn();

captain.on('shardCreate', shard => {
  console.log(`${shard.id +1} IDli Başlatıldı ve Kullanıma Hazır.`)
    const webhook = new Discord.WebhookClient("790666178459598910","HzFO0XQbgOv0h2nUoVazx1kGIqLS2M4PBUl1FQJm0RsRCL9EMoXvrSOQU4ZZB4If3qjw")
    webhook.send(` [Başlatılıyor]   \n${shard.id +1} IDli Başlatılıyor Lütfen Bekleyin.`)
    setTimeout(() => {
  const webhook = new Discord.WebhookClient("790666178459598910","HzFO0XQbgOv0h2nUoVazx1kGIqLS2M4PBUl1FQJm0RsRCL9EMoXvrSOQU4ZZB4If3qjw")
  webhook.send(` [Başlatıldı]\n${shard.id +1} IDli Başlatıldı ve Kullanıma Hazır.`)
  }, 3000)
});
// WebHook Oluşturup ID ve Token Girmeniz Gerekli.
setTimeout(() => {
    captain.broadcastEval("process.exit()");
}, 8600000);
// 8600000 Yaklışık 2.30 Saat Sonra İşlem Çıkışı Yapacak!!
