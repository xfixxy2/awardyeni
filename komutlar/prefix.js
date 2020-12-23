const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  
  const DCBL = require('darkcode');
const DarkCode = new DCBL('spDacmgODm-bQK68s7xlJ-CL0imJhIdj-ADBMb0vFLi-OFR194H2qL');
const voteCheck = DarkCode.checkVote(message.author.id);
if (!voteCheck) return message.channel.send("Bu komutu kullanmak için oy vermelisin. Oy Linkim : https://darklists.com/@awardbot")

  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyr:784759510547038268> Bu komutu kullanma izniniz yok. Gereken Yetki Yönetici `);
  
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") return  message.channel.send(`Prefix Ayarlamak İçin \`${prefix}prefix ayarla <yeni_prefix>\`\nPrefix Sıfırlamak İçin \`${prefix}prefix sıfırla\``)
  
    if (args[0] == 'ayarla') {
      if(!args[1]) return message.channel.send(`Bir Prefix Girmelisin.`)
      if(args[1].length > 5) return message.channel.send(`Prefix En Fazla 5 Karakterli Olabilir`)
      await db.set(`prefix_${message.guild.id}`, args[1])
      message.channel.send(`Botun Prefixi Başarıyla \`${args[1]}\` Olarak Ayarlandı.`)
    }
  
  if (args[0] == 'sıfırla') {
    if (!prefix) return message.channel.send(`Prefix Daha Önceden Ayarlanmamış`)
    await db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Botun Prefixi Başarıyla Sıfırlandı`)
    }
 
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};