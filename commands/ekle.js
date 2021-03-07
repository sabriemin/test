const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
if(!args[0]) {
message.delete()
return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Komutu Düzgün Kullanın: \`Etiket/Rol #Kanal\``)).then(c => c.delete(10000)) }
  
if(args[0]) {

if(!args[1]) {
const ad = await data.fetch(`numara.${message.channel.id}`)
if(!message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bu Bilet Başkasına Ait.`))
message.delete()
return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bu Komutu Bir Bilet Kanalında Kullanın.`)).then(c => c.delete(5000)) } }
  
let mt = message.mentions.roles.first() || message.mentions.users.first()
if(!mt) {
message.delete()
return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Komutu Düzgün Kullanın: \`Etiket/Rol #Kanal\``))  }
let mention = message.guild.roles.get(mt.id) || message.guild.members.get(mt.id)
if(!mention) {
message.delete()
return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Komutu Düzgün Kullanın: \`Etiket/Rol #Kanal\``))  }  
  
if(args[1]) {  
  
if(message.mentions.channels.first()) {
  
let ch = message.mentions.channels.first()
const ad = await data.fetch(`numara.${message.channel.id}`)
if(!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {
message.delete()
return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bir bilet kanalı değil.`)).then(c => c.delete(5000)) }  
const ann = await data.fetch(`asd.${message.guild.id}.${ch.id}.${message.author.id}`)
if(!ann) return message.channel.send(new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`Bu Bilet Başkasına Ait`))
ch.overwritePermissions(mt, { 'SEND_MESSAGES': true, 'READ_MESSAGES': true })
message.delete()
const emb = new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`${mt}: ${ch} Kanalına Eklendi.`)
return message.channel.send(emb) } }
  
message.channel.overwritePermissions(mt, { 'SEND_MESSAGES': true, 'READ_MESSAGES': true })
message.delete()
const emb = new Discord.RichEmbed()
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
.setDescription(`${mt}: ${message.channel} Kanalına Eklendi.`)
return message.channel.send(emb)

}

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ekle'
};