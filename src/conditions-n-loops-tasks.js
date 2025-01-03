/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (c > a && c > b) return c;
  return b;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  return (
    (a === b && a + b > c) || (a === c && a + c > b) || (b === c && c + b > a)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let roman = '';
  let remainder = num;
  let i = 0;

  for (i = 10; i <= num; i += 10) {
    roman += 'X';
    remainder -= 10;
  }

  if (remainder >= 4) {
    if (remainder === 9) {
      roman += 'IX';
      remainder -= 9;
    } else if (remainder === 4) {
      roman += 'IV';
      remainder -= 4;
    } else {
      roman += 'V';
      remainder -= 5;
    }
  }

  for (i = 1; i <= remainder; i += 1) {
    roman += 'I';
  }
  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.': {
        result += 'point';
        break;
      }
      case ',': {
        result += 'point';
        break;
      }
      case '-': {
        result += 'minus';
        break;
      }
      case '0': {
        result += 'zero';
        break;
      }
      case '1': {
        result += 'one';
        break;
      }
      case '2': {
        result += 'two';
        break;
      }
      case '3': {
        result += 'three';
        break;
      }
      case '4': {
        result += 'four';
        break;
      }
      case '5': {
        result += 'five';
        break;
      }
      case '6': {
        result += 'six';
        break;
      }
      case '7': {
        result += 'seven';
        break;
      }
      case '8': {
        result += 'eight';
        break;
      }
      case '9': {
        result += 'nine';
        break;
      }
      default: {
        result += '?';
      }
    }

    if (i !== numberStr.length - 1) result += ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < (str.length - 1) / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let remainder = num;

  do {
    if (remainder % 10 === digit) return true;
    remainder = Math.floor(remainder / 10);
  } while (remainder > 10);

  return remainder === digit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft = arr[0];
  let sumRight = 0;

  for (let i = 1; i < arr.length - 1; i += 1) {
    sumRight = 0;
    for (let j = i + 1; j < arr.length; j += 1) {
      sumRight += arr[j];
    }
    if (sumLeft === sumRight) return i;
    sumLeft += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let i;
  let j;
  let k;
  let l;
  for (i = 0; i < size; i += 1) arr[i] = [];
  let num = 1;
  let lastCol = size - 1;
  for (i = 0; i <= lastCol; i += 1) {
    for (j = i; j <= lastCol; j += 1) {
      arr[i][j] = num;
      num += 1;
    }
    for (k = i + 1; k < lastCol; k += 1) {
      arr[k][lastCol] = num;
      num += 1;
    }
    for (l = lastCol; l > i; l -= 1) {
      arr[lastCol][l] = num;
      num += 1;
    }
    for (k = lastCol; k > i; k -= 1) {
      arr[k][i] = num;
      num += 1;
    }
    lastCol -= 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixarr = matrix;
  const arr = [];
  let i = 0;
  let j = 0;
  for (i = 0; i < matrixarr.length; i += 1) {
    arr[i] = matrixarr[i];
  }

  matrixarr.length = arr[0].length;

  for (i = 0; i < matrixarr.length; i += 1) {
    matrixarr[i] = [];
    matrixarr[i].length = arr.length;
  }

  for (i = 0; i < arr.length; i += 1) {
    for (j = 0; j < arr[i].length; j += 1) {
      matrixarr[j][arr.length - i - 1] = arr[i][j];
    }
  }

  return matrixarr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortarr = arr;
  let hasChanged = false;
  let indexMim = 0;
  let min = arr[0];
  let buff = 0;
  for (let i = 1; i < sortarr.length; i += 1) {
    for (let j = i; j < sortarr.length; j += 1) {
      if (sortarr[j] < min) {
        min = sortarr[j];
        indexMim = j;
        hasChanged = true;
      }
    }
    if (hasChanged) {
      buff = sortarr[i - 1];
      sortarr[i - 1] = min;
      sortarr[indexMim] = buff;
      hasChanged = false;
    }
    min = sortarr[i];
    indexMim = i;
  }
  return sortarr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let honestPart = '';
  let oddPart = '';
  let count = iterations;

  while (count > 0) {
    honestPart = '';
    oddPart = '';

    for (let i = 0; i < result.length; i += 2) {
      honestPart += result[i];
      if (str[i + 1]) oddPart += result[i + 1];
    }
    result = honestPart + oddPart;

    if (result === str) count = iterations % (iterations - count + 1);
    else count -= 1;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const inputData = [...String(number)];

  for (let i = inputData.length - 2; i >= 0; i -= 1) {
    if (inputData[i] < inputData[i + 1]) {
      let leftPart = '';
      const rightPart1 = [];
      const rightPart2 = [];

      for (let j = 0; j < inputData.length; j += 1) {
        if (j < i) leftPart += inputData[j];
        if (j > i && inputData[j] <= inputData[i])
          rightPart1.push(inputData[j]);
        if (j > i && inputData[j] > inputData[i]) rightPart2.push(inputData[j]);
      }
      rightPart1.sort((a, b) => a - b);
      rightPart2.sort((a, b) => a - b);
      rightPart1.unshift(rightPart2[0]);
      rightPart1.push(inputData[i]);
      rightPart2.shift();

      return Number(`
        ${leftPart}${rightPart1.join('')}${rightPart2.join('')}`);
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
