numbers.reverse = function() {
  const len = this.length;

  for (let i = this.length - 1; i >= 0; i--) {
    this[this.length] = this[i];
  }

  this.splice(0, len);

  return this;
};
