let app=document.querySelector('.weather_app');
let temp=document.querySelector('.temp');
let time=document.querySelector('.time');
let country=document.querySelector("#country")
let date=document.querySelector('.data');
let condition=document.querySelector('.condition');
let icon=document.querySelector('.icon');
let cloud=document.querySelector('.cloud');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let form=document.getElementById('Input');
let search=document.querySelector('.search');
let btn=document.querySelector('.btn_submit');
let all_city=document.querySelectorAll('.city');
console.log({test: icon.src})
let apiResponse = '';
let currentCity ='';
// console.log(all_city);
// console.log(temp)
let cityInput ='';
all_city.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput= e.target.innerHTML;
        // console.log(cityInput);
        getWeatherData(cityInput);
        // app.style.opacity = '0';
        console.log(cityInput)
    });
})
form.addEventListener('submit',(e)=>{
    if(search.value.length ==0){
        alert('Please type in a ctiy name');

    }else{
        cityInput ==search.value ;
        getWeatherData();
        search.value='';
        // app.style.opacity ='0';
    }
    e.preventDefault();
})

 async function getWeatherData(cityInput){
    apiResponse= await fetch(`http://api.weatherapi.com/v1/current.json?key=0c268d5acd654bae901174821220406&q=${cityInput||currentCity}&aqi=no`);
    let responesData =await apiResponse.json();
    // console.log(responesData);

    console.log(responesData.location);
     data(responesData);
}


function dayOfWeek(day , month , year){
    let weekday =["sunday" , "monday" , 'tuesday', "wenesday" ,"thursday" , "friday" , "saturday"];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()]
}
function data(responesData){

    console.log({nametest: responesData?.location?.name});
    console.log({icontest: responesData?.current?.condition?.icon});
    temp.innerHTML = responesData.current.temp_c+'&#176 ';
    condition.innerHTML = responesData.current.condition.text;
    time.innerHTML =responesData.location.localtime;
    country.innerHTML =responesData?.location?.name;
    cloud.innerHTML=responesData.current.cloud+'%';
    humidity.innerHTML = responesData.current.humidity;
    wind.innerHTML = responesData.current.wind_kph;
    icon.src = responesData?.current?.condition?.icon;

    if(condition.innerHTML=='Partly cloudy'){
        app.style.backgroundImage= `url(../img/chuttersnap-rk2s0sm8xF4-unsplash.jpg)`;
         btn.style.background = '#325c80';

    }
    else if(condition.innerHTML=='Sunny'){
        app.style.backgroundImage= `url(../img/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg)`;
         btn.style.background = '#fa6d1b';

    }
    else if(condition.innerHTML=='Light rain'){
        app.style.backgroundImage= `url(../img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg)`;
         btn.style.background = '#181e27';

    }else if(condition.innerHTML=='Cloudy'){
        app.style.backgroundImage= `url(../img/denys-nevozhai-duo-xV0TU7s-unsplash.jpg)`;
         btn.style.background = '#181e27';

    }else{
        app.style.backgroundImage= `url(../img/benjamin-sow-QjR_snVQn4c-unsplash.jpg)`;
         btn.style.background = '#181e27';

    }
 }
btn.addEventListener('click' ,function(){
     currentCity = search.value;
    console.log(currentCity);
    getWeatherData();
} )









