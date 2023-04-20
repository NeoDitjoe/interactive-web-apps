

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

  //nwabisa///////////////////////////
  let Athlete  = data.response.data.NM372.firstName +' '+ data.response.data.NM372.surname
  let races = Object.keys(data.response.data.NM372.races).length
    
  
  let title = document.createElement("h2");
  title.textContent = data.response.data.NM372.id;
  const dl = document.querySelector('body');
  dl.appendChild(title); 
  

   

  let day = new Date(data.response.data.NM372.races[1].date)  
  let timeAsArray = data.response.data.NM372.races[1].time[0] + data.response.data.NM372.races[1].time[1] + data.response.data.NM372.races[1].time[2] + data.response.data.NM372.races[1].time[3]
  timeAsArray = '00:'+ timeAsArray
  




  const element = document.querySelector("body");
  const fragment = document.createDocumentFragment();

  const athlete =  [ 'Athlete:' +' '+ Athlete,"Total Races: "+ races, 'Event Date : ' + day, 'Total Time: ' + timeAsArray ]


  athlete.forEach((athletes) => {
  const details = document.createElement("dl");
  details.textContent = athletes;
  fragment.appendChild(details);
    
   });
   element.appendChild(fragment);

 // schalk/////////////////////////
 const athleteSchalk = data.response.data.SV782.firstName +' '+ data.response.data.SV782.surname
 let racesSchalk = Object.keys(data.response.data.SV782.races).length
   
 
  let titleSchalk = document.createElement("h2");
  titleSchalk.textContent = data.response.data.SV782.id;
  const dd = document.querySelector('body');
  dd.appendChild(titleSchalk);


  let daySchalk = new Date(data.response.data.SV782.races[1].date)  
  let timeAsArraySchalk = data.response.data.SV782.races[1].time[0] + data.response.data.SV782.races[1].time[1] + data.response.data.SV782.races[1].time[2] + data.response.data.SV782.races[1].time[3]
  timeAsArraySchalk = '00:'+ timeAsArraySchalk


  const elementSchalk = document.querySelector("body");
  const fragmentSchalk = document.createDocumentFragment();

  const athlete2 =  [ 'Athlete:' +' '+ athleteSchalk,"Total Races: "+ racesSchalk, 'Event Date : ' + daySchalk, 'Total Time: ' + timeAsArraySchalk ]


  athlete2.forEach((athletes) => {
  const details = document.createElement("dl");
  details.textContent = athletes;
  fragment.appendChild(details);
    
   });
   element.appendChild(fragment);