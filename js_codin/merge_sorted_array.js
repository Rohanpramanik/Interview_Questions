
const arr1 = [0,3,4,31];
const arr2 = [4,6,30];

function mergeSorted (arr1, arr2) {
    let result = [];
    let i =0;
    let j =0;

    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j<arr1.length) {
        result.push(arr1[j]);
        j++
    }

    return result;
}
console.log(mergeSorted(arr1, arr2));