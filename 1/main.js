const numbers = (...args) => {
    const calculateSum = (num1, num2) => {
      return num1 + num2;
    };
    
    const calculateMultiplication = (...args) => {
      let total = 1;
      for (let i = 2; i < args.length; i++) { 
        total *= args[i];
      }
      return total;
    };
    
    const firstNum = args[0];
    const secondNum = args[1];
    
    return [calculateSum(firstNum, secondNum), calculateMultiplication(...args)];
  };
  
  console.log(numbers(1, 2, 3, 4, 5, 6));
  
