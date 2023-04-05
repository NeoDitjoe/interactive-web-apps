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

const leo = {                         //renamed variable names
	name : leoName,
	balance: parseInt(leoBalance),    
	age : 24,                        // I could a have made this a string and and give it a variable

	address:{
		number : parseInt(leoNumber),
		street : leoStreet,             //made this an object
		postal : parseInt(leoPostal)
	}
	
};



const sarahtrim = sarahName.trim();          //removed empty space 
let sarahbal = parseFloat(sarahBalance)      //so the number stay a decimal number
sarahbal = sarahbal.toFixed(2)


const leoCredit =  parseFloat(leo.balance)  //combine their balance
const sarahCredit = parseFloat(sarahbal)
const credit = leoCredit + sarahCredit



const sarah = `
${sarahtrim} ${sarahSurname} age: 62 (Balance: R${sarahbal})
Address: number: ${sarahNumber}                      
         street: ${sarahStreet}
		 postal: ${sarahPostal}
		

----------------------------------------------
    Total Balance: R ${credit}
----------------------------------------------
`;



console.log (`
${leo.name +" "+"age:" + " " + leo.age+ ' ('+'Balance:' +' '+ leo.balance.toFixed(2) +')'} `);
		console.log("Adress" , leo.address, `
		                 
		${sarah}`)    //space between leo and sarah's detail

		





  