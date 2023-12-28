function saniyeSayan(saniye) {
  var baslangic = new Date().getTime();
  var bitis = baslangic + saniye * 1000;

  function geriSay() {
    var indikiZaman = new Date().getTime();
    var qalanSaniye = Math.max(Math.floor((bitis - indikiZaman) / 1000), 0);

    if (qalanSaniye === 0) {
      console.log("vaxt bitdi !");
    } else {
      if (qalanSaniye < 10) {
        console.log("0" + qalanSaniye);
      } else {
        console.log(qalanSaniye);
      }
      setTimeout(geriSay, 1000);
    }
  }

  geriSay();
}

// 5 saniye geri sayım başlat
saniyeSayan(10);
