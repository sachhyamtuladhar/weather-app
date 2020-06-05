const weatherForm = document.querySelector('#weatherForm');
const searchText = document.querySelector('#searchText');
const forecast = document.querySelector('#forecast');
const loc = document.querySelector('#location');

weatherForm.addEventListener('submit', e=>{
    e.preventDefault();
    loc.textContent =  'Loading...';
    forecast.textContent =  '';

    fetch(`/weather?address=${searchText.value}`).then((response)=>{
        response.json().then(data=>{
            if (data.error){
                loc.textContent=(data.error);
                return
            }
            loc.textContent =  data.location;
            forecast.textContent =  data.forecastData;
        })
    })
})