//replaced private with const

const firstname = "Nwabisa"
const surname = "Gabe"
/* export */ const role = "CEO"

const display= firstname + " " + surname + " (" + role + ")"
document.getElementById('nwabisa').innerText = display
//I used getElementById from querySelector
console.log(role)