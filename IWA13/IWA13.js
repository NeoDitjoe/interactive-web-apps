let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const  logCalc = () => {     // relocated = to after variable
    const isString = typeof calculated == 'numerical-string'  //changed to comparison
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)  //parseInt
    calculated = calculatedAsNumber + 1   // to assigning
}

const  calcUser = () => {  //
  logCalc()          //parathenses
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => { //
	if (user && state === 'requesting') { // don't need user
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()