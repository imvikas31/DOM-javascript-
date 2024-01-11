// console.log(window)
// console.log(window.document)

// console.dir(window.document)
// let para1 = document.getElementById("para1")
// console.dir(para1)
// console.log(para1)

//************* --->> DOM Manipulation <<--- ************


//************* --->> getAttribute(atr) <<--- ************
// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p")
// console.log(para)
// console.log(para.getAttribute("class"));

//************* --->> setAttribute(atr) <<--- ************
// let div = document.querySelector("div")
// console.log(div)

// let id = div.setAttribute("id","new-box")
// console.log(id)

// console.log(div.getAttribute("id"))


//************* --->> Style <<--- ************
// let div =  document.querySelector("div")
// console.log(div)
// div.style.backgroundColor = "black"
// div.style.color = "white"
// div.style.fontSize = "30px"
// div.style.visibility = "hidden"


//************* --->> Insert Elements <<--- ************
// to add new Element first we have to create a new  that element
// to create element --->> let new-element = documetn.createelement("new-element")

//creation:
// let btn = document.createElement("button")
// btn.innerText = "Click me to know more !!"
// console.dir(btn)

//addition to DOM:
// using append: adds element at the end of node (inside)
// let div = document.querySelector("div")
// div.append(btn)
// let heading = document.createElement("h3")
// heading.innerText = "This is a box"
// div.prepend(heading)



// using prepend: adds element at the start of node (inside)
// let div = document.querySelector("div")
// div.prepend(btn)

// using before: adds element before the node (outside)
// let div = document.querySelector("div")
// div.before(btn)

// using before: adds element after the node (outside)

//************* --->> Delete Elements <<--- ************
// to delete : use node.remove()
// let bttn = document.querySelector("button")
// bttn.remove()



// Practice Questions:
// Quest:1:Create a new buttton element .Give it a text "click me!!" , backgroundcolor as red, text color as white.
// insert the button as the first tag inside body tag

//creating button -->>
// let btn1 = document.createElement("button");
// btn1.innerText = "click me !!"
// btn1.style.backgroundColor = "red"
// btn1.style.color = "white"
// btn1.style.width = "500px"
// btn1.style.height = "30px"
// btn1.style.border = "1px"
// btn1.style.borderRadius = "100px"
// btn1.style.marginLeft = "200px"
// console.dir(btn1)
// console.log(btn1)
// console.log(btn1.innerText)

// //adding button -->>
// let body = document.querySelector("body")
// body.prepend(btn1)