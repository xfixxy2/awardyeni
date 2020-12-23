const Discord = require('discord.js');
const client = require("discord.js");
const db = require('quick.db');
	  

const ayarlar = require('../ayarlar.json');

var p = ayarlar.prefix;

exports.run = (client, message, args) => {


let prefix =  db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if (!message.guild) return;

        const sarkCode = new Discord.MessageEmbed()

             .setColor('RANDOM')
              .setTitle(`Yardım Menusu`)
             .setAuthor(`Award `, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`<:award:790638906479083582>  **${prefix}çekiliş-başlat**`,`Belirtilen Yöntemlerle Cekilis Baslatırsınız`)
             .addField(`<:award:790638906479083582>  **${prefix}çekiliş-liste**`,` Sunucudaki Aktif Çekiliş Listeler`)
             .addField(`<:award:790638906479083582>  **${prefix}çekiliş-yenile**`, `Belirtilen cekilisteki kazananı yeniden seçer`)
             .addField(`<:award:790638906479083582>  **${prefix}istatistik**`, `Bot Kaç Kisi Hizmet  Veriyor V.b Bilgileri Görüntüler`)
             .addField(`<:award:790638906479083582>  **${prefix}shard**` , `Shard Bilgilerini Görüntüler`)
             .addField(`<:award:790638906479083582> **${prefix}edit**`, `Belirtilen çekilişin verilerini belirtilen verilere göre degistirir`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
                return message.channel.send(sarkCode).then(msg=>msg.delete(3000));


};
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['y'],
    permLevel : 0
}

exports.help = {
    name : 'yardım',
    description : 'Komut Gösterir atar',
    usage : 'yardım'
}