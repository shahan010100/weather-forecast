import { getWeather } from "./fetch";

let wData;

const form=document.querySelector('form');
const search=document.querySelector('#search');
const loading=document.querySelector('.loading')
const days=["day1", 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let value=search.value.trim();
    if(!value) return;
    loading.hidden=false;
    try{
    wData=await getWeather(value);
    let i=0;
    days.forEach((day)=>{
    const selected=document.querySelector(`#${day}`);
    if(wData)
    {
        const temp=selected.querySelector(".temp>span:nth-child(2)");
        temp.textContent="";
        temp.textContent=wData.days[i].temp;

        const condition=selected.querySelector(".temp>span:nth-child(3)");
        condition.textContent="";
        condition.textContent=wData.days[i].conditions;

        const sunrise=selected.querySelector(".other .sun>span:first-child");
        sunrise.textContent="Sunrise:";
        sunrise.textContent+=wData.days[i].sunrise;

        const sunset=selected.querySelector(".other .sun>span:last-child");
        sunset.textContent="Sunset:";
        sunset.textContent+=wData.days[i].sunset;

        const humidity=selected.querySelector(".other .humidity>span:first-child");
        humidity.textContent="Humidity:";
        humidity.textContent+=wData.days[i].humidity;

        const dew=selected.querySelector(".other .humidity>span:last-child");
        dew.textContent="Dew:"
        dew.textContent+=wData.days[i].dew;

        if(i!=0 && i!=1)
        {
            const date=selected.querySelector(".temp>span:first-child");
            date.textContent="";
            date.textContent=wData.days[i].datetime;
        }



        i++;
    }
})
    }catch(err)
    {
        alert(err);
    }finally{
    loading.hidden=true;
    }
})