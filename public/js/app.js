fetch('/weather?address=7h7.gygy').then((response)=>{
    response.json().then(data=>{
        if (data.error){
            console.log(data.error);
            return
        }
        console.log(data.location);
        console.log(data.forecastData);
    })
})