module.exports = client  => {
    client.user.setStatus("online"); // botu çevrimiçi yapıyoruz
    client.user.setActivity('twitch.tv/celeebon', {type: "WATCHING"}); //ve burası oynuyor kısmı
    }