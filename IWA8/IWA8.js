const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'



// Only change below this line 

	
let leobalance = parseFloat(leoBalance)
leobalance = leobalance.toFixed(2)
const leoCredit = parseFloat(leobalance)


const leo = {                         
	name : leoName,
 	balance: leoCredit,    //added leoCredit
	age : 24,
	accessId : "47afb389-8014-4d0b-aff3-e40203d2107f",
	address:{
		number : parseInt(leoNumber),    //parseInt
		street : leoStreet,          
		postal : parseInt(leoPostal)     //parseInt
	}
	
};

console.log(leo, leo.address['postal'])  //remove bracket from address to postal



const sarahtrim = sarahName.trim();              //removed empty space 
let sarahbalance = parseFloat(sarahBalance)      //so the number stay a decimal number
sarahbalance = sarahbalance.toFixed(2)
const sarahCredit = parseFloat(sarahbalance)

   
const sarah = {
	name: sarahtrim +' ' + sarahSurname,
	age: 62,
	balance: sarahCredit,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	address: {
	number: sarahNumber,
	street: sarahStreet,
	postal: sarahPostal
	    }
};

		  console.log(sarah, sarah.address['postal'])
		
