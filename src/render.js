import { getWeather } from "./fetch";

const search=document.querySelector('#search');
const submit=document.querySelector('#submit')

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let value=search.value.trim();
    if(!value) return;
    
    getWeather(value);
    
})

search.addEventListener('keydown', (e)=>{
    if(e.key=='Enter')
    {
    e.preventDefault();
    let value=search.value.trim();
    getWeather(value);
    }
})