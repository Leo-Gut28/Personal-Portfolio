// import React, { useEffect, useState } from 'react';
// import './livedemo.css'; // Import CSS file

// const LiveDemo = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [city, setCity] = useState("Durham");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const apiKey = "4e3105c77b9f23f5c5116fd776f44b94";
//         fetchWeatherData(city, apiKey);
//     }, [city]);

//     const fetchWeatherData = async (city, apiKey) => {
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
//             if (!response.ok) {
//                 alert("No weather found.");
//                 throw new Error('Failed to fetch weather data');
//             }
//             const data = await response.json();
//             setWeatherData(data);
//             setLoading(false);
//         } catch (error) {
//             console.error(error);
//             setLoading(false);
//         }
//     };

//     const displayWeather = () => {
//         if (weatherData) {
//             const { name } = weatherData;
//             const { icon, description } = weatherData.weather[0];
//             const { temp, humidity } = weatherData.main;
//             const { speed } = weatherData.wind;
//             document.querySelector(".live-demo-city").innerText = "Weather in " + name;
//             document.querySelector(".live-demo-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//             document.querySelector(".live-demo-description").innerText = description;
//             document.querySelector(".live-demo-temp").innerText = temp + "°C";
//             document.querySelector(".live-demo-humidity").innerText = "Humidity: " + humidity + "%";
//             document.querySelector(".live-demo-wind").innerText = "Wind speed: " + speed + " km/h";
//             document.querySelector(".live-demo-weather").classList.remove("live-demo-loading");
//             // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
//             document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
            
//         }
//     };

//     const handleSearch = () => {
//         const input = document.querySelector(".live-demo-search-bar");
//         setCity(input.value);
//     };

//     useEffect(() => {
//         displayWeather();
//     }, [weatherData, displayWeather]);

//     return (
//         <div className="live-demo-container">
//             <div className="live-demo-card">
//                 <div className="live-demo-search">
//                     <input type="text" className="live-demo-search-bar" placeholder="Search" />
//                     <button className="live-demo-button" onClick={handleSearch}>
//                         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
//                         </svg>
//                     </button>
//                 </div>
//                 {loading ? (
//                     <div className="live-demo-weather live-demo-loading">
//                         <h2 className="live-demo-city">Loading...</h2>
//                     </div>
//                 ) : (
//                     <div className="live-demo-weather">
//                         <h2 className="live-demo-city">Weather in {weatherData.name}</h2>
//                         <h1 className="live-demo-temp">{weatherData.main.temp}°C</h1>
//                         <div className="live-demo-flex">
//                             <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" className="live-demo-icon" />
//                             <div className="live-demo-description">{weatherData.weather[0].description}</div>
//                         </div>
//                         <div className="live-demo-humidity">Humidity: {weatherData.main.humidity}%</div>
//                         <div className="live-demo-wind">Wind speed: {weatherData.wind.speed} km/h</div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LiveDemo;

import React, { useEffect, useState } from 'react';
import './livedemo.css'; // Import CSS file

const LiveDemo = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Durham");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = "4e3105c77b9f23f5c5116fd776f44b94";

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        const displayWeather = () => {
            if (weatherData) {
                const { name } = weatherData;
                const { icon, description } = weatherData.weather[0];
                const { temp, humidity } = weatherData.main;
                const { speed } = weatherData.wind;
                document.querySelector(".live-demo-city").innerText = "Weather in " + name;
                document.querySelector(".live-demo-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                document.querySelector(".live-demo-description").innerText = description;
                document.querySelector(".live-demo-temp").innerText = temp + "°C";
                document.querySelector(".live-demo-humidity").innerText = "Humidity: " + humidity + "%";
                document.querySelector(".live-demo-wind").innerText = "Wind speed: " + speed + " km/h";
                document.querySelector(".live-demo-weather").classList.remove("live-demo-loading");
                document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
            }
        };

        fetchWeatherData();
        displayWeather();
    }, [city, weatherData]);

    const handleSearch = () => {
        const input = document.querySelector(".live-demo-search-bar");
        setCity(input.value);
    };

    return (
        <div className="live-demo-container">
            <div className="live-demo-card">
                <div className="live-demo-search">
                    <input type="text" className="live-demo-search-bar" placeholder="Search" />
                    <button className="live-demo-button" onClick={handleSearch}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                    </button>
                </div>
                {loading ? (
                    <div className="live-demo-weather live-demo-loading">
                        <h2 className="live-demo-city">Loading...</h2>
                    </div>
                ) : (
                    <div className="live-demo-weather">
                        <h2 className="live-demo-city">Weather in {weatherData.name}</h2>
                        <h1 className="live-demo-temp">{weatherData.main.temp}°C</h1>
                        <div className="live-demo-flex">
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" className="live-demo-icon" />
                            <div className="live-demo-description">{weatherData.weather[0].description}</div>
                        </div>
                        <div className="live-demo-humidity">Humidity: {weatherData.main.humidity}%</div>
                        <div className="live-demo-wind">Wind speed: {weatherData.wind.speed} km/h</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LiveDemo;


