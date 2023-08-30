function fibs(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

function fibsRec(n) {
  if (n === 2) {
    return [0, 1];
  } else if (n <= 1) {
    return [0];
  } else {
    return fibsRec(n - 1).concat([
      fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2],
    ]);
  }
}
