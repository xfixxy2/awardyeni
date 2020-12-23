const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


   
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("<a:hyr:784759510547038268> Bu komutu kullanma izniniz yok. Gereken Yetki Yönetici ");
            return;
          }
    
    let gweep = args[0];
    let kazanan = args[1];
    let odul = args[2];
    let zaman = args[3];
    if(!gweep) return message.channel.send("Lütfen geçerli bir mesaj kimliği belirtin! (Kullanımı: <Mesajid> <Düzenlenincekaçkisikazancakocekilisi> <Odul> <Ne Kadar Süre Artıcak>)")
    if(!kazanan) return message.channel.send("Geçerli miktarda kazanan sağlamadınız! (Kullanımı: <Mesajid> <Düzenlenincekaçkisikazancakocekilisi> <Odul> <Ne Kadar Süre Artıcak>)")
    if(!odul) return message.channel.send("Bir ödül belirtmediniz! (Kullanımı: <Mesajid> <Düzenlenincekaçkisikazancakocekilisi> <Odul> <Ne Kadar Süre Artıcak>)")
    if(!ms(zaman) && zaman) return message.channel.send("Geçerli bir saat biçimi kullanmadınız! (Kullanımı: <Mesajid> <Düzenlenincekaçkisikazancakocekilisi> <Odul> <Ne Kadar Süre Artıcak>)")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
                addTime: ms(zaman)
            }).then(() => {
                message.channel.send("Başarılı! Çekiliş düzenlendi!");
            }).catch((err) => {
                message.channel.send("Bu hediyeyi bulamadım.");
            });
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'edit',
  description: '',
  usage: ''
};