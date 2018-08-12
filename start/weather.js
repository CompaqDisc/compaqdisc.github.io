function getWeather() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Littleton&units=metric&APPID=b5ebe07d826c9cd2a7c5cee382f117c5')
    .then(res => {
        let rtemp = res.data.main.temp.toFixed(1);
        let code = res.data.weather[0].id;

        setWeather(rtemp, code);
        setIcon(code);
        saveToStorage(rtemp, code);
    })
    .catch(err => {
        // an error usually means we're making too many api calls
        // so we load the most recent data from localstorage
        loadFromStorage();
    })
}

function setWeather(rtemp) {
    document.getElementById('temperature').innerHTML = rtemp + '°';
}

function setIcon(code) {
    document.getElementById('weather-icon').className = 'owf-2x owf-' + code;
}

function saveToStorage(rtemp, code) {
    localStorage.setItem('temperature', rtemp);
    localStorage.setItem('code', code);
}

function loadFromStorage() {
    let rtemp = localStorage.getItem('temperature');
    let code = localStorage.getItem('code');

    setWeather(rtemp);
    setIcon(code);
}

window.onload = function() {
    getWeather();
}