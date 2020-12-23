const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }

let messageID = args[0]
    if(!messageID){
        return message.channel.send(':x: bir çekiliş kimliği **belirtmelisin!**');
    }
client.giveawaysManager.reroll(messageID, {
    messages: {
        congrat: ":tada: Yeni kazanan(lar): {winners}! Tebrikler!",
        error: "Geçerli katılım yok, kazanan seçilemez!"
                    }   
}).catch((err) => {
    message.channel.send("`"+ messageID +"` için çekiliş bulamadım, lütfen kontrol edin ve tekrar deneyin");
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-reroll'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yenile',
  description: 'çekiliş',
  usage: 'çekiliş-tekrar'
};