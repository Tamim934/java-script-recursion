// // number=2;
// // console.log(typeof(number));
// // let number1=1;
// // let number2="1";
// // console.log(number1 == number2);
// // console.log(number1 === number2)
// // if( 2 == 2 && 2=="2") {
// //     console.log("hello");
// // }
// // if( 2 == 3 || 2=="2") {
// //     console.log("yws");
// // }
// // console.log(!true);
// // console.log(2 + "2");
// // console.log(2 * "2");
// // console.log(2 - "2");
// // console.log(2 / "2");
// // let res = 2 + "5" + 2;
// // console.log(res);
// // console.log(typeof(res));
// // let res1 = 2 - "5" - 2;
// // console.log(res1);
// // console.log(typeof(res1));
// // console.log(res1);
// // let res2 = 2 - "5" * 2;
// // console.log(typeof(res2));
// // console.log(res2);
// // let res3 = 2-"2a";
// // console.log(res3)
// // let res4 = 2+"2a";
// // console.log(res4);

// // let iff = 2>3?"ture2":"true1";
// // console.log(iff); 
// // let elseif = 1>3?"1":2<1?"2":3<1?"3":"else";
// // console.log(elseif);
// // var elseif2 = 1==2?"1=2":2+2==4?"yes":"no"
// // console.log(elseif2);
// // let sum=9;
// // var sum1= sum >10?"kalan asta":"nista kalan";
// // console.log(sum1);
// // for(let i=1; i< 10; i++){
// //     console.log(i);
// // }
// // // decloration function 

// // function tamim(a,b){
// // return a;
// // }
// // console.log(tamim())
// // //EXPRESION FUNCTUIN
// // let x=function main(){
// //     return "x";
// // }
// // console.log(x())
// // //arrow
// // let arrow=(a,b)=>{
// //     return a+b;
// // }
// // (
// //     function(a,b){
// //         console.log(a+b);
// //     }
// // )(2,3)
// function q1(a,b){
//     return a+b;
// }
// console.log(q1(2,3));
// function pos(a){
//     if (a>0){
//         return"positive";
//     }
//     if(a<0){
//         return"negative"
//     }
//     if(a==0){
// return"zero";
//     }
   
// } 
// console.log(pos(5));
// function multi(number) {

//     for (let i = 1; i <= 10; i++) {
//       let product = number * i;
   
//       console.log(number + " x " + i + " = " + product);
//     }
//   }
// multi(5);
// function end9(a){
//     b=a%10;
//     if(b==9){
//         return "yes";
//     }
//     else {
//         return "no";
//     }
// }

// function getCentury(year) {
//     let century =(year / 100)

//     return Math.ceil(century);
//   }

//   console.log(getCentury(1705));
//   console.log(getCentury(1900));
//   console.log(getCentury(2000));
  // function area(radius) {
  //   return 3.14 * radius * radius;
  // }
  // console.log("THr are OF a circle with radius is " )
  // console.log(area(5))
//   function sum3diget(dig){
//     a1=dig%10;
//     a2=dig%100/10;
//     a3=dig/100%10;
//     return a1+a2+a3;
//   }
//   console.log(sum3diget(123));
//   function less100(a,b){
// c=a+b;
// if(c>100){
// return "false"
// }
// if(c<100){
//     return "true"
// }
//   }
//   console.log(less100(22,15));
  // function longest(hours, minutes, seconds) {
  //   let hoursInSeconds = hours * 3600;
  //   let minutesInSeconds = minutes * 60;
  //   let max = Math.max(hoursInSeconds, minutesInSeconds, seconds);
  //   if (max == hoursInSeconds) {
  //     return hours;
  //   } else if (max == minutesInSeconds) {
  //     return minutes;
  //   } else {
  //     return seconds;
  //   }
  // }
  // console.log(longest(1,59,3998));
//   let a=6;
//   let b=5;
// function ab(a,b){
// if (a>b){
//   return b,a;
// }
// if(b>a){
// return a,b;
// }
// }
// console.log(ab(9,8))
let a=5;
let b=6;
 a=b;
 b=a;
 