const nickname= "Timmy";
const firstname = "Timothy";
                                                    

function Random() {
    let random = Math.ceil(Math.random()*2);
    return random;
  }

let number = Random();
/* console.log(number) */

if (number == 1){
    console.log('Good Morning',nickname)
 }

 else{
    console.log('Good Morning',firstname)
 }