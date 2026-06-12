let weather= {
    api_key :"1a21f6d978dbfb004bc46ac8a6032ffd",

    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.api_key + "&units=metric")
        .then((response) => {
            if (!response.ok){
                alert("No Weather Data Found");
            }
            return response.json();
        })
        .then((data)=> this.displayweather(data));
    },

    displayweather: function(data){
       console.log(data);
       const {name} = data;
       const {temp,humidity}=data.main;
       const {description}=data.weather[0];
       const {speed}=data.wind

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " Km/h";
    },

    search: function(){
        this.fetchweather(document.querySelector(".input-city").value);
    }
};


document .querySelector(".input-city") .addEventListener("keydown", function(event) { 
    if (event.key == "Enter") {
         weather.search(); 
        } 
    });

