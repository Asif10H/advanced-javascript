const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// const result = numbers.map(function square(element, index, array){
//      return element * element;
//     //console.log(element, index, array);
// })
// console.log(result);

// const result2 = numbers.map(x => x * x);
// console.log(result2);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const evenNumbers = numbers.filter(x => x % 2 == 0);
console.log(evenNumbers);

const oddNumbers = numbers.find(x => x % 2 != 0);
console.log(oddNumbers);