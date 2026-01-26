let h2=document.querySelector('h2')
let boxes=document.querySelectorAll('.box')
let body=document.querySelector('body')

let started=false
let level=0
let highest=0

let colorBox=['red','green','blue','yellow']
let gameSequence=[]
let userSequence=[]

document.addEventListener('keypress',()=>{
    if(started==false)
    {
        started=true
        levelUp()
    }
   

})

let gameFlash=(box)=>{
   box.classList.add('gameFlash')
    setTimeout(() => {
            box.classList.remove('gameFlash')
    }, 300)
}

let userFlash=(box)=>{
    box.classList.add('userFlash')
    setTimeout(() => {
        box.classList.remove('userFlash')
    }, 200);
}

let levelUp=()=>{
    level++
    userSequence=[]
    h2.innerText=`Level ${level}`

    let randIdx=Math.floor(Math.random()*4)
    let randColor=colorBox[randIdx]
    let randBox=document.querySelector(`.${randColor}`)
    
    gameSequence.push(randColor)
    console.log(gameSequence)
    
    gameFlash(randBox)
}

function checkSequence(){
    let idx=userSequence.length-1
    if(userSequence[idx]===gameSequence[idx]){
        if(userSequence.length===gameSequence.length)  //last index of user== last index of game 
        {                                               //then levelUP()
            setTimeout(() => {
                levelUp()
            }, 1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was ${level}.<br>Press any key to Start.`
        resetGame()
        body.style.backgroundColor='red'
        setTimeout(() => {
            body.style.backgroundColor=' rgb(83, 122, 156)'
        }, 350);
    }
}

function boxPress(){
    
    let box=this

    let userBox=box.getAttribute('id')
    userSequence.push(userBox)
    console.log(userSequence)
    userFlash(box)

    checkSequence()
}

for(let box of boxes){
    box.addEventListener('click',boxPress)
}

function resetGame(){
    level=0
    started=false;
    gameSequence=[]
    userSequence=[]
}

function highestLevel(){
    if(level>highest){
        highest=level
    }
}