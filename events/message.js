const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
const Discord = require("discord.js");
module.exports = async message => {
  let client = message.client;
  if (message.author.bot) return;

  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    
    let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
    .setColor("0x36393F")
   .setTitle('KOMUTLARI KULLANAMAZSINIZ!')
  .setDescription(`Üzgünüm ancak komutları kullanamazsınız! Kurucularımız tarafından **${karalistesebep}** sebebiyle komutları kullanmanız yasaklandı!.`)
   .setFooter(`Engellendiniz.`)
   .setImage("")
   .setThumbnail(client.user.avatarURL())
   
	         }

    cmd.run(client, message, params);
  }
};