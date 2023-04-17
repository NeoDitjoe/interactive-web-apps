/* // script.js

function add(a, b) { 
  return a + b 
}

function multiply(a, b) { 
  return a * b 
}

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	return this.multiply(added, this.internal.c)
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

console.log(example1.calculate()) // output: 48
console.log(example2.calculate()) // output: 12
 */

// script.js

function add (a, b ) {
	 return a + b 
	}

	console.log(add(1, 4))

function multiply (a, b ) { 
	a - b 
}

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
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