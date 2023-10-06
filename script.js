console.log("conn");

// Bubble Sort 

function BubbleSort(arr){  //  initiate a funtion name bubbleSort which takes a variable  name arr 
    for (let i = 0; i < arr.length; i++) { // start a loop which go to the arr length
        for(let j = 0; j < arr.length -i -1; j++) {// again another loop but now it should subtract i and 1 too
            if (arr[j] > arr[j + 1]) {// if arr j(means that j is the index of arr) is greater than its adjacent index
                [arr[j], arr[j + 1]] = [arr[j + 1] , arr[j]]// swap
            }
        }
        
    }
    return arr;// return arr
}
let array = [13312,511,55,6,863,13,89,61,14,75486,1,34,76,788,67,56,85,45,43,132,85,21,65,56,6,7,3]

console.log(BubbleSort(array));



