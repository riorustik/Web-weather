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

function styleChange() {
    card.classList.add('active');
    card.style.height = '530px';
    searchBox.value = '';
}

function showWeather(res) {
    const iconUrl = `https://openweathermap.org/img/wn/${res.weather[0].icon}@4x.png`
    icon.src = iconUrl;
    cityName.innerHTML = res.name;
    hum.innerHTML = `${res.main.humidity} %`;
    wind.innerHTML = `${res.wind.speed} m/s`;
    temp.innerHTML = `${Math.round(res.main.temp)}°C`;
}

async function getWeather(city) {
    city = city.trim();
    if (!city) return;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('City not be found!');
        styleChange();
        const result = await response.json();
        showWeather(result)
    } catch (err) {
        alert(err)
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
});


searchBox.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        getWeather(searchBox.value);
    }
});

document.addEventListener('click', (e) => {
    if(card.classList.contains('active') && !card.contains(e.target)) {
        card.classList.remove('active');
        card.style.height = '230px';
    }
})


showDate()