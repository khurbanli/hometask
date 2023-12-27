let str = "Hello DevEducation students"; 
let newStr = ""; 
let text = "DevEducation"; 
let textIndex = 0; 
let replaceText = "BDU"; 
  
for (let i = 0; i < str.length; i++) { 
    if (str[i] == text[textIndex]) { 
        textIndex++; 
        if (textIndex === text.length) { 
            newStr += replaceText; 
            textIndex = 0;  
        } 
        else{ 
          newStr += str[i]; 
        } 
    } else { 
        newStr += str[i]; 
    } 
} 
console.log(newStr);

//////// 2

let arr = [3, 6, 98, 2, 5, 7, 88]
arr.sort(function (a, b) {
    return b - a
})
console.log(arr)


//////// 3

const obj = {
    level: 1,
    a: {
        level: 2,
        b: {
            level: 3,
        }
    }
}
const newobj = { ...obj, a: { ...obj.a } }
newobj.a.level = "nnjwhh"
console.log("new  ", newobj);
console.log("orginal  ", obj)


/////  4
const car={
    name : "bmw",
    speed: 230,
    heght: 3.5,
}
const yükCar={
    name: "audi",
    speed: 4.6
}

const birlesdirme={
    ...car,
    ...yükCar
}
console.log(birlesdirme)


////// 5
const animal ={
    wegiht: 20,
    height: 45,
    food: "meet",
    run(){
        console.log("Qacmaq")
    },
}
const wolf ={
    ...animal,
    name: "wolf",
}
const bear={
    ...animal,
    name: "bear",
}
console.log(wolf)