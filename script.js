function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a, b) => a - b);

  let totalCost = 0;
  
  while (arr.length > 1) {
    // Pick two smallest ropes
    let first = arr.shift(); // smallest
    let second = arr.shift(); // next smallest

    let cost = first + second;
    totalCost += cost;

    // Insert back the combined rope (maintain sorted order)
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (cost < arr[i]) {
        arr.splice(i, 0, cost);
        console.log(arr);
        inserted = true;
        break;
      }
    }
    if (!inserted) arr.push(cost);
  }

  return totalCost;
}



module.exports=mincost;
