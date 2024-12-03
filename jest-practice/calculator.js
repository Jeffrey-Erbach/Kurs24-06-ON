// calculator.js

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Division durch Null ist nicht erlaubt.");
      }
      return a / b;
    }
  }
  
  module.exports = Calculator;
  