numbers.lastIndexOf = function(target, fromIndex = this.length - 1) {
  let searchFrom = Number(fromIndex);

  if (!Number.isFinite(searchFrom)) {
    searchFrom = 0;
  }

  if (searchFrom < 0) {
    searchFrom = searchFrom + this.length;
  }

  if (searchFrom < 0) {
    return -1;
  }

  for (let i = searchFrom; i >= 0; i--) {
    const element = this[i];

    if (element === target) {
      return i;
    }
  }

  return -1;
};
