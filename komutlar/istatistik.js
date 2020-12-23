const Discord = require('discord.js');
const moment = require('moment');
const { version } = require("discord.js");
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

var ayarlar = require('../ayarlar.json');

exports.run = (bot, message, args) => {
	
	const DCBL = require('darkcode');
const DarkCode = new DCBL('spDacmgODm-bQK68s7xlJ-CL0imJhIdj-ADBMb0vFLi-OFR194H2qL');
const voteCheck = DarkCode.checkVote(message.author.id);
if (!voteCheck) return message.channel.send("Bu komutu kullanmak için oy vermelisin. Oy Linkim : https://darklists.com/@awardbot")

	
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
        const embedStats = new Discord.MessageEmbed()
            .setAuthor( "İstatistikler", bot.user.avatarURL)
            .setColor("#FF0000")
            .addField("❯ Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 4096 / 4096).toFixed(1)}  MB`)
            .addField("❯ Çalışma Süresi ", `${duration}`)
            .addField("❯ Bot İstatistikleri", stripIndents`
            \`\`\`yaml
            Kullanici: ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
            Sunucu: ${bot.guilds.cache.size.toLocaleString()} 
            Kanal: ${bot.channels.cache.size.toLocaleString()}
            Ping: ${Math.round(bot.ws.ping)}ms.
            \`\`\`
            `)
            .addField("❯ Versiyonlar", stripIndents`
            » Discord.js: v${version}
            » Node.js: ${process.version}
            `)
            .addField("❯ CPU", `\`\`\`yaml\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("❯ CPU Kullanımı", `%${percent.toFixed(0)}`)
            .addField("❯ İşletim Sistemi", `${os.platform()} | ${os.arch()} Bit`) 
        message.channel.send(embedStats)
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i',"stats"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istatistik',
    category: "bot",
    description: 'Botun istatistiklerini gösterir.',
    usage: 'bx!istatistik'
  };