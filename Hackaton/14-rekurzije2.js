function fib(x) {
    return x <= 1 ? x : fib(x - 1) + fib(x - 2);
  }
  
  var num = 7;
  
  if (num > 0) {
    let result = fib(num);
    document.getElementById("rekurzije2").innerHTML = "Fib od broja " + num + " je " + result;
  } 