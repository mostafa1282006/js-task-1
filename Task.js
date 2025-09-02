let valueOFElmirath = +prompt("Enter value of Elmirath ");
let numOfBoys = +prompt("Enter nums of boys");
let numOfGirls = +prompt("Enter nums of girls");

let mirathOfWife = (1 / 8) * valueOFElmirath;
let mirathOfBoysAndGirls = valueOFElmirath - mirathOfWife;

let totalShares =( numOfBoys * 2 )+ numOfGirls;
let shareValue = mirathOfBoysAndGirls / totalShares;
let mirathOfBoy = shareValue * 2;
let mirathOfGirl = shareValue * 1;

console.log(`عدد الاولاد : ${numOfBoys}`);
console.log(`عدد البنات : ${numOfGirls}`);
console.log(`قيمه ميراث الزوجه : ${mirathOfWife} جنيه`);
console.log(`قيمه ميراث الولد : ${mirathOfBoy} جنيه`);
console.log(`قيمه ميراث البنت : ${mirathOfGirl} جنيه`);
