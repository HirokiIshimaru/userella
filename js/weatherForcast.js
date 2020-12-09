let btn = document.getElementById('button');
btn.onclick = () =>{
    let writeCity = document.getElementById('writeCity').value;
    let targetCityName = writeCity;
    console.log(targetCityName);
    
    let appId = "97d4bb0a6e9b34ee8af6d4a48dcb3a0d";
    let requestUrl = `https://api.openweathermap.org/data/2.5/weather?APPID=${appId}&lang=ja&units=metric&q=${targetCityName},jp;`

    let xhr = new XMLHttpRequest();

    xhr.open("GET",requestUrl);

    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){
            ShowTodaysWeather(xhr.responseText);
        }
    }

    ShowTodaysWeather = function(response) {
        let obj = JSON.parse(response);
        
        let weather = obj.weather[0].description;
        let city = obj.name;
        let temp = obj.main.temp;



        let aaa = parseInt(temp, 10);

        console.log(`現在の${city}の天気は${weather}`);
        console.log(`気温は${aaa}度です`);

        let cityEl = document.getElementById('cityEl');
        let weatherEl = document.getElementById('weatherEl');
        cityEl.innerHTML = city;
        weatherEl.innerHTML = weather;
    }
}