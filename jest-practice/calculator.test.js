// calculator.test.js

const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  // Wird vor jedem Test ausgeführt
  beforeEach(() => {
    calculator = new Calculator();
  });

  // Tests für die Methode add
  describe('add', () => {
    test('soll zwei positive Zahlen addieren', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('soll eine positive und eine negative Zahl addieren', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });
  });

  // Tests für die Methode subtract
  describe('subtract', () => {
    test('soll zwei Zahlen subtrahieren', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('soll ein negatives Ergebnis liefern', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });

  // Tests für die Methode divide
  describe('divide', () => {
    test('soll eine normale Division durchführen', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('soll mit negativen Zahlen dividieren', () => {
      expect(calculator.divide(-6, 3)).toBe(-2);
      expect(calculator.divide(6, -3)).toBe(-2);
      expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('soll eine Fehlermeldung bei Division durch Null werfen', () => {
      expect(() => calculator.divide(6, 0)).toThrow("Division durch Null ist nicht erlaubt.");
    });
  });
});
