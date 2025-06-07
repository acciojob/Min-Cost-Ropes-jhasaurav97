function mincost(arr)
{ 
//write your code here
	arr.sort((a, b) => a - b);
	let totalCost = 0;
	while(arr.length > 1){
		let first = arr.shit();
		let second = arr.shit();
		let cost = first + second;
		totalCost += cost;

		let inserted = false;
		for(let i = 0; i < arr.length; i++){
			if(cost < arr[i]){
				arr.splice(i, 0, cost);
				inserted = true;
				break;
			}
		}
			if(!inserted) arr.push(cost);
	}
// return the min cost
		return totalCost;
  
}



module.exports=mincost;
