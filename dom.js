let body=document.querySelector('body')


//paragraph tag
let newP=document.createElement('p')
newP.innerText="hey i'm red!"
newP.style.color='red'
body.appendChild(newP)


//h3 tag
let h3=document.createElement('h3')
h3.innerText="I'm a blue h3"
h3.style.color="blue"
body.appendChild(h3)

let div=document.createElement('div')
div.style.border='2px solid black'
div.style.backgroundColor='pink'
let h4=document.createElement('h1')
h4.innerText="i'm in a div"
div.appendChild(h4)
body.append(div)

//practice
let input=document.createElement('input')
let btn=document.createElement('button')
btn.innerText='click me'
document.querySelector('body').append(input)
document.querySelector('body').append(btn)

input.placeholder='username'
btn.id='btn'

let button=document.querySelector('#btn')
document.querySelector('input')
button.classList.add('blue')

let h1=document.createElement('h1')
body.append(h1)
h1.innerText='DOM Practice'
h1.classList.add('underline')

let p=document.createElement('p')
body.append(p)
p.innerHTML='Hi i am <b>Practicing</b>'

let butt=document.querySelectorAll('button')
for(let but of butt){
    but.onmouseenter=click
}
function click(){
    console.log('clicked')
}