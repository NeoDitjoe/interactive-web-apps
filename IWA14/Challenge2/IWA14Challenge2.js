function add (a, b ) {    //modified to a proper function structure, paranthesis, 
	 return a + b
	}

function multiply (a, b) {    //used multiply and added return 
	return  a *  b 
}

function internal() {

	const added = this.add(this.internal.a, this.internal.b)  //added internal 
	const multiplied = this.multiply(added, this.internal.c)    // created a variable

	console.log(multiplied)   // replaced return with console
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate() 