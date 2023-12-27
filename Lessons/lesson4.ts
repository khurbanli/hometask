// TAPSIRIQ --- 1. student adlı obyekt yaradıb name, age, course, faculty adlı sahələr verib hər birini console çıxardın.
const student = {
    name: "Fatima",
    age: 21,
    course: 4,
    faculty: "Mobile Developer"
};
console.log("Name: ", student.name)
console.log("Age: ", student.age)
console.log("Course: ", student.course)
console.log("Faculty: ", student.faculty)


// TAPSIRIQ --- 2. Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala.
const objj = {
    name: "Apple",
    color: "Green",
    region: "Quba"
};
const newObj = {
    ...objj
}

console.log(objj)
console.log("Color:", objj.color)
console.log(newObj)
console.log("Name:", newObj.name)


// TAPSIRIQ --- 3. 1-dən 10 kimi olan ədədlərin hərfi yazılışın obyektdən istifadə edərək console çıxardın.
const numObj = {
    1: "bir",
    2: "iki",
    3: "uc",
    4: "dörd",
    5: "bes",
    6: "alti",
    7: "yeddi",
    8: "sekkiz",
    9: "dokkuz",
    10: "on"
}
for (let key in numObj) {
    console.log(numObj[key])
}


// TAPSIRIQ --- 4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb name + surname qaytarsın.
const person = {
    name: "Fatima",
    surname: "Khurbanli",
    getFullName: function () {
        return `${this.name} ${this.surname}`
    }
}
console.log(person.getFullName)


// TAPSIRIQ --- 5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın. Məsələn: Nəticədə “key: name, value: Cavid”.
const object = {
    1: "11a sinifi"
}
for (let key in object) {
    console.log(key + ": " + object[key])
}


// TAPSIRIQ --- 6. Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
function check(a, b) {
    if (b in a) {
        return true
    }
    else {
        return false
    }
}
let obje = {
    name: "Fatima",
    age: 21,
    city: "Baku"
}
console.log(check(obje, "city"))





// TAPSIRIQ --- 7. Ədədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın.
const obj1 = {
    a: 3,
    b: 79,
    c: 56,
    d: 89,
    e: 45,
}
let sum = 0
for (let key in obj1) {
    console.log(key);
    sum += obj1[key];
}
console.log("cem:", sum)