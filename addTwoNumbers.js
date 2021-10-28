var addTwoNumbers = function(l1, l2) {
  let num1 = parseInt(l1.sort().join(''))
  let num2 = parseInt(l1.sort().join(''))
  let newStr =(num1+num2).toString().split('')
  const result = []
  newStr.forEach((n)=> result.push(parseInt(n)))
  return result
};

console.log(addTwoNumbers([4,3,6],[5,7,2]));