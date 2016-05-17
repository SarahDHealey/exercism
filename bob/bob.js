//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//
var Bob = function() {};

Bob.prototype.hey = function(input) {
//
if (input.trim().length === 0) {
  return "Fine. Be that way!";
}

if (/[a-z]/i.test(input) && input == input.toUpperCase()) {
return 'Whoa, chill out!';
}
if (input.slice(-1) == "?") {
  return 'Sure.';
}
  return 'Whatever.';
};

//
// return "Whoa, chill out!";
// } else {
// return "Whatever.";
// }
// //

module.exports = Bob;
