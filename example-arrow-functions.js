//var names = ['Bob', 'Paul', 'Max', 'Léo', 'Vanessa'];
//
// names.forEach(function (name) {
//   console.log('ForEach: ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Wally'));

// var person = {
//   name: 'Terence',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}
// console.log(add(1, 3));
// console.log(add(9, 0));


// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(3, 4));


// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(9, -6));
