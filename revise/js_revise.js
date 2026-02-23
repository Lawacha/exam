
// //string
// // let fname='supreme'
// // let lname='suwal'
// // let fullname=fname+' '+lname
// // console.log('the name is ',fullname)

// let a=3
// let b=2
// console.log(a+b)

// let age=20
// if(age>18)
// {
//     console.log(`${age} is adult`)
// }
// else
// console.log(`${age} is minor`)

// // level 2
// let number =3
// if(number>0)
//     console.log(`${number} is positive`)
// else
//      console.log(`${number} is negative`)

// let num =3
// if(num%2==0)
//     console.log(`${number} is even`)
// else
//      console.log(`${number} is odd`)

// let marks=39
// if(marks>=40)
//     console.log(`${marks} is pass`)
// else
//      console.log(`${marks} is fail`)

// let temp=39
// if(temp<15)
//     console.log('cold')
// else if(temp>=15&&temp<=25)
//     console.log('normal')
// else
//     console.log('hot')

// let day=5
// switch(day)
// {case 1:
// console.log('sunday')
// case 2:
// console.log('monday')
// case 3:
// console.log('tuesday')
// case 4:
// console.log('wednesday')
// case 5:
// console.log('thursday')
// case 6:
// console.log('friday')
//  default:
//     console.log('invalid')

// }

// //level 4
// let price=4000
// let discount=200
// let finalPrice=price-discount
// console.log(`the final price is ${finalPrice}`)

// let username='james'
// let password='reece'
// if(username=='')
//     console.log('is empty')
// if(password=='')
//     console.log('is empty')

// //function
// function greet(username)
// {
//     console.log(`hello ${username}`)
// }

// function sum(a,b){
//     return a+b
// }
// console.log(sum(3,4))

// function oddEven(num){
//     if(num%2==0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }

// console.log(oddEven(4))

// //level 2
// function finalP(price=400,discount=10){
//     let final=price-discount
//     console.log(`the final price is : ${final}`)
// }

// //array
// let arr=[1,2,3,4,5]
// console.log(arr)

// let fruits=['banana','apple','mango','guava']
// console.log(fruits[0])
// console.log(fruits[3])

// arr.push(7)
// console.log(arr)

// fruits.pop()
// console.log(fruits)

// console.log(`the length of array is ${fruits.length}`)

// let person={
//     name:'supreme',
//     age:20,
//     city:'bkt'
// }

// console.log(person.name)

// person.email='supremesuwalgmail.com'
 
// console.log(person)

// person.age=19

// delete person.city

// console.log(person)

// let arrOfObj=[
//     {
//         name:'ram',
//         age:19,
//         city:'bkt'
//     },
//     {
//         name:'shyam',
//         age:24,
//         city:'ltp'
//     },
//     {
//         name:'hari',
//         age:22,
//         city:'ktm'
//     }
// ]

// console.log(arrOfObj[1].name)

// arrOfObj.push({name:'supreme',
//     age:20,
//     city:'bkt'
// })
// console.log(arrOfObj)

// console.log('count')

// count=0
// for (let person of arrOfObj) {
// if(person.age>18)
//     count++

// }
// console.log(`the num of people above 18 are: ${count}`)

// //math random
// let n=Math.floor(Math.random()*7)
// console.log(n)

// //arrow function
// let greeting=(name)=>{
//     return `hello ${name}`
// }

// console.log(greeting('supreme'))

// let sum =(a,b)=>a+b
// console.log(`the sum is ${sum(2,3)}`)

// let oddOrEven=(num)=>{
//     if(num%2==0)
//         return 'even'
//     else
//         return 'odd'
// }
// console.log(oddOrEven(9))

// //level 2
// let isAdult=(age)=>{
//     if(age>18)
//         return 'adult'
//     else
//         return 'minor'
// }
// let ramAge=19
// console.log(`${ramAge} is ${isAdult(ramAge)}`)

// let temperature=(temp)=>{
//     if(temp<18)
//         return 'cold'
//     else if(temp>=18 && temp<=32)
//         return 'normal'
//     else 
//         return 'hot'
// }
// let temper=30
// console.log(`the temperature ${temper} is ${temperature(temper)} `)


// //level 3 
// let arr=[1,2,3,4,5,6,7]
// let summ=0
// let add=(a)=>{
//     for(let i of a){
//         summ=summ+i
//     }
//     console.log(summ)
// }
// add(arr)

// let people=[
//     {
//         name:'ram',
//         age:17,
//         city:'bkt'
//     },
//     {
//         name:'shyam',
//         age:18,
//         city:'bkt'
//     },
//     {
//         name:'hari',
//         age:20,
//         city:'bkt'
//     }
// ]

// let isAbove18=(a)=>{
//     for(let person of a)
//     {
//        if( person.age>18)
//        {
//         console.log(`${person.name} is above 18`)
//        }
//        else{
//          console.log(`${person.name} is not above 18`)
//        }
//     }
// }
// isAbove18(people)

// let num=[1,2,3,4,5,6,7]
// let double=num.map((n)=> n*2)
// console.log(double)

// let even=num.filter((n)=>n%2==0)
// console.log(even)

// let total=num.reduce((sum,n)=>sum+n,0)
// console.log(total)

// let people = [
//   { name: "Ram", age: 17, city: "bkt" },
//   { name: "Shyam", age: 20, city: "ktm" },
//   { name: "Hari", age: 22, city: "bkt" }
// ];

// let p=people.map((p)=>p.name)
// console.log(p)

// let adult=people.filter((person)=>person.age>=18)
// console.log(adult)

// let totalAge=people.reduce((sum,person)=>sum+person.age,0)
// console.log(totalAge)

// let bktin=people.filter((person)=>person.city=='bkt')
// let bktName=bktin.map((person)=>person.name)
// console.log(bktName)

// console.log('hi there')
// let id=setInterval(() => {
//   console.log('supreme ')
// }, 3000);
// console.log('welcome to ')
// clearInterval(id)

//write an arrow function that returns the square of a number n
let square=(n)=>n*n
console.log(square(2))

//write a function that prints 'hello world' 5 times at intervals of 2s each
// let print=setInterval(()=>{
//   console.log('hello world')
// },2000)

// console.log(print)

// setTimeout(() => {
//   clearInterval(print)
// }, 10000);


//write an arrow function named arryAverage that accepts an array of numbers and return the average of those numbers
let arr=[1,2,3,4,5,6,7]

let arrayAverage =(arr)=>{
  let sum=0
  for (const num of arr) {
  sum=sum+num
  }
  let avg=sum/arr.length
  console.log(`the average : ${avg}`)
}
arrayAverage(arr)