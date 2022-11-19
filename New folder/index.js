function arrayPlusArray(arr1, arr2) {
    let firstSum = arr1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
    let secondSum = arr2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
    return firstSum + secondSum
  }