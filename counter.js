const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

numbers.forEach((number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Hawaii");
  } else if (number % 3 === 0) {
    console.log("Pizza");
  } else if(number % 5 === 0) {
    console.log("Pineapple");
  } else {
    console.log(number);
  }
})
