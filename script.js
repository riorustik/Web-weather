const apiKey = 'bcbcaee233f22ad5b37d19f207ce168d';
const card = document.querySelector('.card');
const searchBox = document.querySelector('.input__card');
const temp = document.querySelector('.card__title-temp');
const icon = document.querySelector('.card__weather-icon');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('city');
const hum = document.getElementById('humidity');
const wind = document.getElementById('wind');
const date = document.getElementById('date');

const showDate = () => {
    const now = new Date();
    const day = now.getDate();
    const monthName = now.toLocaleString('en', {month: 'long'});
    date.innerHTML = `Today, ${day} ${monthName}`;
}
showDate()


async function getWeather(city) {
    city = city.trim();
    if (!city) return;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('City not be found!');
        const result = await response.json();
        const iconUrl = `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`
    } catch (err) {
        alert(err)
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
});
