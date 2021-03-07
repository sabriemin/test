const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
const ad = await data.fetch(`numara.${message.channel.id}`)
if(!ad) {
ad = '0' }
  
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bu Bilet Başkasına Ait.`))
message.delete()

message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bilet ${message.author} Tarafından Kapatıldı.`))
message.channel.setName(`closed-${ad}`)
message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`:unlock:: Ticketi Tekrar Açar.

:no_entry:: Ticketi Siler.`)).then(m => {
m.react('🔓')
m.react('⛔')
let sil = (reaction, user) => reaction.emoji.name === "⛔" && user.id !== client.user.id && user.id == message.author.id
let sill = m.createReactionCollector(sil, { time: 0 });
let geri = (reaction, user) => reaction.emoji.name === "🔓" && user.id !== client.user.id && user.id == message.author.id
let geriaç = m.createReactionCollector(geri, { time: 0 });

geriaç.on('collect', async reaction => {
const author = reaction.users.last()
m.delete('500')
reaction.remove(author.id) 
message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bilet ${message.author} Tarafından Tekrar Açıldı.`))
message.channel.setName(`ticket-${ad}`)
})

sill.on('collect', async reaction => {
const author = reaction.users.last()
reaction.remove(author.id) 
message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bilet 5 Saniye Sonra Silinecek.`))
setTimeout(async () => {
message.channel.delete()
data.delete(`asd.${message.guild.id}.${message.channel.id}`)
}, 5000)

})  

})
  

} else { return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bu Komutu Bir Bilet Kanalında Kullanın.`)) }

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kapat'
};