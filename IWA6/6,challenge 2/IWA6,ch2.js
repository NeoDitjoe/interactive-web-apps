const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;



if ( minuteOfDay == 00 && hourOfDay == 00 ) {
   let taxAsDecimal = salary /100* parseInt(tax) 
   taxAsDecimal = salary - taxAsDecimal 
   const cost= rent + transport + food
   const startingAfterTax = taxAsDecimal - cost 
   console.log('R',startingAfterTax.toFixed(2))
}