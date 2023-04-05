const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0; // removed single quatation marks, it is not string

let location = 'RSA';   
let currency = 'R';     //fetched this whole input from below
let shipping = 0; 
let customers = 3;      


if (location == 'RSA') {     //comparison
  shipping = 400            //changed the structure, and && removed
  currency == 'R';          
} 
else if (location == 'NAM') {  //added brackets
  shipping = 600;
  currency = '$';               //addea
} 
else {
  shipping = 800; 
  currency = '$';              //added this
  console.log(BANNED_WARNING); //added this 
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;   //removed quatation marks
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; 

 
if (shoes + batteries + pens + shirts >= 1000 && location == 'RSA' || location == 'NAM' && customers === 1) {
  shipping = 900;
} else if (shipping === 0 && customers !== 1) {  //Removed brackets before and after &&
  console.log(FREE_WARNING);                     //fixed structure
} 

if (location === 'NK') {
  console.log(BANNED_WARNING);
}
else {
  console.log('Price:', currency, shoes + toys + shirts +batteries + pens + shipping);
}  // added toys
   //changed structure
