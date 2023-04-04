const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;



if ( minuteOfDay == 00 && hourOfDay == 00 ) {
   let taxAsDecimal = salary /100* parseInt(tax) 
   taxAsDecimal = salary - taxAsDecimal 
   const cost= rent + transport + food
   const startingAfterTax = taxAsDecimal - cost /* +32.41 */
   console.log(startingAfterTax.toFixed(2))
}