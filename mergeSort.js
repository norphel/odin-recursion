function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const leftHalf = arr.slice(0, parseInt(arr.length / 2));
    const rightHalf = arr.slice(parseInt(arr.length / 2), arr.length);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
}

function merge(arr1, arr2) {
  let sortedArray = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] <= arr2[j]) {
      sortedArray[k++] = arr1[i++];
    } else {
      sortedArray[k++] = arr2[j++];
    }
  }
  for (i; i <= arr1.length - 1; i++) {
    sortedArray[k++] = arr1[i];
  }
  for (j; j <= arr2.length - 1; j++) {
    sortedArray[k++] = arr2[j];
  }
  return sortedArray;
}

console.log(mergeSort([20, 4, 1, 8, 3, 2, 9, 12, 10, 0, 4])); //[0, 1, 2, 3, 4, 4, 8, 9, 10, 12, 20]
