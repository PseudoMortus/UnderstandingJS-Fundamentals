// Commit 3
/* Change i to base_num to be clear what it is */
for (let base_num = 1; base_num <= 5; base_num++) {
  let row = "";
/* Change j to multiplied to be clear as well */
  for (let multiplied = 1; multiplied <= 5; multiplied++) {
    row += base_num * multiplied + "\t";
  }
  console.log(row);
}