/**
 * JavaScript Algorithms and Data Structures Projects: Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * 
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * 
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
  let result = str.toUpperCase().split("");

  for (let i = 0; i < result.length; i++){
    switch (result[i]) {
      case 'A':
       result[i] = 'N'
       break;
      case 'B': 
        result[i] = 'O'
        break;
      case 'C': 
        result[i] = 'P'
        break;
      case 'D': 
        result[i] = 'Q'
        break;
      case 'E': 
        result[i] = 'R'
        break;
      case 'F': 
        result[i] = 'S'
        break;
      case 'G': 
        result[i] = 'T'
        break;
      case 'H': 
        result[i] = 'U'
        break;
      case 'I': 
        result[i] = 'V'
        break;
      case 'J': 
        result[i] = 'W'
        break;
      case 'K': 
        result[i] = 'X'
        break;
      case 'L': 
        result[i] = 'Y'
        break;
      case 'M': 
        result[i] = 'Z'
        break;
      case 'N': 
        result[i] = 'A'
        break;
      case 'O': 
        result[i] = 'B'
        break;
      case 'P': 
        result[i] = 'C'
        break;
      case 'Q': 
        result[i] = 'D'
        break;
      case 'R': 
        result[i] = 'E'
        break;
      case 'S': 
        result[i] = 'F'
        break;
      case 'T': 
        result[i] = 'G'
        break;
      case 'U': 
        result[i] = 'H'
        break;
      case 'V': 
        result[i] = 'I'
        break;
      case 'W': 
        result[i] = 'J'
        break;
      case 'X': 
        result[i] = 'K'
        break;
      case 'Y': 
        result[i] = 'L'
        break;
      case 'Z': 
        result[i] = 'M'
        break;
    }
  }

  return result.join("");
}


// Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP
// console.log(rot13("SERR CVMMN!"));  // should decode to FREE PIZZA!
// console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

