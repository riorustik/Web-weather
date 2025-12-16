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