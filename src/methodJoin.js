function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedString += this[i];
      }

      if (i !== this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}
