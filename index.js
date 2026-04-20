let formid=document.getElementById("formid")
const allTasks=[]


const validationform=(event) =>
{
     event.preventDefault()
    //difference between foreach and map
    
    //     display.innerHTML= allTasks.forEach((task)=>
    //     {
    //       `<li> ${task} <button>delete</button> </li>`
    //     });
     
     let display=document.getElementById("display")
     let userinputt=event.target.userInput
    

    
     allTasks.push(userinputt.value)
     display.innerHTML=""
     display.innerHTML+=
        allTasks.map((task) =>
            `<li> ${task} <button>delete</button> </li>`
        );
     userinputt.value=""


     
}

formid.addEventListener("submit",validationform)