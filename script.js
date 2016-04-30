//destructuring
var foo = {
  bar: 1,
  baz: 2
}

var { bar, baz } = foo;



var tenses = ["me", "you", "he"];
//~~~~~~|||me~~~~~~|||you
var [ firstPerson, secondPerson ] = tenses;


Promise.all([promise1, promise2]).then(function(results){
  var [ results1 ] = results;
});
//~~~~
//or
//~~~~
Promise.all([promise1, promise2]).then(function([ results1, results2 ]){

});

var foo = 2;

var foOjb = {
  bar: 1,
  foo
};

var name = "Aaron"
var age = 21;

some.method({ name, age});
{
  name: name,
  age: age
}


var obj = {
  ["name: "+ name]:"another name"
}

// function calcBmi(weight, height, max, callback){
//   var bmi = weight / Math.pow(height, 2);
//   if(bmi > max){
//     console.log('you\'re overweight');
//   }
//   if(callback){
//     callback(bmi);
//   };
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function calcBmi(opts){
//   var bmi = opts.weight / Math.pow(opts.height, 2);
//   if(bmi > max){
//     console.log('you\'re overweight');
//   }
//   if(opts.callback){
//     callback(bmi);
//   };
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function calcBmi({ weight: w, height: h, max = 25, callback }){
  var bmi = w / Math.pow(h, 2);
  if(bmi > max){
    console.log('you\'re overweight');
  }
  if(callback){
    callback(bmi);
  };
}

calcBmi({weight, height, callback: function(){} });

// calcBmi({ weight, height, 25 });

// calcBmi(weight, height, 25);
//
// calcBmi(weight, height, function(){});
//
// calcBmi(weight, height);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//TEMPLATE STRINGS


var name = "Aaron";
var thing = "party";
var greeting = "HI, I LIKE TO "+ thing +" and my name is "+name+".";

var greetProper = `Greetings, my name is ${name} and we should ${thing}`
