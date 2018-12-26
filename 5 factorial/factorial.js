// i <= num
function factorializeNumber(num) {
  let product = 1;

  for (let i = 1; i <= num; i++) {      //iterate from 1 to num
    console.log(i);
    console.log(product);
    product *= i;     //multiply by each iteration, including 1*1
  }

  return product;
}

console.log(factorializeNumber(5));
console.log(factorializeNumber(4));
console.log(factorializeNumber(1));
console.log(factorializeNumber(0));
console.log(factorializeNumber(10));

//--------------------------------------------------
// i + 1
function factorializeNumber2(num) {
  let product = 1;

  for (let i = 1; i < num; i++) { //iterate from 1 to num
    console.log(i);
    console.log(product);
    product *= (i + 1);     //multiply by each iteration, skip 1*1
  }

  return product;
}

console.log(factorializeNumber2(5));
console.log(factorializeNumber2(4));
console.log(factorializeNumber2(1));
console.log(factorializeNumber2(0));
console.log(factorializeNumber2(10));

//eliminate unnecessary iteration w/ let i=2
