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
    const weeks = createArray(6);  //defined
    const days = createArray(7);


    const current = new Date();
    current.setDate(1); 

    const startDay = current.getDay();  //changed
    const daysInMonth = getDaysInMonth(current);
    
    let emptyArray = [];
  
    for (let weekIndex in weeks) {
      const value = {
        days: [],
      };
      
      for (let dayIndex in days) {
        let valueDay = dayIndex - startDay + 1 + weekIndex * 7 
        const isValid = valueDay > 0 && valueDay <= daysInMonth;    

        value.days.push({
          value: isValid ? valueDay : ' ',
           
        });
        
      }
  
      emptyArray.push(value);
    }
  
    return emptyArray;
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
 
  function createHtml(){
    //return createData() //get the two functions to connect
    let result = '';

    for (let weekIndex in data) {
      const week = data[weekIndex]; 
      let inner = '';

      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${weekIndex}`);
      
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
//   ];
  
//   const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
// // Only edit below 
// /////////////////////////////////function//////////////////////////////////////////////
//   function createArray(length) {
//     const result = [];
  
//     for (let i = 0; i < length; i++) {
//       result.push(i);
//     }
  
//     return result;  
//   };
  
// /////////////////////////////////function//////////////////////////////////////////////

//   function createData(){
//     const weeks = createArray(6);
//     const days = createArray(7);


//     const current = new Date();
//     current.setDate(1); //////////////////////////////////////////////////////////// check
//     const startDay = current.getDay();
//     const daysInMonth = getDaysInMonth(new Date);
    
//     let result = [];
  
//     for (let weekIndex in weeks) {
//       const value = {
//         //week: weekIndex + 1,
//         days: [],
//       };
      
//       for (let dayIndex in days) {
//         let day = dayIndex - startDay + 1 + weekIndex *7 
//         const isValid = day > 0 && day <= daysInMonth;    
        
//         value.days.push({
//             //dayOfWeek : weekIndex + 1,
//             value: isValid ? day : ' ',
//         });
//       }
  
//       result.push(value);
//     }
  
//     return result;
//   };

// /////////////////////////////////function//////////////////////////////////////////////
  
//   function addCell(existing, classString, value){
//     return /* html */ `${existing}
//       <td class="${classString}">
//       ${value}
//       </td>
      
//     `;

//   };
  
//  /////////////////////////////////function//////////////////////////////////////////////  
 
//   function createHtml(data){
//     //return createData() //get the two functions to connect
//     let result = '';
  
//     for (let weekIndex in data) {
//       const week = data[weekIndex];
//       let inner = '';
  
//       inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${weekIndex}`);
//       console.log(inner)
//       for (let dayIndex in week.days) {
//         const day = week.days[dayIndex];
        
//         let classString = 'table__cell';
//         const isToday = new Date().getDate() === day.value;
//         const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
//         const isAlternate = weekIndex % 2;
  
//         if (isToday) {
//           classString = `${classString} table__cell_today`;
//         }
//         if (isWeekend) {
//           classString = `${classString} table__cell_weekend`;
//         }
//         if (isAlternate) {
//           classString = `${classString} table__cell_alternate`;
//         }
  
//         inner = addCell(inner, classString, day.value);
//       }
  
//       result +=`<tr>${inner}</tr>`;
//     }
  
//     return result;
//   };
  
//   // Only edit above
  
//   const current = new Date();
//   document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
//   const data = createData();
//   document.querySelector('[data-content]').innerHTML = createHtml(data);