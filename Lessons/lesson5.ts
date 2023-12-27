// TAPSIRIQ --- 1. Ədədlərdən ibarət olan bir massiv yaradın və onun uzunluğun iki dəfə azaldın.
let arry = [3, 5, 7, 9, 11, 13, 15]
console.log("uzunlugun qisaldilmasi:", arry.length - 2)


// TAPSIRIQ --- 2. Massivdə yerləşən bütün ədədlərin cəmini tapın.
let arr1 = [1, 5, 7, 17, 13, 23, 97]
let counter3 = 0
for (let i = 0; i < arr1.length; i++) {
    counter3 += arr1[i]
}
console.log("arraylerin cemi: ", counter3)




// TAPSIRIQ --- 3. Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.
function getNum1(arra: number[]) {
    let min = arra[0]
    let max= arra[0]
    for (let i = 1; i < arra.length; i++) {
        if (arra[i] < min) {
            min = arra[i]
        }
        if (arra[i] > max) {
            max = arra[i]
        }
    }
    return { min, max }
}
let arra = [12, 5, 34, 7, 1, 25]
let result1 = getNum1(arra)
console.log("Max: " + result1.min)
console.log("Min: " + result1.max)



// TAPSIRIQ --- 4. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə yazın. Məsələn [1,2,3,4,5] -> [1,3,5] və [2,4].
function getArray(dizi: number[]) {
    let arraTek : number[]= []
    let arraCüt:number[] = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arraCüt.push(array[i])
        } else if (array[i] % 2 == 1) {
            arraTek.push(array[i])
        }
    }
    return [arraCüt, arraTek];
}
let array = [1, 4, 7, 9, 10, 13, 14, 20, 23]
console.log(getArray(array))



// TAPSIRIQ --- 5. Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.
let array1 = [3, 5, 1, 17, 13, 23, 9]
array1.sort(function (a, b) {
    return a - b
})
console.log(array1)
array1.sort(function (a, b) {
    return b - a
})
console.log(array1)


console.log("---6-TASK---")
// TAPSIRIQ --- 6. Massivdən false deyimli (undefined, null, false və s.i.)
// elementləri silib yeni massiv qaytaran funksiya yazın.
function removArr() {
    let arr : any[]= [true, null, "hello", undefined, "how"]
    let newarr : number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            newarr.push(arr[i])
        }
    }
    console.log(newarr)
}
removArr()




console.log("---7-TASK---")
// TAPSIRIQ --- 7. Massivdə yerləşən elementləri reverse edən funksiya yazın.
let arr4 = [3, 6, 98, 2, 5, 7, 88]
let arr5: number[] = []
for (let i = arr4.length - 1; i >= 0; i--) {
    arr5 = [...arr5, arr4[i]]
}
console.log(arr5)