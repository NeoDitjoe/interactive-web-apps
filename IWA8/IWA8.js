console.log("f;lh")

const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

/* const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
const sarahBalance = '-5' */

// Only change below this line

const leo = {
	name : leoName,
	balance: parseInt(leoBalance),
	age : 24,

	address:{
		number : parseInt(leoNumber),
		street : leoStreet,
		postal : parseInt(leoPostal)
	}
	/* ${"--------------------------------------"} */
};
console.log (`
        ${leo.name +" "+"age:" + " " + leo.age+ ' ('+'Balance:' +' '+ leo.balance.toFixed(2) +')'} `);
		console.log("Leo Adress" , leo.address)


/* const sarah = {
	name : saraName -*-
	age : 62
	access id : 6b279ae5-5657-4240-80e9-23f6b635f7a8 
	balance : sarahBalance
	address: {
		number : sarahNumber
		stree: : sarahStreet
		postal-code = sarahPostal
	} 

console.log() */
  