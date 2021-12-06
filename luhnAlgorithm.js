//Checks credit card

function cardValidation(cardNumber) {
  const arrayNotReverse = Array.from(cardNumber);
  const array = [];
  for (let i = arrayNotReverse.length - 1; i >= 0; i--) {
    array.push(arrayNotReverse[i]);
  }
  const cardLength = array.length;
  let double = [];
  let sum = [];
  let completeDigits = [];
  let count = 0;

  for (let i = 0 + 1; i < cardLength; i = i + 2) {
    double.push(array[i] * 2);
  }

  for (let i = 0; i < double.length; i++) {
    if (double[i].toString().length === 2) {
      const twoDigitString = double[i].toString();
      const arrayTwoDigit = Array.from(twoDigitString);
      const sumTwoDigit = arrayTwoDigit.reduce((acc, val) => {
        return parseFloat(acc) + parseFloat(val);
      }, 0);
      sum.push(sumTwoDigit);
    } else {
      sum.push(double[i]);
    }
  }

  for (let i = 0; i < cardLength; i = i + 2) {
    completeDigits.push(parseFloat(array[i]));
    if (count < sum.length) {
      completeDigits.push(sum[count]);
      count++;
    }
  }

  let totalSum = totalDigit(completeDigits);

  if (totalSum % 10 === 0) {
    console.log("Valid");
  } else {
    console.log("Not Valid");
  }
}

function totalDigit(completeDigits) {
  const sum = completeDigits.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return sum;
}

cardValidation("4417123456789113");
