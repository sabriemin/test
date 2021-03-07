const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
const yardım = new Discord.RichEmbed()
.setTitle("Ticket Yardım Menüsü")
.setDescription(`
**Kullanım:** \`${prefix}ekle @Etiket #kanal\`
**Açıklama:** Ticket'a Başka Birisini/Rolü Eklersiniz.

**Kullanım:** \`${prefix}sil @Etiket #kanal\`
**Açıklama:** Ticket'a Ekli Birisini/Rolü Silersiniz.

**Kullanım:** \`${prefix}aç @Etiket #kanal\`
**Açıklama:** Ticket Açarsınız.

**Kullanım:** \`${prefix}kapat @Etiket #kanal\`
**Açıklama:** Ticket Kapatırsınız.

**Kullanım:** \`${prefix}bilet-sil \`
**Açıklama:** Ticket Silersiniz

**Kullanım:** \`${prefix}ticket-kanal ayarla/sıfırla #kanal\`
**Açıklama:** Ticket Mesajının Kanalını Ayarlarsınız.

**Kullanım:** \`${prefix}ticket gönder\`
**Açıklama:** Ticket Mesajı Gönderir
`)
.setColor(0x7997ff)
.setFooter(`© Safe Code 2021`)
message.channel.send(yardım) 

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};