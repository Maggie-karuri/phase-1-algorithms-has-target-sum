function hasTargetSum(array, target) {
  // Iterate through each element
  for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;



/* 
Iterate through each element in the array.
For each current element, iterate through each element after it.
For each pair of elements (current element and the one after it), check if their sum equals the target.
If found, return true.
If no such pair exists after checking all pairs, return false.
*/

/*
  use a nested loop to compare each pair of elements in the array, checking if their sum equals the target.
  If two digits paired sum equals the target, it immediately return true.
   Iterate through the entire array and if no such pair is found, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log(hasTargetSum([-7, 10, 4, 8], 3));
  console.log("");

  console.log("Expecting: true");
  console.log(hasTargetSum([1, 2, 3, 4], 5));
  console.log("");

  console.log("Expecting: true");
  console.log(hasTargetSum([2, 2, 3, 3], 4));
  console.log("");

  console.log("Expecting: false");
  console.log(hasTargetSum([4], 4)); 

}
}
module.exports = hasTargetSum;