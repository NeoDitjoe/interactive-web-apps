const firstName = 'John';
const age = 35;
const hobby = 'Coding';     //inserted const on everything above

const logTwice = (parameter) => {
    console.log(parameter)   //inserted log
    console.log(parameter)
  }

function hobbY () {  //modified hobby to hobbY
 const details = (` Hello, ${name} (${age}). I love ${hobby}!`)
 logTwice(details)
}

hobbY()

