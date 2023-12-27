function time() {
    const start = new Date();
    const startSaniye = start.getSeconds() + start.getMinutes() * 60 + start.getHours() * 3600;

    console.log("Başlama Vaxti:", start.toLocaleTimeString());
    const sonSaniye = startSaniye + 5 * 60;
    const interval = setInterval(() => {
        const hazirkiVaxt = new Date();
        const kecenSaniye = hazirkiVaxt.getSeconds() + hazirkiVaxt.getMinutes() * 60 + hazirkiVaxt.getHours() * 3600;
        console.log("Cari Vaxt:", hazirkiVaxt.toLocaleTimeString());
        if (kecenSaniye >= sonSaniye) {
            clearInterval(interval);
            console.log("Sayim başa çatdi.");
        }
    }, 1000);
}
time(); 
  