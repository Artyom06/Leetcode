//Write a function createCounter. It should accept an initial integer init.It should return an object with three functions.

const counter = (init) => {
    const number = init
  const createCounter = {
    increment: () => {
      init += 1 
      return init
    },
    reset: () => {
      return number
    },
    decrement: () => {
      init -= 1
      return init 
    },
  };
  return createCounter;
};

const boz = counter(5);

console.log(boz.increment());
console.log(boz.increment());
console.log(boz.reset())
