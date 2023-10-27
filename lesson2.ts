// TAPSIRIQ --- 1. 10-dan 1-ə qədər bütün ədədləri console çıxardın.
for (let i = 10; i > 0; i--) {
    console.log(i)
}


// TAPSIRIQ --- 2. 0-100 intervalında yerləşən 9-a tam bölünən ədədləri console çıxardın.
console.log("9-a tam bölünən ədədlər:")
for (let i = 0; i < 100; i++) {
    if (i % 9 == 0) {
        console.log(i)
    } else {

    }
}


// TAPSIRIQ --- 3. 0-100 intervalında yerləşən cüt ədədlərin sayın tapıb, console çıxardın.
console.log("Cüt ededler:")
for (let j = 0; j < 100; j++) {
    if (j % 2 == 0 && j != 0) {
        console.log(j)
    }
}


// TAPSIRIQ --- 4. Ədədin “Sadə” və ya “Mürəkkəb” olduğunu tapib, console çıxardın.
// Məsələn, “13” console-da “13 sadə ədəddir”.
let counter = 0
const numm = 13
console.log("Daxil olunmus", numm, "ededi sadedir yoxsa mürekkeb ?")
for (let i = 1; i < numm; i++) {
    if (numm % i == 0) {
        counter++
    }
}
if (counter == 1) {
    console.log(numm, "sade ededdir")
} else {
    console.log(numm, "mürekkeb ededdir")
}


// TAPSIRIQ --- 5. 2 verilmiş ədədin intervalında yerləşən ədədləri kvadrata yüksəldib, console çıxardın.
console.log("iki ededin kvadrati:")
for (let i = 0; i < 10; i++) {
    console.log(i * i)
}


// TAPSIRIQ --- 6. 2 verilmiş ədədin intervalında yerləşən ədədlərin cəmini tapıb, console çıxardın. (while ilə)
let i = 0
const num2 = 15
console.log("iki ededin cemi:")
while (i < num2) {
    console.log(i + i)
    i++
}


// TAPSIRIQ --- 7. Verilmiş ədədin ən böyük bölənini tapib, console çıxardın.
const numb = 85
const counter1 = 0
for (let i = 1; i < numb; i++) {
    if (!(numb % i)) {
        Math.max(i)
    }
}
console.log(numb, "en böyük böleni:", i)