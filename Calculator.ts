class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | never {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  calculate(operation: string, num1: any, num2: any): any {
    switch (operation) {
      case "add":
        return this.add(num1, num2);
      case "subtract":
        return this.subtract(num1, num2);
      case "multiply":
        return this.multiply(num1, num2);
      case "divide":
        return this.divide(num1, num2);
      default:
        throw new Error("Invalid operation");
    }
  }
}

// Example usage
const calc = new Calculator();
console.log(calc.calculate("add", 10, 5)); // 15
console.log(calc.calculate("subtract", 10, 5)); // 5
console.log(calc.calculate("multiply", 10, 5)); // 50
console.log(calc.calculate("divide", 10, 2)); // 5

