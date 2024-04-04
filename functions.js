// given an array of strings,use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function people() {
 newArr=[];
 arr=["Ann","Latoo","Amina","amondi","Stacy"];
  arr.forEach(i=>{
    if(i[0]=="a"||i[0]=="S"){
        let newWord=i.split("").sort().reverse().join('');
        newArr.push(newWord);
       
    }

     else{
        let newWord=i.split("").sort().join('');
  newArr.push(newWord);
    }
 })  
console.log(newArr)
}




// Using Js functions and array of numbers, return positive if an element within the array is positive ,negative if an element is negative zero


 function grading() {
    const numbers=[4,7,-3,6,0,-12,9,0]
    numbers.forEach(num=>{
        if(num>0){
            console.log("positive")
        }
        else if(num<0){
            console.log("negative")
        }
        else{
          console.log("zero"); }
        })
    

return numbers
    }
    grading()

// Given an array of objects,where each object represents an employee with an id,name,and salary property ,write a function that returns a new array of employee objects sorted by their salary in ascending order.
function isObject(){
let arrOfEmployee=[
    {name:"Wamboi",id:"21424200",salary:70000},
    {name:"Latifa",id:"21124200",salary:60000},
    {name:"Mona",id:"21455200",salary:50000}
]

console.log(arrOfEmployee.sort((c,d)=>c.salary-d.salary))
}
isObject();


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

const number=[20,34,54,29,30,33]
 function multiplication(){
     number.forEach(num=>{
 console.log(num*2);
     })
}
  multiplication()




// Write a function that accepts an array of numbers and uses the first four items multiplied by 8 and the last two added by 5 .console the array wuth the new values