module.exports = {
    isim: "deneme", //en önemli kısım burası komudunuzun ismi ben bunu deneme yaptım
    aciklama: "deneme komudu", //komudun açıklaması buraya önem verin!
    kestirme: ["test", "t"], //kısaltmalarımızı koyuyoruz yani !t olur !test de olur
    //!deneme de olur
    sahipOzel: false, //eğer bu true olursa sadece siz ve diğer sahibin 
    //kullanabilirsiniz eğer false olursa herkes kullana bilir
    
        async calistir(client, message, args){ //parametrelerimiz ve 
        //async functionumuz ile kodun çalışacağı yer burası
            message.channel.send('Çalıştı!'); //kanala çalıştı mesajını gönderiyoruz
            // eğer bu mesajı alırsanız sistem çalışmışdır
        }
    }