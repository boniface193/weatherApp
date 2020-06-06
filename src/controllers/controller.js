const axios = require('axios')

const API_KEY = '2ff38da6fb8ff834daa7faa54c1f265d';



exports.renderHomePage = (req, res) => {
    res.render('index')

}

exports.getWeather = (req, res) => {
    const city = req.body.city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    axios.get(url)
        .then((response) => {
            res.render('index', {
                lat: `Lat: ${response.data.coord.lat}`,
                long: `Lon: ${response.data.coord.lon}`,
                temp: `Temp: ${response.data.main.temp}`,
                hum: `Humidity: ${response.data.main.humidity}`,
                wind: `Wind Speed: ${response.data.wind.speed}`,
                cloud: `Cloud: ${response.data.clouds.all}`,
                windy: `Wind Degree: ${response.data.wind.deg}`,
                country: `Country: ${response.data.sys.country}`,
                state: `City: ${response.data.name}`,
                sunrise: `Sunrise: ${response.data.sys.sunrise}`,
                sunset: `Sunset: ${response.data.sys.sunset}`,

            })
        })
        .catch((error) => {
            console.log(error)
        })
}