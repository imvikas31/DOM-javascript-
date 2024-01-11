//-->> DOM is used to perform Dynamic changes <<--
// alert("Are your okk to use this webpage!!");

// to print document object from window
// console.log(window.document)
// console.dir(window.document)

//to print body, head etc tags from DOM:
// console.log(document.body)
// console.log(document.head)
// console.log(document.body.childNodes[1])
// console.log(document.body.childNodes[3])


// Carrying out Dynamic changes:
// document.body.style.backgroundColor = "Green"
// document.body.childNodes[1].innerText = "Vikas Singh"


// DOM Manipulation:
//in this we learn how to target a praticular element to manipulate them. All this is done in following ways.

//(1) By Selecting with ID's -->> document.getElementById("Id-name")
// let para1 = document.getElementById("para1")
// console.dir(para1)
// console.log(para1)

//(2) By Selecting with classes -->> document.getElementsClassName("Id-name")
// let class1 = document.getElementsByClassName("class1")
// console.dir(class1)
// console.log(class1)

//(3) By Selecting with tags -->> document.getElementsClassName("Id-name")
// let heading1 = document.getElementsByTagName("h1")
// console.dir(heading1)
// console.log(heading1)

//(4) By Selecting with Query selector : returns first element
//-->> document.getElements("Id-name")
// let para_elements = document.querySelector("p")
// console.dir(para_elements)

// let h1_elements = document.querySelector("h1")
// console.dir(h1_elements)

//(5) By Selecting with QueryselectorAll : returns a NodeList
//-->> document.getElements("Id-name")
// let paraelements = document.querySelectorAll("p")
// console.dir(paraelements)
// let classelements = document.querySelectorAll(".class1")
// console.dir(classelements)



let div = document.querySelector("div")
console.dir(div)
div.innerHTML
