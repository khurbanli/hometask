// TAPSIRIQ --- 1. 2 daxil olan parametrlərin cəmini qaytaran funksiya yazın.
function loop(a, b) {
    return a + b
}
console.log(loop(2, 13))


// TAPSIRIQ --- 2. Daxil olan parametrin “Tək” və yaxud “Cüt” olduğunu yoxlayıb boolean qaytaran funksiya yazın.
function getResult(i) {
    if (!(i % 2)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
getResult(70)
getResult(77)


// TAPSIRIQ --- 3. Parametrlərdə “Ad” və “Soyad” qəbul edib aralarında boşluğ ilə qaytaran funksiya yazın.
function getSurname(name, surname) {
    return name + " " + surname
}
console.log(getSurname("Fatima", "Khurbanli"))


// TAPSIRIQ --- 4. Daxil olan ədədin mənfi və yaxud müsbət olduğunu yoxlayıb boolean qaytaran funksiya yazın.
function result(i : number) {
    if (i > 0) {
        return true
    } else if (i < 0) {
        return false
    } else {
        return i + " ne menfidir ne müsbet"
    }
}
console.log(result(9))
console.log(result(-3))
console.log(result(0))


// TAPSIRIQ --- 5. Parametrdən daxil olan ədədin faktorialını qaytaran funksiya yaradın.
function getFaktorial(eded) {
    if (eded < 0) {
        return "faktorial menfi ededi hesablamir"
    } else if (eded == 0) {
        return 0
    } else {
        let faktorial = 1
        for (let i = 1; i <= eded; i++) {
            faktorial *= i
        }
        return faktorial
    }
}
console.log(getFaktorial(8))
console.log(getFaktorial(-9))
console.log(getFaktorial(0))


// TAPSIRIQ --- 6. Parametrlərdən gələn intervalda yerləşən ədədləri funksiya ilə console çıxardın. (rekursiya)
function getRekursiya(i){
   if(i<21){
    console.log(i)
    i++
    getRekursiya(i)
   }
}
getRekursiya(7)


// TAPSIRIQ --- 7. Parametrdə n ədədini qəbul edən və n-ci Fibonaççi sayını qaytaran funksiya yazın. (rekursiya)
console.log("----7----")
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}
console.log(fibonacci(4))
//console.log(fibonacci(10))

console.log("---2ci üsul---")
function fib(n){
    let a=1
    let b=1
    for(let i=3;i<=n; i++){
        let c= a+b
        a=b
        b=c
    }
    return b
}
console.log(fib(4))