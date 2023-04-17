const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


const holiday = ""

if (holiday == christmas) {
    console.log(holidays[6].date)
  }
else if (holiday == futureId){
    console.log("ID 9 not created yet")
  }
  else{
    null
  }
  


let copied = holidays[6]       // changed
let copiedName = holidays[6].name // changed
copiedName =  'X-mas'  //changed

//changing time
correctDate = copiedName.date               //used different variables
correctDate = new Date(`25 December ${currentYear}`)

isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)
console.log('')   // space


const digit = correctDate.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})


if (isEarlier){ /* copied.date = correctDate */
console.log('ID change:', holidays[6].id != copied.id)
console.log('Name change:', copiedName)
console.log('Date change:', digit ) 
}



const firstHolidayTimestamp = Math.min(
    parseInt(holidays[0].date),   // changed
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date
)



console.log('')  // space 


// whole code changed
const firstHolidayDate = firstHolidayTimestamp;
const firstHoliday = new Date(firstHolidayDate).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit'});

 
console.log(firstHoliday +'/' +`${currentYear}`);


//same as above code
const lastHolidayTimestamp = Math.max(
    parseInt(holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date
)



const lastHolidayDate = new Date(lastHolidayTimestamp);
const lastHoliday = lastHolidayDate.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit'})
console.log(lastHoliday + '/' + `${currentYear}`)

console.log('')


const randomInt = Math.floor(Math.random() * Object.keys(holidays).length);
const randomm = holidays[randomInt].name

console.log(randomm);





//changing the dates format
//[0]
/* let zero = holidays[0].date 
zero = new Date (zero)
zero = zero.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[1]
let one = holidays[1].date
one = new Date(one)
one = one.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[2]
let two = holidays[2].date;
two = new Date(two)
two = two.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[3]
let three = holidays[3].date;
three = new Date(three)
three = three.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[4]
let four = holidays[4].date;
four = new Date(four)
four = four.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[5]
let five = holidays[5].date;
five = new Date(five)
five = five.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[7]
let seven = holidays[7].date;
seven = new Date(seven)
seven = seven.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
//[8]
let eight = holidays[8].date;
eight = new Date(eight)
eight = eight.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})




//turning the dates to milliseconds
//[0]
const zeroDateString = zero;
const zeroDateParts = zeroDateString.split('/');
const zeroYear = zeroDateParts[2];
const zeroMonth = zeroDateParts[1] - 1; // Month is zero-indexed
const zeroDay = zeroDateParts[0];
const zeroObject = new Date(zeroYear, zeroMonth, zeroDay);
const zeroMili = zeroObject.getTime();

//[6]
const sixDateString = digit;
const sixDateParts = sixDateString.split('/');
const sixYear = sixDateParts[2];
const sixMonth = sixDateParts[1] - 1;
const sixDay = sixDateParts[0];
const sixObject = new Date(sixYear, sixMonth, sixDay);
const sixMili = sixObject.getTime();

//[1]
const oneDateString = one;
const oneDateParts = oneDateString.split('/');
const oneYear = oneDateParts[2];
const oneMonth = oneDateParts[1];
const oneDay = oneDateParts[0];
const oneObject = new Date(oneYear, oneMonth, oneDay);
const oneMili = oneObject.getTime();

//[2]
const twoDateString = two;
const twoDateParts = twoDateString.split('/');
const twoYear = twoDateParts[2];
const twoMonth = twoDateParts[1];
const twoDay = twoDateParts[0];
const twoObject = new Date(twoYear, twoMonth, twoDay);
const twoMili = twoObject.getTime();


//[3]
const threeDateString = three;
const threeDateParts = threeDateString.split('/');
const threeYear = threeDateParts[2];
const threeMonth = threeDateParts[1];
const threeDay = threeDateParts[0];
const threeObject = new Date(threeYear, threeMonth, threeDay);
const threeMili = threeObject.getTime(); 

//[4]
const fourDateString = four;
const fourDateParts = fourDateString.split('/');
const fourYear = fourDateParts[2];
const fourMonth = fourDateParts[1];
const fourDay = fourDateParts[0];
const fourObject = new Date(fourYear, fourMonth, fourDay);
const fourMili = fourObject.getTime(); 

//[5]
const fiveDateString = five;
const fiveDateParts = fiveDateString.split('/');
const fiveYear = fiveDateParts[2];
const fiveMonth = fiveDateParts[1];
const fiveDay = fiveDateParts[0];
const fiveObject = new Date(fiveYear, fiveMonth, fiveDay);
const fiveMili = fiveObject.getTime(); 

//[7]
const sevenDateString = seven;
const sevenDateParts = sevenDateString.split('/');
const sevenYear = sevenDateParts[2];
const sevenMonth = sevenDateParts[1];
const sevenDay = sevenDateParts[0];
const sevenObject = new Date(sevenYear, sevenMonth, sevenDay);
const sevenMili = sevenObject.getTime(); 

//[8]
const eightDateString = eight;
const eightDateParts = eightDateString.split('/');
const eightYear = eightDateParts[2];
const eightMonth = eightDateParts[1];
const eightDay = eightDateParts[0];
const eightObject = new Date(eightYear, eightMonth, eightDay);
const eightMili = eightObject.getTime(); 



const firstHolidayTimestamp = Math.min(
    zeroMili,  
    oneMili, 
    twoMili,
    fourMili,
    fiveMili,
    sixMili,
    sevenMili,
    eightMili,
)

console.log('')



const firstHolidayDate = new Date(firstHolidayTimestamp);
const firstDay = firstHolidayDate.getDate();
const firstMonth = firstHolidayDate.getMonth() + 1;

console.log(`${firstDay}/${firstMonth}/${currentYear}`);


const lastHolidayTimestamp = Math.max(
    zeroMili,  
    oneMili, 
    twoMili,
    fourMili,
    fiveMili,
    sixMili,
    sevenMili,
    eightMili,
)


const lastHolidayDate = new Date(lastHolidayTimestamp);
const lastDay = lastHolidayDate.getDate();
const lastMonth = lastHolidayDate.getMonth() + 1;

console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomHoliday = holidays[Math.random()]
console.log(randomHoliday) */







