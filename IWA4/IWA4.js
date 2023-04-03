let date= 2050;
const status= "parent";
let count = 0;

if (date = 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	date = 'April';  //I could have deleted this and add april where the date variable is used
	console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');  
	count = count + 4 //removed let because variable has already been declared 


	if (status == "student") {  //used comparison 
	  console.log('June', 'Youth Day')
		count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
    date = 'December' 
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	if (status == "parent") {
	  console.log(date, 'Christmas Day')
		count = count + 1
  }
  
	console.log(date, 'Day of Goodwill')
	count = count + 1
}

date=2050 //could have left this and inset the integes manually

console.log("")

console.log('Your status is:', status,)
console.log('The year is:', date)
console.log('The total holidays is:', count)