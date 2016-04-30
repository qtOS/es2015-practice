var a = 1;

function(){
  var b = 2;
}
console.log(b);
//wouldn't work because of scope
//code blocks : let
if(true){
  let b = 2;
  //var allows access outside the block
  var c = 3;
}
// let is the new var
for(20){
  let b = 2;
}

//const for everything,
//use let for something that will be changed in the future
//be aware of the fact it will change

const foo = 1.1;

if(true){
  const bar = 2
  //or
  const bar = { a: 1 };
  //bar === 2
  var bar = 3;
}
console.log(bar); //3


//CLASSESSSSSSS

function Parent(){
  //constructor
}

Parent.prototype.foo = function(){}
Parent.prototype.bar = function(){}


//new way

class Parent{
  age = 60
  constructor(){

  }

  static foo(){

  }

  bar(){

  }
}
var Dad = new Parent();
Dad.age//60

class Child extends Parent {
  constructor(){
    super()
  }

  baz() {

  }
}

var kid = new Child();
child.bar();



//generator functions



//arrow functions

var foo = function(a,b){
  return a + b;
}

var foo = (a,b) => {
  return a + b;
}


do.something(function(a,b){
  return a +b;
})

do.something((a,b) => { return a + b; });
//the cleaner look
do.something((a,b) =>  a + b );
//so dandy
do.something( a =>  a++ );
//ez mapping
[0,1,2].map(val => val++);


//lexical context binding
var module = {
  age: 21,
  foo: function(){
    console.log(this.age);
  }
}
module.foo();

//~~~~~~~~~~~~~~~~~~
//old way
var module = {
  age: 21,
  foo: function(){
    setTimeout(function(){
      console.log(this.age);
    }.bind(this), 1000);
  }
}
module.foo();
//~~~~~~~~~~~~~~~~~
//new way

var module = {
  age: 21,
  foo: function(){
    setTimeout(() => {
      console.log(this.age);
    }, 1000);
  }
}
module.foo();



//module systems
//old
var myModule = require('modulez');

module.exports.foo = function(){

}
module.exports.bar = function(){

}
//old
var myModule = require('modulez');
var foo = myModule.foo;
//new
//top of file ONLY (mostly or else)
import myModule from "modulez";

import { foo, bar } from "modulez";

import { each, omit } from "lodash";


//old export
module.exports = function() {

}

export default function(){

}

export function foo(){

}

export function bar(){

}
import { foo as foolish, bar } from "modulez";
import myModule from "modulez"
export var baz = 3

//generator function fun

async function(){
  var friend = $.get("http://somesite.com/friends");
  console.log(friends);
}
