numbers.slice = function(start = 0, end = this.length) {
  const copy = [];
  let endCopy = end;
  let startCopy = start;

  if (end > this.length) {
    endCopy = this.length;
  }

  if (end < 0) {
    endCopy = this.length + end;
  }

  if (start < 0) {
    startCopy = this.length + start;

    if (startCopy < 0) {
      startCopy = 0;
    }
  }

  for (let i = startCopy; i < endCopy; i++) {
    copy[copy.length] = this[i];
  }

  return copy;
};
