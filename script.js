console.log("conn");

// Bubble Sort 

function BubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -i -1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1] , arr[j]]
            }
        }
        
    }
    return arr;
}
let array = [13312,511,55,6,863,13,89,61,14,75486,1,34,76,788,67,56,85,45,43,132,85,21,65,56,6,7,3]

console.log(BubbleSort(array));



