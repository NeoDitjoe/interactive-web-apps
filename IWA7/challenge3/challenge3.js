


const Slip= 
`    


    Leo Musvaire (Owed: R 9394.00)
    Sarah Kleinnhans (Owed:R 4582.20)

    ---------------------------------
     Total amount owed: R 14 976.20
    ---------------------------------  
    `

  console.log(Slip)



const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let owed = parseInt( leoBalance - sarahBalance)
owed = parseFloat(owed)
leofloat=parseInt(leoBalance)
sarahfloat=parseInt(sarahBalance)


const total = "Total amount owed: "


console.log(`   

   ${leoName +" "+ leoSurname +" "+"("+'Owed: '+ leofloat.toFixed(2)+")"} 
   ${sarahName +" "+ sarahSurname +" "+"("+'Owed: R'+sarahfloat.toFixed(2)+")"}
   
   ${divider}
    ${total +"R"+ owed.toFixed(2)}
   ${divider}
   
   `);





  