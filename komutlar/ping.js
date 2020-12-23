const Discord =
      require('discord.js');
const Client =
      new Discord.Client();
	  
	  
exports.run = (client, message) => {
	

const Embed = new Discord.MessageEmbed().setColor(0x36393F)
.setDescription(`Ping : **${client.ws.ping}**`)
message.channel.send(Embed)




};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};