let btn=document.querySelector('#button')
let h2=document.querySelector('#heading')
let box=document.querySelector('.box')
let darkBtn=document.querySelector('#darkBtn')
let lightBtn=document.querySelector('#lightBtn')
let body=document.querySelector('body')
let container=document.querySelector('.container')

let colorChange=()=>{
    let red=Math.floor(Math.random()*255)+1
    let green=Math.floor(Math.random()*255)+1
    let blue=Math.floor(Math.random()*255)+1
    let opacity=Math.random().toFixed(2)
    box.innerText=""
    h2.innerText=`rgba(${red},${green},${blue},${opacity})`
    box.style.backgroundColor=`rgba(${red},${green},${blue},${opacity})`
}
btn.addEventListener("click",colorChange)

let darkMode=()=>{
    body.style.backgroundColor='black'
    body.style.color='white'
    container.style.backgroundColor='white'
    container.style.color='black'
}

darkBtn.addEventListener('click',darkMode)

let lightMode=()=>{
    body.style.backgroundColor=''
    body.style.color=''
    container.style.backgroundColor=''
    container.style.color=''
}

lightBtn.addEventListener('click',lightMode)

let para=document.querySelector('.text')
let inp=document.querySelector('#text')
inp.addEventListener('input',function(e){
    para.innerText=this.value
    console.log(e.target.value)
})