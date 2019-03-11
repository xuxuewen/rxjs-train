import {Observable} from 'rxjs';


// console.log(Observable)

let observable = new Observable(subscribe=>{

  document.getElementById('btn').addEventListener('click',()=>{
    subscribe.next('12321')
  })

  document.getElementById('comp').addEventListener('click',()=>{
    subscribe.complete();
  })
})



observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
})



// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// var gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);