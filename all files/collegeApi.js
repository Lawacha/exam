let url='http://universities.hipolabs.com/search?name='

let btn=document.querySelector('.countryBtn')
let input=document.querySelector('.countryInp')
let collegeList=document.querySelector('.collegeList')

btn.addEventListener('click',()=>{
    if(input.value===''){
        alert('enter country name')
    }else{
        let country=input.value
    console.log(`the coutnry is ${country}`)
    getCollege(country)
    
    }
    input.value=''

})

async function getCollege(country) {
   try{
     let res=await axios.get(url+country)
        console.log(res)
     let colleges=res.data
        for(let college of colleges){
            console.log(college)
            let collegeName=document.createElement('li')
            collegeName.innerText=college.name
            collegeList.appendChild(collegeName)
        }
    }
   catch(e){
    console.log(e)
   }
  
}