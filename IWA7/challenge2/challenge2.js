const nickname= "Timmy";
const firstname = "Timothy";
                                                    

function Random() {
    let random = Math.ceil(Math.random()*3);  //math.ceil to transform to whole number
    return random;
  }

const number = Random();


if (number == 1){
    console.log('Good Morning',nickname)
 }

 else if (number == 2){
    console.log('Good Morning',firstname)
 }

 else {
   console.log('Good Mourning')
 }

 console.log(Math.max(34, 214, 724))

 