let input=document.querySelector('.inp')
let btn=document.querySelector('.btn')
let list=document.querySelector('.list')

btn.addEventListener('click',()=>{
    if(input.value==''){
        alert('are you gay')
    }
else{
    let newTask=document.createElement('li')
    newTask.innerText=input.value
    list.append(newTask)
    let dltbtn=document.createElement('button')
    dltbtn.innerText='Delete'
    newTask.appendChild(dltbtn)
    dltbtn.classList.add("dltbtn")
}
    input.value=''
})

//use event delegation on delete button because it is one like that but dont ask what is event delegation because i dont know it my self

// let dltbtn=document.querySelector('.dltbtn')
// dltbtn.addEventListener('click',()=>{
//     console.log('clicked delete button')

// })