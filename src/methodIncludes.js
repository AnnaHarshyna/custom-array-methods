numbers.includes = function(element) {
  if (this[0] === element || this[1] === element) {
    return true;
  } else {
    return false;
  }
};
