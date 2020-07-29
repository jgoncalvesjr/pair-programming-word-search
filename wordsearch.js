const transpose = function(matrix) {
  let result = [];
  for (const element of matrix[0]) {
    result.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j].push(matrix[i][j]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const reversedWord = word.split("").reverse().join("");
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }
  return false;
};

module.exports = wordSearch;