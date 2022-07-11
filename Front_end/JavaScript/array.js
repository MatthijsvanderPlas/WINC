const addTheWordCool = function(array){
    array.push("cool")
    return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "amazing"]));
// result: ["nice", "awesome", "amazing", "cool"]

const amountOfElementsInArray = (array) => {
    return array.length
}

console.log(amountOfElementsInArray(['apples', 'pears', 'lemons'])); 
// 3

const selectBelgiumFromBenelux = array => {
    return array[0]
}

console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])); 
// result: "Belgium" 

const lastElementInArray = array => {
    return array[array.length-1]
}

console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"])); 
// result: "Turtle"

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    return array.slice(1)
}
const impeachTrumpSplice = function(array) {
    return array.splice(1, 3, '')
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

const stringsTogether = array => {
    return array.reduce((message, item) => {
        return message + item + ' '
    }, '')
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}'])) 
//result: "Winc Academy is fun ;-}"

const combineArrays = (array1, array2) => {
    console.log(array1.concat(array2))
}

combineArrays([1,2,3], [4,5,6]) 
// resultaat: [1,2,3,4,5,6]
