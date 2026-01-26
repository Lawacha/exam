let url='https://catfact.ninja/fact'
let p=document.querySelector('.p')
let btn=document.querySelector('.btn')

// let promise=fetch(url)
// console.log(promise)
// console.log(promise)
// promise.then((res)=>{
//     console.log(res.json())
// })

//using axios
async function getfact() {
  try{
      let res=await axios.get(url);
    let fact=res.data.fact
    return fact
  }
  catch{
    console.log('error')
    return 'could not find'
  }
}

 btn.addEventListener(('click'),async()=>{
        let f=await getfact()
        p.innerText=f
    })

