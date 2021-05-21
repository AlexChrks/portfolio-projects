const day = document.querySelector('.day');
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const changeBgButton = document.querySelector('.change-bg');
const quoteContainer = document.querySelector('.quote-container');
const quote = document.querySelector('blockquote');
const caption = document.querySelector('figcaption');
const changeQuoteButton = document.querySelector('.change-quote');
const weatherError = document.querySelector('.weather_error_block');


const showDay = () => {
    let today = new Date();
    let weekDayNum = today.getDay();
    let monthNum = today.getMonth();

    let fullDay = '';
    let dayOfMonth = today.getDate();
    let weekDay = '';
    let month = '';

    switch (weekDayNum) {
        case 0:
            weekDay = 'Sunday';
            break;
        case 1:
            weekDay = 'Monday';
            break;
        case 2:
            weekDay = 'Tuesday';
            break;
        case 3:
            weekDay = 'Wednesday';
            break;
        case 4:
            weekDay = 'Thursday';
            break;
        case 5:
            weekDay = 'Friday';
            break;
        case 6:
            weekDay = 'Saturday';
            break;
    }
    switch (monthNum) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }
    fullDay = `${weekDay}, ${dayOfMonth} ${month}`;
    console.log(fullDay);
    day.innerHTML = fullDay;
    setTimeout(showDay, 3600000);
}

const showTime = () => {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = today.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    if (minutes == '00' && seconds == '00') {
        setBackgroundAndGreet();
    }
    setTimeout(showTime, 1000);
}

//Delete content on click on input area

const deleteInput = () => {
    name.addEventListener('click', () => {
        name.textContent = '';
    });
    focus.addEventListener('click', () => {
        focus.textContent = '';
    });
}

//Switch bg clicking on button 

const changeBgClick = () => {
    const img = document.createElement('img');
    let src = '';
    if (hoursCounter > 23) {
        hoursCounter = 0;
    }
    if (hoursCounter >= 6 && hoursCounter < 12) {
        src = `assets/images/morning/${randomArr[hoursCounter]}.jpg`;
        img.src = src;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`;
        }
    }
    else if (hoursCounter >= 12 && hoursCounter < 18) {
        src = `assets/images/day/${randomArr[hoursCounter]}.jpg`;
        img.src = src;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`;
        }
    }
    else if (hoursCounter >= 18 && hoursCounter < 24) {
        src = `assets/images/evening/${randomArr[hoursCounter]}.jpg`;
        img.src = src;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`;
        }
    }
    else {
        src = `assets/images/night/${randomArr[hoursCounter]}.jpg`;
        img.src = src;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`;
        }
    }
    document.body.style.transition = '1s ease-in-out';
    changeBgButton.setAttribute("disabled", "true");
}

const disableButtonRemove = () => {
    changeBgButton.removeAttribute("disabled");
}
const today = new Date();
let hoursCounter = today.getHours();

changeBgButton.addEventListener('click', () => {

    hoursCounter++;
    changeBgClick();
    setTimeout(disableButtonRemove, 1000)
});

//Form random images array
let randomImageNumber = 0;
let randomArr = [];
let counter = 0;

for (let i = 0; randomArr.length < 24; i++) {
    randomImageNumber = 1 + Math.floor(Math.random() * 19);
    randomArr.push(randomImageNumber);
}

//Set bg and greeting

const setBackgroundAndGreet = () => {
    const today = new Date();
    let hours = today.getHours();
    if (hours >= 6 && hours < 12) {
        document.body.style.backgroundImage = `url('assets/images/morning/${randomArr[hours]}.jpg')`
        greeting.innerHTML = 'Good Morning,&nbsp;'
    }
    else if (hours >= 12 && hours < 18) {
        document.body.style.backgroundImage = `url('assets/images/day/${randomArr[hours]}.jpg')`
        greeting.innerHTML = 'Good Afternoon,&nbsp;'
    }
    else if (hours >= 18 && hours < 24) {
        document.body.style.backgroundImage = `url('assets/images/evening/${randomArr[hours]}.jpg')`
        greeting.innerHTML = 'Good Evening,&nbsp;'
    }
    else {
        document.body.style.backgroundImage = `url('assets/images/night/${randomArr[hours]}.jpg')`
        greeting.innerHTML = 'Good Night,&nbsp;'
        document.body.style.color = "white";
    }
    document.body.style.transition = '1s ease-in-out';

    // setTimeout(setBackgroundAndGreet, 3600000);
}

