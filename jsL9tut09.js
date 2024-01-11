// let id  = document.getElementById("btn")
// console.dir(id)
// console.log(id)
// id.addEventListener("click", ()=>{
//     // alert("Your laptop will blast in 2 minutes")
//     document.body.style.backgroundColor= "black"
//     document.body.style.color= "white"
//     // document.getElementById("para1").innerHTML  = "<b><i>THIS IS BOX1</i></b>"
//     // document.getElementById("para1").clientWidth = "500px"
//     // document.getElementById("para1").clientHeight = "200px"
//     // document.getElementById("para1").border = "2px solid black"

//      let para =  document.getElementById("para1")
//      para.style.backgroundColor = "red"
//      para.style.color = "white"
//      para.style.width = "200px"
//      para.style.height = "100px"
// })

// Lets Practice:
//Ques:01: Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again.
let id = document.getElementById("btn");
let para = document.getElementById("para1");
let mode = true;
id.addEventListener("click",() =>{
    
    document.body.style.backgroundColor = "red"
    if (mode == true) {
        console.log(mode)
        document.body.style.backgroundColor = "black"
        document.getElementById("para1").style.color = "white"
        mode = false;
    }
    else{
        console.log(mode)
        document.body.style.backgroundColor = "white"
        document.getElementById("para1").style.color = "black"

        mode = true;

    }

})