// Commit 3
/* Use Number instead of I as we did Kata 1 */
for (let number = 1; number <= 20; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
/* Screw FizzBuzz, what is this, Bopit? We need to know what's going on, so let's do that. */
    console.log("The number " + number + " is divisible by both 3 and 5.");
  } else if (number % 3 === 0) {
/* And again... */
    console.log("The number " + number + " is divisible by 3, but not 5.");
  } else if (number % 5 === 0) {
/* And again... */
    console.log("The number " + number + " is divisible by 5, but not 3.");
  } else {
/* And again. */
    console.log("The number " + number + " is not divisible by eiteher 3 nor 5");
  }
}