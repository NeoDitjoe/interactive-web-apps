

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02 T 20:00 : 00.00 0Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
/* document.body.onload = createHtml

function createHtml (){ */
   /*   firstName, surname, id, races = athlete
    [date], [time] = races.reverse()  */
  
  /*    const fragment = document.createDocumentFragment(); 
    
     
    const title = document.createElement("body");
    const nwabisaId = document.createTextNode(data.response.data.NM372.firstName+'  '+ data.response.data.NM372.id + " " + details);
    title.appendChild(nwabisaId);
    const Ah2 = document.getElementById(' ');
    document.body.insertBefore(title, Ah2) } */
  
/*     const list = document.createElement(dl);
  
    const day = date.getDate();
    const month = MONTHS[date.month];
    const year = date.year;
  
    first, second, third, fourth = timeAsArray;
    total = first + second + third + fourth;
  
    const hours = total / 60;
    const minutes = total / hours / 60; */
  
/*     list.innerHTML = /* html `
      <dt>Athlete</dt>
      <dd>${firstName surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day month year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0) minutes}</dd>
    `; */
  
/*     fragment.appendChild(list);
  }
  
  [NM372], [SV782] = data
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782)); */










  // Only edit below this comment
  
/*     const createHtml = (athlete) => {
     const  athlete1 = [data.response.data.NM372.firstName + data.response.data.NM372.surname+ data.response.data.NM372.id+ data.response.data.NM372.races] 
     
    [date], [time] = races.reverse()
 
    const fragment = document.createDocumentFragment();
  
    title = document.createElement(h2);
    title= id;
    fragment.appendChild(title);
  
    const list = document.createElement(dl);
  
    const day = date.getDate();
    const month = MONTHS[date.month];
    const year = date.year;
  
    first, second, third, fourth = timeAsArray;
    total = first + second + third + fourth;
  
    const hours = total / 60;
    const minutes = total / hours / 60; */
  
  /*   list.innerHTML = /* html 
      <dt>Athlete</dt>
      <dd>${firstName surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day month year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0) minutes}</dd>
    `; */
  
  /*   fragment.appendChild(list);
  }
  
  [NM372], [SV782] = data
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782));  */


  // create 2 functions for the 2 athletes
  // now if the function has a specfic name it will log that details in that name
  

/* let athleteName1 = data.response.data.SV782.firstName
athleteName1 = 'Athlete: '+athleteName1 +' '+ data.response.data.SV782.surname */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let log = 2
let athlete = null
let athleteName = '1'


function createHTML() {

const fragment = athleteName === "Athlete: Nwabisa Masiko"
const whichAthlete = fragment ? athleteName : parseInt(athleteName)   /*  'Athlete: '+ data.response.data.NM372.firstName +' '+ data.response.data.NM372.surname */
athleteName = whichAthlete + 1


}

function createHTML2 (){
  createHTML()
  if (athleteName > 2)  {
    athlete =  'Athlete: '+data.response.data.NM372.firstName +' '+ data.response.data.NM372.surname; 
  }
  if (athleteName > 2)  log =  1
  if (athleteName > 3)  log =  2
  if (athleteName > 3)  athlete =  "weugvd"
} 


function createHTML3() {
  if ( athlete && log == 1){
    console.log(`${athlete}`)
  }
  if (athlete && log == 2){
    console.log(athlete)
  }
}



for (let i = 0; i < 4; i++) {
  createHTML3();
  createHTML2();
}



  