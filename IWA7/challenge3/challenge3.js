


const Slip= 
`    


    Leo Musvaire (Owed: R 9394.00)
    Sarah Kleinnhans (Owed:R 4582.20)

    ---------------------------------
     Total amount owed: R 14 976.20
    ---------------------------------  
    `

  console.log(Slip)


/*   let inputString = "2.5";
let decimalNumber = parseFloat(inputString);
console.log(decimalNumber); */


const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

/* const owed = parseInt( leoBalance - sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + total + owed + divider

console.log(result) */

const owed = parseInt( leoBalance - sarahBalance)


const leo = leoName + " "+ leoSurname + "(" +"Owed: R" +" "+ leoBalance
           sarahName +" "+ sarahSurname+"(" + "Owed: R"+" " + sarahBalance


"Total amount owed: "


console.log(leo)

  