numbers.indexOf = function(searchElement, fromIndex = 0) {
  let searchFrom = Number(fromIndex);

  if (!Number.isFinite(searchFrom)) {
    searchFrom = 0;
  }

  if (searchFrom < 0) {
    if (Math.abs(searchFrom) >= this.length) {
      searchFrom = 0;
    } else {
      searchFrom += this.length;
    }
  }

  for (let i = searchFrom; i < this.length; i++) {
    const element = this[i];

    if (element === searchElement) {
      return i;
    }
  }

  return -1;
};
