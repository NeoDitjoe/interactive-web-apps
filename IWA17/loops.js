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


function createArray(length) {
    const result = []

    for (let i = 0; i <= length.length ; i++) {
       result.push(i)       
    }
    return result 
  
}

/////////////////////////////////////////////function////////////////////////////////////
function createData(data) {
        
    const current = new Date();
    const startDay = current.day
    const daysInMonth = getDaysInMonth(current)

    
    const weeks = createArray([5])
    const days = createArray([7])   
    const /* value  */ result = []

    for (const weekIndex of weeks) {
        const value = {
            weeks: weekIndex + 1,
            days: []
        };
      

        for (const dayIndex of days) {  //let
            const /* value */ days = dayIndex  //-+1   //startDay +1;
            const isValid = dayIndex > 0 && days <= daysInMonth ;

             result.push/* [weekIndex].days */ ({   
                  dayOfWeek:  + 1,
                 value: isValid ? days : days   
         })       
        }
        result.push(value) 
    }  
    
    return result 
 } 
 console.log(createData())
 /////////////////////////////////////////////////////////function//////////////////////////////////////////////
 function addCell( existing, classString, value )  {
    const result = /* html */ 
      `
      <td class='${classString}'>  
            ${value}
        </td>

        ${existing}

     `  
    return result
 }      


 /////////////////////////////////////////////////////////function//////////////////////////////////////////////
 function createHtml(data){


    let result = ' ';

    for (let {week,  days} of result) {    //week, day of data //let
        let inner =[]
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week /* week */}`)
    
        for (let  {dayOfWeek, value}  in days) {    //let
            let classString = "table__cell table__cell_sidebar"
 		    let isToday = new Date().getDate() === value
            let isWeekend = dayOfWeek == 1 && dayOfWeek == 7
            let isAlternate = week% 2

            

 			if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString = `${classString} table__cell_weekend `   
            if (isAlternate) classString = `${classString} table__cell_alternate`
            action = addCell(inner, classString, value)
        }
        result = `<tr>${inner}</tr>`
     }
       return result 
 }  

console.log(createHtml())
const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)   