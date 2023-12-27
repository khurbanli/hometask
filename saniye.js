function saniyeSayaci(saniye) {
  var baslangic = new Date().getTime();
  var bitis = baslangic + saniye * 1000;

  function geriSay() {
    var simdikiZaman = new Date().getTime();
    var kalanSaniye = Math.max(Math.floor((bitis - simdikiZaman) / 1000), 0);

    if (kalanSaniye === 0) {
      console.log("Süre doldu!");
    } else {
      if (kalanSaniye < 10) {
        console.log("0" + kalanSaniye);
      } else {
        console.log(kalanSaniye);
      }
      setTimeout(geriSay, 1000);
    }
  }

  geriSay();
}

// 5 saniye geri sayım başlat
saniyeSayaci(10);