//Get Name from Local Storage
const getName = () => {
    if (localStorage.getItem('name') == null) {
        name.innerHTML = '[Enter Name]';
    }
    else {
        name.innerHTML = localStorage.getItem('name');
    }
}


//Get Focus from Local Storage
const getFocus = () => {
    if (localStorage.getItem('focus') == null) {
        focus.innerHTML = '[Enter Focus]'
    }
    else {
        focus.innerHTML = localStorage.getItem('focus');
    }
}

// Set name into local storage
const setName = (e) => {
    if (e.type == 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            if (e.target.innerHTML == '' || e.target.innerHTML == '&nbsp;') {
                getName();
                name.blur();
                return
            }
            else {
                localStorage.setItem('name', e.target.innerHTML);
                name.blur();
            }
        }
    }
    else {
        if (e.target.innerHTML == '' || e.target.innerHTML == '&nbsp;') {
            getName();
            name.blur();
            return
        }
        else {
            localStorage.setItem('name', e.target.innerHTML)
        }
    }
}

// Set focus into local storage
const setFocus = (e) => {
    if (e.type == 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            if (e.target.innerHTML == '' || e.target.innerHTML == '&nbsp;') {
                getFocus();
                focus.blur();
                return
            }
            else {
                localStorage.setItem('focus', e.target.innerHTML);
                focus.blur();
            }
        }
    }
    else {
        if (e.target.innerHTML == '' || e.target.innerHTML == '&nbsp;') {
            getFocus();
            focus.blur();
            return
        }
        else {
            localStorage.setItem('focus', e.target.innerHTML);
        }
    }
}

// Set quote
const getQuote = () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let randomQuoteNumber = Math.floor(Math.random() * 1643);
            quote.textContent = data[randomQuoteNumber].text;
            caption.textContent = data[randomQuoteNumber].author;
            quoteContainer.classList.remove('slideup-animation');
            void quoteContainer.offsetWidth;
            quoteContainer.classList.add('slideup-animation');
        });
}

//Get Weather from Local Storage
const getWeather = () => {
    document.querySelector('.city').innerHTML = localStorage.getItem('city');
    document.querySelector('.icon').innerHTML = localStorage.getItem('icon');
    document.querySelector('.temperature').innerHTML = localStorage.getItem('temperature');
    document.querySelector('.humidity').innerHTML = localStorage.getItem('humidity');
    document.querySelector('.wind').innerHTML = localStorage.getItem('wind');
    document.querySelector('.weather-content').classList.remove('slidein-animation');
    void document.querySelector('.weather-content').offsetWidth;
    document.querySelector('.weather-content').classList.add('slidein-animation');
}
const fadePopUp = () => {
    weatherError.classList.add('error_fade');
}

const errorNone = () => {
    weatherError.classList.add('error_none');
}


// Get city from input, prevent form reload, send fetch по on click button
let inputCity = '';
document.querySelector('.b_getCity').onclick = (e) => {
    e.preventDefault();
    inputCity = document.querySelector('.inputCity').value;
    if (inputCity == '') {
        return;
    }
    //Отправляем fetch запрос на текущую погоду

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=72a8e0566e40b16f5aa65595512e9983`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            if (data.cod == '404') {
                weatherError.innerHTML = '<p>Sorry... city is not found</p><img src="assets/images/crying-cat.png" alt="crying-cat">';
                weatherError.classList.remove('error_fade');
                weatherError.classList.remove('error_none');
                void weatherError.offsetWidth;
                weatherError.classList.remove('error_slidein');
                void weatherError.offsetWidth;
                weatherError.classList.add('error_slidein');
                setTimeout(fadePopUp, 3000);
                setTimeout(errorNone, 4000);


                return;
            }
            weatherError.classList.remove('error_slidein');
            weatherError.classList.remove('error_fade');
            localStorage.setItem('city', data.name);
            localStorage.setItem('icon', `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`);
            localStorage.setItem('temperature', Math.round(data.main.temp - 273) + '&deg');
            localStorage.setItem('humidity', `Humidity: ${data.main.humidity}%`);
            localStorage.setItem('wind', `Wind speed: ${data.wind.speed}m/s`);
            getWeather();
        })
        .catch(function () {
        });



}

//Run
showDay();
showTime();
setBackgroundAndGreet();
getName();
getFocus();
getWeather();
deleteInput();
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
document.addEventListener('DOMContentLoaded', getQuote);
changeQuoteButton.addEventListener('click', getQuote);