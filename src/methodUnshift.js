numbers.unshift = function(...elements) {
  if (elements.length) {
    for (let i = elements.length - 1; i >= 0; i--) {
      this.splice(0, 0, elements[i]);
    }
  }

  return this.length;
};
