const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear() , date.getMonth() + 1, 0).getDate()

// Only edit below 


const createArray = (length) => {
    const result = []

    for (let i = 0; i < length ; i++) {
         return result
    } 

 
}
    const createData = (data) => {
        
     ////////////////////////calculates the days in a month which is 30////////////////////////////////////
     
     const current = new Date
     current.setDate(0)
     
     startDay = current.day
     daysInMonth = getDaysInMonth(current)
   
     weeks = createArray(5)
     days = createArray(7)
     value = null
    


    for (weekIndex in weeks) {
        value = [{
            week: weekIndex + 1,
            days: []
        }]
      
        
        

         for (let dayIndex of days) {  //let
             value = dayIndex - startDay
             isValid = days > 0 && days <= daysInMonth  //day  to days

             result[weekIndex].days = [{
                 dayOfWeek: dayIndex + 1,
                 value: isValid && days,   //day  to days
             }]         
         }
    }  
    
    
 } 

 /////////////////////////////////////////////////////////function//////////////////////////////////////////////
 const addCell = ( existing, classString, value ) => {
      const result = /* html */ 
      `
         <td ${classString} > 
             ${value}
         </td>

        ${existing}

     `  
     return result
 } ////////////////////////// <td ${classString} >     


 /////////////////////////////////////////////////////////function//////////////////////////////////////////////
 const createHtml = (data) => {

     let result = [];

     for (let week2 /* days*/ in data) {    //week, day of data //let
         let inner =[]
         addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
         for (let  dayOfWeek2/* value*/  of days) {    //let
             classString = table__cell
 			            isToday = new Date === value
             isWeekend = dayOfWeek2 = 1 && dayOfWeek == 7
             isAlternate = week / 2

             let classString = 'table__cell'

 			if (isToday) classString = `${classString} table__cell_today`
             if (isWeekend) classString === '{classString} table__cell_weekend'
             if (isAlternate) classString === '{classString} table__cell_alternate'
              addCell(inner, classString, value)
         }
          result = `<tr>${inner}</tr>`
       //  return result 
         
     }
 }  


const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createHtml()
document.querySelector('[data-content]').innerHTML = data   //createHtml(data)   

/* const who = document.querySelector('[data-title]');
const who2 = document.querySelector('[data-content]')

let light =["neo"+ "cozy" , "Jesus"]
light.whom = 2

for (let names of light ){
    who.innerHTML = light;
    who2.innerHTML = light 
} */


// TRY TO RETURN THE ADDCELL FUNCTION IN THE OTHER FUNCTION