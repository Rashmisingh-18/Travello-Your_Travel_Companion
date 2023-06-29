import axios from 'axios';  //axios is the library that help us to make our calls

export const getPlacesData = async (type,sw,ne) => {//here rapid apis are used
    try{
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
          });

        return response.data.data;
    }
    catch(error){
        console.log(error)
    }   //we are calling this func in app.js
};

export const getWeatherData = async (lat,lng) => {//here rapid apis are used
  try{
    if(lat && lng){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY`);
     
      return response.data;
    }
  }
  catch(error){
      console.log(error)
  }   //we are calling this func in app.js
};


