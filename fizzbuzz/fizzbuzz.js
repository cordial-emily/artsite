/*  // FizzBuzz Volume 2
// Print all numbers from 1 to 100 with three exceptions:
// 1. If the number is divisible by 3, print fizz
// 2. If the number is divisible by 5, print buzz
// 3. If the number is divisible by 3 AND 5, pring FizzBuzz */


function everythingFunction() {
// FizzBuzz using switch cases
  for(var i=1; i <= 100; i++) {
    var el = document.getElementById('printfizzbuzz');
    var elChild = document.createElement('li');
    switch (i, true) {
      case ((i % 5 === 0) && (i % 3 === 0)):
        elChild.innerHTML = "FizzBuzz";
        break;
      case (i % 5 === 0):
        elChild.innerHTML = "buzz";
        break;
      case (i % 3 === 0):
        elChild.innerHTML = "fizz";
        break;
      default:
        elChild.innerHTML = i;
    }
    el.appendChild(elChild);
  }
// Loop through an array to greet list of friends
  var friends = ["Emily", "Hannah", "Erin", "Lauren", "Fei"];
  function greetFriends() {
    for(var i = 0; i < friends.length; i++){
      var el = document.getElementById('printfriends');
      var elChild = document.createElement('li');
      console.log("Oh hi " + friends[i]);
      elChild.innerHTML = "Oh hi " + friends[i];
      el.appendChild(elChild);
    }
  }
  greetFriends();
}
