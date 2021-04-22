numbers.shift = function() {
  const firstEl = this[0];

  this.splice(0, 1);

  return firstEl;
};
