/**
 * JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
 * 
 * Convert the given number into a roman numeral.
 * 
 * All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
  let finalResult = [];

  if (num >= 1000) {
    let divideCount = Math.floor(num/1000);
    num = num - (divideCount * 1000);
    for (let i = 0; i < divideCount; i++) {
      finalResult.splice(finalResult.length, 0, 'M');
    };
  }

  if (num >= 900) {
    num = num - 900;
    finalResult.splice(finalResult.length, 0, 'C', 'M');
  }
 
  if (num >= 500) {
    let divideCount = Math.floor(num/500);
    num = num - (divideCount * 500);
    for (let i = 0; i < divideCount; i++) {
      finalResult.splice(finalResult.length, 0, 'D');
    };
  }

  if (num >= 400) {
    num = num - 400;
    finalResult.splice(finalResult.length, 0, 'C', 'D');
  }

  if (num >= 100) {
    let divideCount = Math.floor(num/100);
    num = num - (divideCount * 100);
    for (let i = 0; i < divideCount; i++) {
      finalResult.splice(finalResult.length, 0, 'C');
    };
  }
  
  if (num >= 90) {
    num = num - 90;
    finalResult.splice(finalResult.length, 0, 'X', 'C');
  }

  if (num >= 50) {
    let divideCount = Math.floor(num/50);
    num = num - (divideCount * 50);
    finalResult.splice(finalResult.length, 0, 'L');
  }

  if (num >= 40) {
    num = num - 40;
    finalResult.splice(finalResult.length, 0, 'X', 'L');
  }

  if (num >= 10) {
    let divideCount = Math.floor(num/10);
    num = num - (divideCount * 10);
    for (let i = 0; i < divideCount; i++) {
      finalResult.splice(finalResult.length, 0, 'X');
    };
  }

  if (num >= 9) {
    num = num - 9;
    finalResult.splice(finalResult.length, 0, 'I', 'X');
  }

  if (num >= 5) {
    let divideCount = Math.floor(num/5);
    num = num - (divideCount * 5);
    finalResult.splice(finalResult.length, 0, 'V');
  }

  if (num == 4) {
    let divideCount = Math.floor(num/1);
    num = num - (divideCount * 1);
    finalResult.splice(finalResult.length, 0, 'I', 'V');
  }

  if (num >= 1) {
    let divideCount = Math.floor(num/1);
    num = num - (divideCount * 1);
    for (let i = 0; i < divideCount; i++) {
      finalResult.splice(finalResult.length, 0, 'I');
    };
  }

  return finalResult.join(''); 
}

// DEBUG
// console.log("2 = " + convertToRoman(2));
// console.log("4 = " + convertToRoman(4));
// console.log("5 = " + convertToRoman(5));
// console.log("7 = " + convertToRoman(7));
// console.log("9 = " + convertToRoman(9));
// console.log("10 = " + convertToRoman(10));
// console.log("12 = " + convertToRoman(12));
// console.log("16 = " + convertToRoman(16));
// console.log("29 = " + convertToRoman(29));
// console.log("44 = " + convertToRoman(44));
// console.log("45 = " + convertToRoman(45));
// console.log("68 = " + convertToRoman(68));
// console.log("83 = " + convertToRoman(83));
// console.log("97 = " + convertToRoman(97));
// console.log("99 = " + convertToRoman(99));