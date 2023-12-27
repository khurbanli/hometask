// TAPSIRIQ --- 1. Ədədin kvadratın və kubun, console çıxardın.
let num = 102
console.log("Kvadrati: ", num * num);
console.log("Kubu: ", num * num * num);


// TAPSIRIQ --- 2. Sürət (v) 60 km/saat. Məsafə (s) 180 km. Neçə “dəyqəyə” bütün məsafə qət ediləcək?
let v = 60,
s = 180,
t = (s / v)
console.log("t =", t, "saat", "=", t * 60, "deqiqe")


// TAPSIRIQ --- 3. 3 ədəd var. Ədədlərin arasında ən böyük olanı tapıb console çıxardın.
const a = 39
const b = 13
const c = 21

if (a < b && b < c) {
    console.log(c, " en böyük ededdir")
} else if (a < c && c < b) {
    console.log(b, " en böyük ededdir")
} else if (b < c && c < a) {
    console.log(a, " en böyük ededdir")
} else {
    console.log("----")
}


// TAPSIRIQ --- 4. Ədədin tək və yaxud cüt olduğunu aşkarlayıb, console çıxardın.
const num1 = 9901
if (num1 % 2 == 0) {
    console.log(num1, " cüt ededdir")
} else {
    console.log(num1, " tek ededdir")
}



// TAPSIRIQ --- 5. 1-dən 7-yə kimi bir ədəd daxil etmək olar. Ədədə uyğun olaraq həftənin gününü console çıxardın.
console.log("Heftenin günleri:")
for (let week = 1; week <= 7; week++) {
    if (week == 1) {
        console.log("Bazarertəsi")
    } else if (week == 2) {
        console.log("Çərşənbə axşamı")
    } else if (week == 3) {
        console.log("Çərşənbə")
    } else if (week == 4) {
        console.log("Cümə axşamı")
    } else if (week == 5) {
        console.log("Cümə")
    } else if (week == 6) {
        console.log("Şənbə günü")
    } else if (week == 7) {
        console.log("Bazar günü")
    } else {
        console.log("Yalnış rəqəm daxil etdiniz")
    }
}


// TAPSIRIQ --- 6. İkirəqəmli ədədin hərfi təsvirini console çıxardın. Məsələn, "25" daxil etdikdə console "iyirmi beş",
// "13" isə "on üç" çıxaracağ.
let num3 = 17
num3 = 29
num3 = 11
console.log("on yeddi")
console.log("iyirmi doqquz")
console.log("on bir")


// TAPSIRIQ --- 7. 0-1000 intervalında olan bir ədədin neçə ədədli olduğunu console çıxardın.
// Məsələn, "76" daxil etdikdə console “iki rəqəmli ədəd” çıxaracağ.
const num4 = 308
if (0 < num4 && num4 < 1000) {
    if (num4 <= 9) {
        console.log("Tək rəqəmli ədəddir.")
    } else if (9 < num4 && num4 <= 99) {
        console.log("İki rəqəmli ədəddir.")
    } else if (99 < num4 && num4 <= 999) {
        console.log("Üç rəqəmli ədəddir.")
    }
} else {
    console.log("üç rəqəmli ədəddən böyük ədəd daxil etdiniz.")
}