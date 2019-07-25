/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - 
In the global scope, the value of "this" will be the window/console object, in otherwords it will be the JavaScript program itself.

* 2. Implicit Binding - 
If you are using a method on an object, you can identify values that you want to use within that method using the 'this' keyword.  This implies that you are using values from within that same object.  You then may call this using 
--  obj.method(parameter here)  -- 
there this will be referring to obj.

* 3. Explicit Binding -
This refers to when you change what an object points to.  You can do this by using .call or .apply.  You overwrite what the .this keyword points to when you use these, and the .this keyword will be pointed to whatever you've explicitly pointed to.  

* 4. New Binding - 
This has everything to do with constructor functions.  You add 'this.' before all of the key elements in the constructor function.  Then they are paired with a parameter value.  This will then refer to whatever new object is created from that constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function doATrick(trick){   // HERE IS THE ANSWER.
//     console.log(this);
// return trick;
// }

// Principle 2

// code example for Implicit Binding

const person = {
name: "Roger",
state: "Utah",
age: "25",
giveInfo: function(){
    return `Hi, my name is ${this.name}, I live in ${this.state}, and I'm ${this.age} years old.`
}
};

console.log(person.giveInfo());

// Principle 3

// code example for New Binding

function Animal(att){
    this.att= att;
    this.sound = 'Raar!';
    this.makeNoise = function (){
        console.log(`${this.att} says ${this.sound}`);
    }
}

const bear = new Animal('bear')
const lion = new Animal('lion')

bear.makeNoise();
lion.makeNoise();

// Principle 4

// code example for Explicit Binding

bear.makeNoise.call(lion);
lion.makeNoise.call(bear);
