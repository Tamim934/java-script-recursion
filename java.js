//recurse
// function main(num){
//     if (num==0){
//         return 0;
//     }
// return num+  main(num - 1);
// }
// console.log(main(5));

// function main2(a){
//     if(a==0){
//         return 1;
//     }
//     return a *  main2(a-1);
// }
// console.log(main2(5));
//closure
// function main(a){
// let cnt =0;
// return function (b) {
//     return function (c){
//         return a+b+c;
//     }
// }
// }
// let main2=main(1);
// let main3=main2(2);
// console.log(main3(3));
// console.log(main3(4))
// console.log(main3(5))
// let a=main(1);
// let b=a(2);
// console.log(b(3));
// console.log(main3(4));
// console.log(b(5)); 

function factorial(num) {

    if (num === 0 || num === 1) {
      return 1;
    }
    else {
      return num * factorial(num - 1);
    }
  }
  console.log(factorial(5));
function tamim(a){
    if (a==0){
        return 1;
    }
    else{
        return a*tamim(a-1)
    }
}
console.log(tamim(10));