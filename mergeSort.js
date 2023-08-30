function mergeSort(arr) {}

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
