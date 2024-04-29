function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

const double = (arr) => arr.map((val) => val * 2);

const squareAndFindEvens = (numbers) => {
  const squares = numbers.map((num) => num ** 2);
  const evens = squares.filter((square) => square % 2 === 0);
  return evens;
};
