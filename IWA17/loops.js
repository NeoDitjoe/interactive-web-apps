// const MONTHS = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ]

// const getDaysInMonth = (date) => new Date(date.getFullYear() , date.getMonth() + 1, 0).getDate()

// // Only edit below 


// function createArray(length) {
//     const result = []

//     for (let i = 0; i <= length ; i++) {
//        result.push(i)       
//     }
//     return result 
  
// }
// /////////////////////////////////////////////function////////////////////////////////////
// function createData() {
        
//     const current = new Date();
//     const startDay = current.getDate()
//     const daysInMonth = getDaysInMonth(current);

//     const weeks = createArray(4);
//     const days = createArray(6);
 
   
//     const /* value */ result  = [];
   
//     for (const weekIndex /* of*/  in weeks) {
//         const value = {
//             week: weekIndex + 1,
//             day: []
//         };
       
 
        
//         for (const dayIndex of days) {  //const
//              let day = dayIndex - startDay ;
//              let isValid = dayIndex > 0 && days <= daysInMonth ;
            
//              value.day.push/* [weekIndex].days */ ({   
//                 dayOfWeek: dayIndex + 1,
//                 value: isValid ? days : null  
//          })       
//         }
//         result.push(value)
//     }  
//     return result
//  } 
//  /////////////////////////////////////////////////////////function//////////////////////////////////////////////
//  function addCell( existing, classString, value )  {
//     const result = /* html */ 
//       `
//       <td class='${classString}'>  
//             ${value}
//         </td>

//         ${existing}

//      `  
//     return result
//  }      
//  /////////////////////////////////////////////////////////function//////////////////////////////////////////////
//  function createHtml(data){


//     let result =  [];

//     for (let {week,  days} of createData()) {    //week, day of data //let
//         let inner =[]
//         inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week/* week */}`)
//         // inner = addCell(inner, 'table__cell table__cell_sidebar', `${days/* week */}`)
//         // inner = addCell(inner, 'table__cell table__cell_sidebar', `${'hh'/* week */}`)
    
//         for (let   value  in days) { 
//             addCell(inner, 'table__cell table__cell_sidebar', `${'hh'/* week */}`)   //let
//             let classString = "table__cell table__cell_sidebar"
//  		    let isToday = new Date().getDate() === value
//             let isWeekend = dayOfWeek == 1 && dayOfWeek == 7
//             let isAlternate = week% 2
//             classString = "table__cell table__cell_sidebar"
            

//  			if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString = `${classString} table__cell_weekend `   
//             if (isAlternate) classString = `${classString} table__cell_alternate`
//             action = addCell(inner, classString, value)
//             result = `<tr>${inner}</tr>`
//         }
//         result = `${inner}`
//      }
//        return result  
//  } 

// console.log(createHtml())
 
// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml() 






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
  ];
  
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
// Only edit below 
/////////////////////////////////function//////////////////////////////////////////////
  function createArray(length) {
    const result = [];
  
    for (let i = 0; i < length; i++) {
      result.push(i);
    }
  
    return result;  
  };
  
/////////////////////////////////function//////////////////////////////////////////////

  function createData(){
    const weeks = createArray(7);
    const days = createArray(7);
    // return {weeks, days} //to log 1(weeks and days)

    const current = new Date();
    current.setDate(1);
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);
    
  
    
    let result = [];
  
    for (let weekIndex in weeks) {
      const value = {
        week: weekIndex + 1,
        days: [], //how to target .return value[1]
      };
  
      for (let dayIndex = 0; dayIndex< 7; dayIndex++) {
        let day = (dayIndex * 7)  - weekIndex +1;
        const isValid = day > 0 && day <= daysInMonth;    
        
        value.days.push({
            //dayOfWeek : weekIndex + 1,
            value: isValid ? day : ' ',
        });
      }
  
      result.push(value);
    }
  
    return result;
  };

