//Direct way of creating an object:
const student = {
    firstName : "Vikas Singh",
    admissionNo : "22scse1011220",
    course : "B.tech",
    printDetails:  function ()  {
        console.log("Name of student is:", this.firstName)
        console.log("Admisssion number  of student is:", this.admissionNo)
        console.log("Course of student is:", this.course)
    },
} 