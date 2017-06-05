// function getTempCallBack(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack ('Philadelphia', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City Not Found');
//       }, 1000);
//     });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp)
// }, function(err){
//   console.log('err', err)
// });
// if (typeof someNum === 'number')
//challenge area

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'string' || typeof b === 'string'){
      reject('please enter nums only');
    } else {
      resolve(a + b);
    }
  });
}

addPromise(2, 6).then( function(sum) {
  console.log('success ', sum)
}, function(err){
  console.log('error ', err);
});
