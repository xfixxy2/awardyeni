const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("PHC HOSTING")
.setDescription(" \n \n Tam kontrol Sunucu Paneli \n \n Yönetim Paneli ile sunucu yönetimi tamamen sizin kontrolünüzde! Otomatik kurulum panelimiz ile vakit kaybı olmadan istediğiniz işlemi yapabilirsiniz. \n \n 10G Fiber Bağlantı Noktası \n \n Oyun Sunucularınızda Kesintisiz Hizmet ve Ping'siz Oyun Keyfinin Tadını Çıkartın. Sunucularımız Türkiye Lokasyon olduğu için list sırasında en yukarı çıkarsınız. \n \n BAGLANTILAR \n [DİSCORD SUNUCULARI](https://discord.gg/PCCughN)\n [SITESI](https://phchosting.com/)")
.setImage("https://media.discordapp.net/attachments/740863913612148777/771501652452179988/Screenshot_2.png")
      .setThumbnail("https://media.discordapp.net/attachments/786191042113699852/786346174436212786/9k.png")
.setColor("BLUE")
return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["destekci"],
permLevel: 0
  
};
  
exports.help = {
name: 'sponsor'
};