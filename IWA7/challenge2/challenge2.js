const nickname= "Timmy";
const firstname = "Timothy";
                                                    

function Random() {
    let random = Math.ceil(Math.random()*3);
    return random;
  }

let number = Random();
/* console.log(number) */



if (number == 1){
    console.log('Good Morning',nickname)
 }

 else if(number == 2){
    console.log('Good Morning',firstname)
 }

 else{
   console.log('Good Mourning')
 }