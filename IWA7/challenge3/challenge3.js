


/* const Slip= 
`    


    Leo Musvaire (Owed: R 9394.00)
    Sarah Kleinnhans (Owed:R 4582.20)

    ---------------------------------
     Total amount owed: R 14 976.20
    ---------------------------------  
    `

  console.log(Slip) */



const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line




//
leofloat=parseInt(leoBalance *-1 )
sarahfloat=parseInt(sarahBalance * -1)

//total balance
let owed = parseFloat( leoBalance * -1 + sarahBalance * -1 ).toFixed(2)
owed = "Total amount owed:R " + owed.replace('13',"13 ")



//used template literal to console on a new line
console.log(`   

   ${leoName +" "+ leoSurname +" "+"("+'Owed: '+ leofloat.toFixed(2)+")"} 
   ${sarahName +" "+ sarahSurname +" "+"("+'Owed: R'+sarahfloat.toFixed(2)+")"}
   
   ${divider}
   ${owed}
   ${divider}
   
   `);




  