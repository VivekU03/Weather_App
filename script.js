let loctn = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconFile;
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");


searchButton.addEventListener("click", (e) => {

    e.preventDefault();
    weatherInfo(searchInput.value);
    searchInput.value ='';

});

const weatherInfo = async (city) => {

    try {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=476ef24d138cc52d46b05d5fd7b63471`)
        
    

        const weatherData = await response.json();
        

        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];

        loctn.textContent = name;
        climate.textContent = main;
        tempValue.textContent = Math.round(feels_like - 273);
        
        if (id > 200 && id < 300) {
            tempIcon.src = "Icons/thunderstorm.png"
            console.log(tempIcon.src)
        }

        else if (id > 300 && id < 400) {
            tempIcon.src = "Icons/drizzle.png"
        }

        else if (id > 500 && id < 600) {
            tempIcon.src = "Icons/rain.png"
        }

        else if (id > 600 && id < 700) {
            tempIcon.src = "Icons/snow.png"
        }

    
        else if (id == 800) {
            tempIcon.src = "Icons/sun.png"
        }

        else if (id > 800 && id < 820) {
            tempIcon.src = "Icons/clouds.png"
        }

    }
    catch (error) {
        alert(" Enter City Not Found");
    }




};




window.addEventListener("load", () => {

    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=476ef24d138cc52d46b05d5fd7b63471`

            fetch(api).then((response) => {

                return response.json();

            })

                .then(data => {

                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    loctn.textContent = name;
                    climate.textContent = main;
                    tempValue.textContent = Math.round(feels_like - 273);

                    if (id > 200 && id < 300) {
                        tempIcon.src = "Icons/thunderstorm.png"
                    }

                    else if (id > 300 && id < 400) {
                        tempIcon.src = "Icons/drizzle.png"
                    }

                    else if (id > 500 && id < 600) {
                        tempIcon.src = "Icons/rain.png"
                    }

                    else if (id > 600 && id < 700) {
                        tempIcon.src = "Icons/snow.png"
                    }

                    else if (id == 800) {
                        tempIcon.src = "Icons/sun.png"
                    }

                    else if (id > 800 && id < 820) {
                        tempIcon.src = "Icons/clouds.png"
                    }

                })

        })

    }





})