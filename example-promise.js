// function getTempCallback (location, callback) {
//   callback(undefined, 4);
//   callback('City not found');
// }
//
//
// getTempCallback('Geneva', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(5);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Geneva').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise unsuccess', err);
// }
// );

// Challenge Area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('a and b need to be numbers');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success: ', sum);
}, function (err) {
  console.log('error: ', err);
});

addPromise('Will', 7).then(function (sum) {
  console.log('This should not show up');
}, function (err) {
  console.log('This should appear: ', err);
});
