export async function getWeather(location){
    try{
    const response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=JL8H64QJ9VQMPL23Q9BBMSDRK`);
    
    if (!response.ok) {
      throw new Error("Weather data not found");
    }

    const weatherData=await response.json();

    console.log(weatherData);
    }catch (e){
        console.error(e);
    }
}