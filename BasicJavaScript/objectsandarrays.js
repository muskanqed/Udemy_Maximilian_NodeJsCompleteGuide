// Objects in JavaScript

const person = {
  name: "Max",
  age: 30,
  greet() {
    console.log("Hello, I am " + this.name);
  },
};

person.greet()

// Arrays in JavaScript

const hobbies = ['Sports','Cooking']

/*for loop 
for(let hobby of hobbies){
  console.log(hobby)
}*/

/*Map method
 console.log(hobbies.map(hobby => 'Hobby: '+hobby))*/

/*push method
hobbies.push('programming')
console.log(hobbies)*/

/*Spread Operator
const copiedArray = [...hobbies]
console.log(hobbies)*/

/*Rest Operator
const args = (...args) => {
  return args;
}
console.log(args(1,2,3,4,5))*/






