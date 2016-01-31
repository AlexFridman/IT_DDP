function intCmp(a, b) {
	if (a < b){
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
}

function quicksort (arr, cmp) {
	if (arr.length <= 1) {
		return arr
	}
	cmp = cmp || intCmp
	var lesser = arr.filter(x => cmp(x, arr[0]) == -1);
	var equal = arr.filter(x => cmp(x, arr[0]) == 0);
	var greather = arr.filter(x => cmp(x, arr[0]) == 1);
	
	return quicksort(lesser).concat(equal.concat(quicksort(greather)));
}

alert(quicksort([8, 4, 2, 0, 9, 7, 6, 3, 5, 1]));