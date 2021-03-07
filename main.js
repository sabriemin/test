const  Discord = require('discord.js'); //discord.js yi tanımlıyoruz!
const  client = new  Discord.Client(); //clientımızı tanımlıyoruz!
const  qwertyl = require('qwerty-lib'); // ve Qwerty.L yi tanımlıyoruz!

let  QwertylAyar = {
sahipId: ["257963191269588993"], //sahiplerin idsi
prefix:  "*", //botun prefixi
etiketlePrefixVer:  true, //Biri Botu Etiketleyince Bot Prefixini Atar
etiketlePrefixKullan:  true, //etiketi prefix yerine kullanırsınız
komutKlasör:  "./komutlar", //komut klasörümüz
eventKlasör:  "./eventler", //event klasörümüz
botlarKullanabilsin:  false, //botların komut kullanabilmesi
DMKabul:  false, //dmden komut alma
KomutLog:  true, //bir komut kullanıldığında konsola log gelir
komutBulamayıncaHata:  true //Eğer Kullanıcı Olamayn Bir Komudu Kullanmaya Çalışırsa Discordan Bir Embed Mesajı İle Komut Bulunamadı Yazıcak
};

const  qApp = new  qwertyl(client, QwertylAyar); // Qwerty.Lnin Çalışması İçin Gerekli Olan Client Ve Ayarlarımızı Tanımlıyoruz (tam olarak öyle değil..)

client.on('message', async  message  => {
qApp.mesaj(client, message, QwertylAyar); //bir mesaj geldiğinde Qwerty.L'ye söylüyoruz (tam olarak öyle değil.. x2)
});
client.login('ODE3OTI2MTM1ODYxMDg0MTkw.YEQnEw.rIlaN0kFCE8XdyKwRw_3V8jkymQ'); // tokenle Giriş Yapıyoruz