let btn=document.createElement('button')
let body=document.querySelector('body')

body.appendChild(btn)
btn.innerText='click'
btn.addEventListener('click',function(){
    this.classList.toggle('blue')
})


let input=document.createElement('input')
input.placeholder='enter your name'

let h2=document.createElement('h2')
h2.innerText='hi'

body.appendChild(input)
body.appendChild(h2)

input.addEventListener('input',function(e){
 if((e.key>='a'&&e.key<='z')||(e.key>='A'&&e.key<='Z')||(e.key==='Backspace')||(e.key===' ') )
    h2.innerText=this.value
 else
    alert('enter valid key from a-z and A-Z',e.code)
})
