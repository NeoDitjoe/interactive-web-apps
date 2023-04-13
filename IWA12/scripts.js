// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


// could have used this to change all the colors simultaneously

/* const buttons = document.querySelectorAll('.checkin');
buttons.forEach(button => {
  button.style.color = 'black';
});
 */

//changing colour of buttons
const book1ButtonColor = document.querySelector('#book1 .checkin'); 
const book2ButtonColor = document.querySelector('#book2 .checkin');
const book3ButtonColor = document.querySelector('#book3 .checkin');

 book1ButtonColor.style.color = '';  
 book2ButtonColor.style.color = '';
 book3ButtonColor.style.color = ''; 

 //change status color

const status1 = document.querySelector('#book1 .status');
status1.style.color = STATUS_MAP.overdue.color

 const status2 = document.querySelector('#book2 .status');
status2.style.color = STATUS_MAP.reserved.color

 const status3 = document.querySelector('#book3 .status');
status3.style.color = STATUS_MAP.shelf.color

//change color when button is clicked

/* const checkInButton = document.querySelector('#book1 .checkin'); 

checkInButton.addEventListener('click', function() {
  const statusText = checkInButton.parentElement.querySelector('.status');
  statusText.style.color = 'yellow';

  setTimeout(function() {
    statusText.style.color = ''; // Change back to original color
  }, 2000);
}); */
 

//BOOK 1
const canReserve = STATUS_MAP.overdue.canReserve;
const canCheckout = STATUS_MAP.overdue.canCheckout;
const canCheckIn = STATUS_MAP.overdue.canCheckIn;

const reserveButton = document.querySelector('#book1 .reserve');
const outButton = document.querySelector('#book1 .checkout');
const inButton = document.querySelector('#book1 .checkin');


if (canReserve == false) {
    reserveButton.disabled = true
} 
if (canCheckout == false) {
    outButton.disabled = true
}
if (canCheckIn == false) {
    inButton.disabled = true
}

//BOOK 2

const canReserve2 = STATUS_MAP.reserved.canReserve;
const canCheckout2 = STATUS_MAP.reserved.canCheckout;
const canCheckIn2 = STATUS_MAP.reserved.canCheckIn;

const reserveButton2 = document.querySelector('#book2 .reserve');
const outButton2 = document.querySelector('#book2 .checkout');
const inButton2 = document.querySelector('#book2 .checkin');


if (canReserve2 == false) {
    reserveButton2.disabled = true
} 
if (canCheckout2 == false) {
    outButton2.disabled = true
}
if (canCheckIn2 == false) {
    inButton2.disabled = true
}

//BOOK 3

const canReserve3 = STATUS_MAP.shelf.canReserve;
const canCheckout3 = STATUS_MAP.shelf.canCheckout;
const canCheckIn3 = STATUS_MAP.shelf.canCheckIn;

const reserveButton3 = document.querySelector('#book3 .reserve');
const outButton3 = document.querySelector('#book3 .checkout');
const inButton3 = document.querySelector('#book3 .checkin');


if (canReserve3 == false) {
    reserveButton3.disabled = true
} 
if (canCheckout3 == false) {
    outButton3.disabled = true
}
if (canCheckIn3 == false) {
    inButton3.disabled = true
}


