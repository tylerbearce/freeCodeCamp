function palindrome(str) {
  //Ignore string case by converting to upper case
  var modStr = str.toUpperCase();
  //Remove all non-alphanumeric characters
  var modStr = modStr.replace(/[^A-Za-z0-9]/g, "");
  //Debug testing
  console.log(modStr + " == " + modStr.split("").reverse().join(""));
  //Compare stripped down string to its reverse
  if(modStr == modStr.split("").reverse().join("")){
    return true;
  }
  else{
    return false;
  }
}

//More debug testing
console.log(' ***** Return TRUE *****');
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));

console.log(' \n \n ***** Return FALSE *****');
console.log(palindrome("not a palindrome"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("five|\_/|four"));