/**
 * JavaScript Algorithms and Data Structures Projects: Cash Register
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
 * or if you cannot return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
 * as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {
  let change = (cash - price) * 100;
  let payout = change;
  let changeArr = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let payoutArr = [];
  let changeLen = changeArr.length;
  let totalcid = 0;
  
  // Add up value of cash in drawer, multiply by 100 to adjust for javascript decimal error
  for (let i = 0; i < cid.length; i++) {
    cid[i][1] *= 100;
    totalcid += cid[i][1];
  }

  // Payout change via cash in drawer
  while (change > 0) {
    if (change >= 10000 && cid[8][1] > 0) {
      changeArr[8][1] += 10000;
      cid[8][1] -= 10000;
      change -= 10000;
    } else if (change >= 2000 && cid[7][1] > 0) {
      changeArr[7][1] += 2000;
      cid[7][1] -= 2000;
      change -= 2000;
    } else if (change >= 1000 && cid[6][1] > 0) {
      changeArr[6][1] += 1000;
      cid[6][1] -= 1000;
      change -= 1000;
    } else if (change >= 500 && cid[5][1] > 0) {
      changeArr[5][1] += 500;
      cid[5][1] -= 500;
      change -= 500;
    } else if (change >= 100 && cid[4][1] > 0) {
      changeArr[4][1] += 100;
      cid[4][1] -= 100;
      change -= 100;
    } else if (change >= 25 && cid[3][1] > 0) {
      changeArr[3][1] += 25;
      cid[3][1] -= 25;
      change -= 25;
    } else if (change >= 10 && cid[2][1] > 0) {
      changeArr[2][1] += 10;
      cid[2][1] -= 10;
      change -= 10;
    } else if (change >= 5 && cid[1][1] > 0) {
      changeArr[1][1] += 5;
      cid[1][1] -= 5;
      change -= 5;
    } else if (change >= 1 && cid[0][1] > 0) {
      changeArr[0][1] += 1;
      cid[0][1] -= 1;
      change -= 1;
    } else {
      return {status: "INSUFFICIENT_FUNDS", change: payoutArr}}; // if cid is less than the change due, or if you cannot return the exact change.
  }

  // Remove change array entries for coin and dollar types not included in the final change payout, convert back to cents
  for (let i = 0; i < changeLen; i++) {
    if (changeArr[i][1] > 0){
      changeArr[i][1] /= 100;
      payoutArr.push(changeArr[i]);
    }
  }

    // console.log(`Change= ${payout} cents`);
    // console.log(`Cash-in-Drawer= ${totalcid} cents`);

  // Display payout and close register if there is no money left in the drawer
  if (totalcid > payout){
    return {status: "OPEN", change: payoutArr.reverse()}; // if cid is more than the change due.
  } else {
    return {status: "CLOSED", change: changeArr}; // if cid is equal to the change due.
  }
 }

/**
 * Test Cases
 */

// console.log(
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// ); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}

// console.log(
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// ); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// console.log(
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}

// console.log( 
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}

// console.log(
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// ); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.