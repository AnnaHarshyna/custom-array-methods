numbers.push = function(...number) {
  if (number === undefined) {
    return this[this.length - 1];
  }

  for (let i = 0; i < number.length; i++) {
    this[this.length] = number[i];
  }

  return this.length;
};