/////////////////////////////////function//////////////////////////////////////////////
  
  function addCell(existing, classString, value){
    return /* html */ `${existing}
      <td class="${classString}">
      ${value}
      </td>
      
    `;

  };
  
 /////////////////////////////////function//////////////////////////////////////////////  
 
  function createHtml(data){
    //return createData() //get the two functions to connect
    let result = '';
  
    for (let weekIndex in data) {
      const week = data[weekIndex];
      let inner = '';
  
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${weekIndex}`);
      console.log(inner)
      for (let dayIndex in week.days) {
        const day = week.days[dayIndex];
        
        let classString = 'table__cell';
        const isToday = new Date().getDate() === day.value;
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        const isAlternate = weekIndex % 2;
  
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
  
        inner = addCell(inner, classString, day.value);
      }
  
      result +=`<tr>${inner}</tr>`;
    }
  
    return result;
  };
  
  // Only edit above
  
  const current = new Date();
  document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
  const data = createData();
  document.querySelector('[data-content]').innerHTML = createHtml(data);
  
  




//   const MONTHS = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December',
    // ]
    
    // const getDaysInMonth = (date) => new Date(date.getFullYear() , date.getMonth() + 1, 0).getDate()
    
    // // Only edit below 
    
    
    // function createArray(length) {
    //     const result = []
    
    //     for (let i = 0; i <= length ; i++) {
    //        result.push(i)       
    //     }
    //     return result 
      
    // }
    
    // /////////////////////////////////////////////function////////////////////////////////////
    // function createData(){
    //       weeks = createArray([5]);
    //       days = createArray([6]);
    //       //return {weeks, days} to log 1(weeks and days)
    
    //       const current = new Date()
    //       const startDay = current.getDate()
    //       const daysInMonth = getDaysInMonth(current)
    
    //       const result = []
    
    //       for (const weekIndex in weeks){[   
    //         value = [
    //             weekIn = weekIndex ,
    //             dayIn = []  // how to target .return value[1]
    //           ]
    //       ]
    //       for (const dayIndex of days){
    //         day = dayIndex - startDay,
    //         isValid = dayIndex > 0 || days <= daysInMonth,    
            
    //         value[1].push({   
    //             dayOfweek : dayIndex +1,
    //             value : isValid ? days :null 
    //       })
    //         }      
    //         result.push(value)      
    //     }
         
    //      return result
    // }
    
    // ///////////////////////////////////////////////////////////function//////////////////////////////////////////////
    // /*  function addCell( existing, classString, value )  {
    //     const result = []
            
    //      for (let i= 0; i < array.length; i++) {
    //         `
    //       <td class='${classString}'>  
    //             ${value}
    //         </td>
    
    //         ${existing}
    
    //      `
    //     return result
    //  }      
    
    // } */
    
    // function addCell( existing, classString, valueHTML )  {
    //     const result = 
    //       `
    //       <td class='${classString}'>  
    //             ${valueHTML}
    //         </td>
    
    //         ${existing}
    //      `  
    //     return result
    //  }  
    // /////////////////////////////////////////////////////////function//////////////////////////////////////////////
    
    // function createHtml(){
    //    //return createData() //get the two functions to connect
      
    //    let result = '';
       
    //     for (const {week, day} of value){
    //     let inner = [];
    //     addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
    //     for (let i = 0; i< day; i++){
    //         let classString = "table__cell table__cell_sidebar";
    //         isToday = new Date(value)
    //         isWeekend = dayOfweek[1] && dayOfWeek[7]
    //         isAlternate  = week % 2
    //         classString = "table__cell "
    
    //         if (isToday){
    //             classString = `${classString}'table__cell_today'`
    //         }
    //         if(isWeekend0){
    //             classString = `${classString} table__cell_weekend`
    //         }
    //         if (isAlternate){
    //             classString = `${classString} table__cell_alternate`
    //         }
    //         inner.push(inner, classString, value)
    //     }
    //          result = `<tr>${inner}</tr>`
    //     }
    //     return result
    // }
    // console.log(createHtml())
    // //   function createHtml(data){
    
    
    // //      let result =  createData();
    
    // //      for (let {week,  days} of result) {    //week, day of data //let
    // //          let inner =[]
    // //          inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week/* week */}`)
        
    // //          for (let   value  in days) {    //let
    // //              let classString = "table__cell table__cell_sidebar"
    // //   		    let isToday = new Date().getDate() === value
    // //              let isWeekend = dayOfWeek == 1 && dayOfWeek == 7
    // //              let isAlternate = week% 2
    
                
    
    // //   			if (isToday) classString = `${classString} table__cell_today`
    // //              if (isWeekend) classString = `${classString} table__cell_weekend `   
    // //              if (isAlternate) classString = `${classString} table__cell_alternate`
    // //              action = addCell(inner, classString, value)
    // //          }
    // //          result = `${inner}`
    // //       }
    // //         return result 
    // //   }  
     
    //  //const current = new Date()
    //  //document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`
    
    //  const data = createData()
    //  document.querySelector('[data-content]').innerHTML = createHtml() 