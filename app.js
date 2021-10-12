//Function Declarations

function greet(fristName = 'Sharmin' , lastName = 'Akter'){
// if(typeof fristName === 'undefined'){fristName = 'Sharmin'}
// if(typeof lasttName === 'undefined'){lastName = 'Akter'}
  // console.log('Hello');
  return 'Hello ' + fristName + ' ' + lastName;
}

// console.log(greet());

// Function Expresions
const square = function(x = 3){

 return x*x;

};

// console.log(square());

// Immidiatly Invokable Function Expressions - IIFEs
// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello ' + name);
// })('Sharmin');

//Property Methods

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
} 
todo.add();
todo.edit(23);

todo.delete = function(){
  console.log('Delete todo..');
}
todo.delete();