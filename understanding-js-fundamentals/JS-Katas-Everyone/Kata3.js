// Commit 2
/* letting i start at 1, be no greater than 5, and increment each loop */
for (let i = 1; i <= 5; i++) {
/* Create an empty row */
  let row = "";
/* Create a loop that will effectively multiply i to make equal j */
  for (let j = 1; j <= 5; j++) {
/* Create a row with  each itteration of i's multiples into the row */
    row += i * j + "\t";
  }
/* Print that row */
  console.log(row);
}