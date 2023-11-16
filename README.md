
# recursion 
is a function that call it slef untill it stops

Modern programming languages like JavaScript have had alternatives to recursion for a while. Recursion goes on an infinite loop if it doesn’t stop. But with an if or else condition on it, if it doesn’t stop, it will go on infinitely





## how to use

```javascript!
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
```
# closure
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function

mean going in a fuction like the exapmle bellow

function main{
fuction{
   functiion{
           fuction{
           function   {
           }
           }
           }
```javascript
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
}
console.log(tamim(10));
```
# that all i learn today
![](https://th.bing.com/th/id/OIP.2AQkrL6YTnNGked92a8_-wHaEX?w=248&h=180&c=7&r=0&o=5&pid=1.7)


closure mean bastan and recure means going in a loop for invity

untill it retunrs

![](https://th.bing.com/th/id/R.3073469c33e5e89aee02beb667fcfacf?rik=VNFFqRcowjfg3A&pid=ImgRaw&r=0)

there are 2 diffrences in recure and closure byr

theree is np major diffrent

recure work with fuction

and closure works with fuctions two 


