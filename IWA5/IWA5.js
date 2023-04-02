const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0; // removed '', it is not string

let location = 'RSA';   //fetched this 
let currency = 'R';     //whole input from below
let shipping = 0;       


if (location === 'RSA') {
  shipping = 400            //changed the structure, and && removed
  currency == 'R';          
} else if (location === 'NAM') {
  shipping = 600;
  currency = '$';               //addea
} else {
  shipping = 800; 
  currency = '$';              //added this
  console.log(BANNED_WARNING); //added this 
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED; 
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; 

 
if (shoes + batteries + pens + shirts >= 1000 && (location === 'RSA' || location === 'NAM') && customers === 1) {
  shipping = 900;
} else if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, shoes + toys + shirts +batteries + pens + shipping);
} 
