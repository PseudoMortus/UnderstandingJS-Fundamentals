// Commit 2
/* Adding our loop, making 1 be from 1-20 and have it increment repeatedly until it can't */
for (let i = 1; i <= 20; i++) {
/* Checking if the result is BOTH divisible by 3 AND 5 evenly */
  if (i % 3 === 0 && i % 5 === 0) {
/* What to post in this sitch */
    console.log("FizzBuzz");
/* Checking if the result is divisible by 3 */
  } else if (i % 3 === 0) {
/* What to post in this sitch */
    console.log("Fizz");
/* Checking if the result is divisible by 5 */
  } else if (i % 5 === 0) {
/* What to post in this sitch */
    console.log("Buzz");
/* Checking if it's not divisible by either 3 or 5 */
  } else {
/* What to post in this sitch */
    console.log(i);
  }
}