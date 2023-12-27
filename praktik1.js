// online shopping
function shooping(qiymet) {
    if (qiymet >= 150.00) {
        return "Pulsuz çatdırılma, sifarişiniz 150.00 $ böyükdür"
    } else {
        return "Çatdırılma haqqı 30.00 $"
    }
}
console.log(shooping(70))
console.log(shooping(270))


// WATER 14 gün bir insan güne 3 litir su icir
function getSu(insan, su) {
    let check = su / (insan * 3) //check -- nece güne su yeteceyin gösterir
    if (check > 14) {
        return check + " güne su bes edecekdir"
    } else if (check < 14) {
        return check + " güne bes edecek, 14 güne yetmeyecek yaniniza daha cox su almalisiz"
    } else if (check < 1) {
        return "su ehtiyatiniz bir günden az bir vaxtda tükenecek"
    }
}
console.log(getSu(4, 12))
console.log(getSu(2, 120))
console.log(getSu(2, 10))


// GENERATION Siz Hansı Nəsilsiniz? x sayi  y cinsi  m kisi,  f qadin
function generation(x, y) {
    if (x < 0) {
        if (x == -3) {
            return`${y} : great grandmother`
        } else if (x == -2) {
            return `${y} : grandmother`
        } else if (x == -1) {
            return `${y} : mother`
        }
    } else if (x == 0) {
        return "me!"
    }
    else if (x > 0) {
        if (x == 1) {
            return `${y} : daughter`
        } else if (x == 2) {
            return `${y} : granddaughter`
        } else if (x == 3) {
            return `${y} : great granddaughter`
        }
    }
}
console.log(generation(-3, "m"))
console.log(generation(1, "f"))
console.log(generation(0, "f"))