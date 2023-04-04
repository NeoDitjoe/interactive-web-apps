/* const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = /^\d+$/.test(primaryPhone);   //I can replace /^\d+$/.test with !isNaN
const secondaryValid = /^\d+$/.test(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid); */

const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';


console.log("Primary phone is valid numerical string:",!isNaN(primaryPhone));
console.log("Secondary phone is valid numerical string:",!isNaN(secondaryPhone));