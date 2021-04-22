numbers.pop = function() {
  if (!this.length) {
    return undefined;
  }

  const lastEl = this[this.length - 1];

  this.length = this.length - 1;

  return lastEl;
};

