// let arr=[1,2,3,4,5,6,7]

// arr.forEach((el)=>{
//     console.log(el)
// })

// let student=[{
//     name:'ram',
//     marks:98
// },
// {
//    name:'shyam',
//     marks:88
// },
// {
//     name:'hari',
//     marks:78
// }]

// student.forEach((element) => {
//     let gpa=element.marks/10
//     console.log(gpa)
// });

// let gpa=student.map((student)=>
//     student.marks/10
// )
// console.log(gpa)

//practice question
// let arr=[1,2,3,4,5,6,7,8,9,10,20]
// // let isMultiple= arr.every((el)=>el%10==0)
// // console.log(isMultiple)

// //creata function to find the min number in an array
// let min=arr.reduce((res,el)=>{
//     if(res<el)
//         return res
//     else
//         return el
// })

// console.log(min)

// let arr=[1,2,3,4,5,6,7]
// let spreadarr=[...arr]
// let newArr=arr
// console.log(arr==spreadarr)
// console.log(spreadarr)
// console.log(newArr)

//day 21

// square and sum the aray element using arrow function then find the average of array
let arr=[1,2,3,4,5,6,7]
let squared=arr.map((el)=>el*el)
let sum=squared.reduce((res,el)=> res+el)
let avg=sum/arr.length

console.log(sum)

let average=arr.map((el)=>el*el).reduce((res,el)=>res+el,0)/arr.length
console.log(average)

//create a new array using the map function whose each element is equal to the original element plus 5
let newArr=arr.map((el)=>el+5)
console.log(newArr)

//create a new arry whose elements are in uppercase of words persent in the original array
let words=['ram','shyam','hari']
let newWords=words.map((el)=>el.toUpperCase()
)
console.log(newWords)

//write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original aray values and all of the additonal arguments doubled.
function doubleAndReturnArgs(num,...args){
    let double=args.map((el)=>el*2)
    return [...num,...double]

}
console.log(doubleAndReturnArgs(arr,1,2,3))

//write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
let student={
    name:'ram',
    age:19
}
let course={
    name:'csit',
    title:'none'

}
let mergeObjects=(s,course)=>{
    return {...s,...course}
}
console.log(mergeObjects(student,course))