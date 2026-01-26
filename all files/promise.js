// function connect(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1
//     if(internetSpeed>4){
//         console.log('the data was',data)
//         success();
//     }
//     else{
//         console.log('failed: connection failed')
//         failure();
//     }
// }

// connect('hero',()=>{
//     console.log('success: data 1 saved')
//     connect('lal',()=>{
//         console.log('success: data2 saved')
//         connect('motu',()=>{
//             console.log('success: data 3 saved')
//         },()=>{
//             console.log('failure3: data not saved')
//         })
//     },()=>{
//         console.log('failure2: data not saved')
//     })
// },()=>{
//     console.log('failure1: data not saved')
// })

//using promise
// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1
//     if(internetSpeed>4){
//         resolve({message:'success: data saved',data:data});
//     }
//     else{
//         reject('failure: data not saved');
//     }
//     })
// }


// saveToDb('hero')
// .then((result)=>{
//     console.log('connected successfully')
//     console.log(result)
//     return saveToDb('lal')
// })
// .then((result)=>{
//      console.log('connected successfully')
//     console.log(result)
// })
// .catch(()=>{
//     console.log('failure: data was rejected')
// })

//color change 
let h1=document.querySelector('h1')
// function colorChange(color,nextColor){
//     setTimeout(()=>{
//         h1.style.color=`${color}`
//         nextColor()
//     },1000)
// }

// colorChange('red',()=>{
//     colorChange('green',()=>{
//         colorChange('pink',()=>{
//             colorChange('yellow',()=>{
//                 colorChange('grey',()=>{
//                     colorChange('blue',()=>{

//                     })
//                 })
//             })
//         })
//     })
// })

//colorChange using promise
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//           let internetSpeed=Math.floor(Math.random()*10)+1
//         if(internetSpeed>3){
//             setTimeout(() => {
//                 h1.style.color=color
//                 resolve('color changed')
//             }, delay);
//         }
//         else{
//             reject('failure: color not changed')
//         }
//     })
// }

// changeColor('red',1000)
// .then(()=>{
//     console.log('red color changed')
//     return changeColor('green',1000)
// })
// .then(()=>{
//     console.log('green color changed')
//     return changeColor('blue',1000)
// })
// .then(()=>{
//     console.log('blue color changed')
//     return changeColor('yellow',1000)
// })
// .then(()=>{
//     console.log('yellow color changed')
//     return changeColor('pink',1000)
// })
// .then(()=>{
//     console.log('pink color changed')
   
// })
// .catch(()=>{
//     console.log('color not changed')
// })

//color change using async and await
function colorChange(color){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color
            resolve('color changed')
        },1000)
    })
}

async function demo() {
    await colorChange('red')
    await colorChange('green')
    await colorChange('blue')
}

demo()