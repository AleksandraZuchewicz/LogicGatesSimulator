class Wire {
  constructor(value) {
    this.setValue(value);
  }
  setValue(newValue) {
    if (typeof newValue === "boolean") {
      this.value = newValue;
    } else {
      throw new Error("Incorrect value");
    }
  }
  getValue() {
    return this.value;
  }
}

class AbstractMachine {
  setInput() {}
  getOutput() {}
}

class Not extends AbstractMachine {
  constructor(input) {
    if (input instanceof Wire) {
      super();
      this.input = input;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInput(newInput) {
    if (newInput instanceof Wire) {
      this.input = newInput;
    } else {
      throw new Error("Invalid arument");
    }
  }
  getOutput() {
    return !this.input.getValue();
  }
}

class And extends AbstractMachine {
  constructor(inputA, inputB) {
    if (inputA instanceof Wire && inputB instanceof Wire) {
      super();
      this.inputA = inputA;
      this.inputB = inputB;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInputA(newInputA) {
    if (newInputA instanceof Wire) {
      this.inputA = newInputA;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInputA(newInputB) {
    if (newInputB instanceof Wire) {
      this.inputB = newInputB;
    } else {
      throw new Error("Invalid arument");
    }
  }
  getOutput() {
    return this.inputA.getValue() && this.inputB.getValue();
  }
}

class Xor extends AbstractMachine {
  constructor(inputA, inputB) {
    if (inputA instanceof Wire && inputB instanceof Wire) {
      super();
      this.inputA = inputA;
      this.inputB = inputB;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInputA(newInputA) {
    if (newInputA instanceof Wire) {
      this.inputA = newInputA;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInputA(newInputB) {
    if (newInputB instanceof Wire) {
      this.inputB = newInputB;
    } else {
      throw new Error("Invalid arument");
    }
  }
  getOutput() {
    if (this.inputA.getValue() && this.inputB.getValue()) {
      return false;
    } else {
      return this.inputA.getValue() || this.inputB.getValue();
    }
  }
}

class Or extends AbstractMachine {
  constructor(inputA, inputB) {
    if (inputA instanceof Wire && inputB instanceof Wire) {
      super();
      this.inputA = inputA;
      this.inputB = inputB;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInputA(newInputA) {
    if (newInputA instanceof Wire) {
      this.inputA = newInputA;
    } else {
      throw new Error("Invalid arument");
    }
  }
  setInputA(newInputB) {
    if (newInputB instanceof Wire) {
      this.inputB = newInputB;
    } else {
      throw new Error("Invalid arument");
    }
  }
  getOutput() {
    return this.inputA.getValue() || this.inputB.getValue();
  }
}

let newWire = new Wire(true);
let newNot = new Not(newWire);
console.log(newNot.getOutput());
