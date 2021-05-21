// burger menu_____________________________________________________________

const burgerMenu = document.querySelector('.burger-menu');
const burger = document.querySelector('.burger-first');
const header = document.querySelector('header');
const burgerSecond = document.querySelector('.second');
const burgerHeader = document.querySelector('.burger-header');
const blackout = document.querySelector('.blackout')
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burgerMenu.style.transform = "translateX(0)";
    header.style.opacity = "0";
    header.style.transition = "0.5s";
    burgerSecond.style.transform = "rotate(90deg)";
    burgerSecond.style.transition = "0.85s ease-out";
    burger.style.transform = "rotate(90deg)";
    burger.style.transition = "0.85s ease-out";
    blackout.style.display = "block";
    body.classList.add('remove-scroll');

});

burgerSecond.addEventListener('click', () => {
    burgerMenu.style.transform = "translateX(100%)";
    header.style.opacity = "1";
    burgerSecond.style.transform = "rotate(0deg)";
    burger.style.transform = "rotate(0deg)";
    blackout.style.display = "none";
    body.classList.remove('remove-scroll');
});


// close burger-menu and remove blackout onclick on document
document.addEventListener('click', (event) => {
    for (let item of sliderElements) {
        if (event.path.includes(item)) {
            return
        }
    }
    if (event.path.includes(document.querySelector('.burger-first'))) {
        return
    }
    else if (event.path.includes(document.querySelector('.burger-menu'))) {
        return
    }
    else if (event.path.includes(document.querySelector('.popup'))) {
        return
    }
    else {
        burgerMenu.style.transform = "translateX(100%)";
        header.style.opacity = "1";
        burgerSecond.style.transform = "rotate(0deg)";
        burger.style.transform = "rotate(0deg)";
        blackout.style.display = "none";
        body.classList.remove('remove-scroll');
    }
});

// slider__________________________________________________________________
const pets = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer-photo.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody-photo.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/catrine-photo.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

let sliderElements = document.querySelectorAll('.slider-elem');

// popup____________________________________________________________________

const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup')

sliderElements.forEach(elem => {
    elem.addEventListener('click', () => {
        popup.style.display = "flex";
        closePopup.style.display = "flex";
        blackout.style.display = "block";
        body.classList.add('remove-scroll');
    });
});

// close popup onclick on document
document.addEventListener('click', (event) => {
    for (let item of sliderElements) {
        if (event.path.includes(item)) {
            return
        }
    }
    if (event.path.includes(document.querySelector('.popup'))) {
        return
    }
    if (event.path.includes(document.querySelector('.burger-first'))) {
        return
    }
    else if (event.path.includes(document.querySelector('.burger-menu'))) {
        return
    }
    else {
        popup.style.display = "none";
        blackout.style.display = "none";
        closePopup.style.display = "none";
        body.classList.remove('remove-scroll');
    }
});

// close popup onclick close symbol
closePopup.addEventListener('click', (event) => {
    popup.style.display = "none";
    blackout.style.display = "none";
    closePopup.style.display = "none";
    body.classList.remove('remove-scroll');
});

// set popap content
const popupImage = document.querySelector('.popup-image');
const popupPetName = document.querySelector('.pet-name');
const petBreed = document.querySelector('.breed');
const petDescription = document.querySelector('.pet-description');
const petAge = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');

sliderElements.forEach(elem => {
    elem.addEventListener('click', () => {
        for (let item of pets) {
            if (elem.children[1].innerText == item.name) {
                popupImage.setAttribute("src", item.img);
                popupPetName.innerText = item.name;
                petBreed.innerText = `${item.type} - ${item.breed}`;
                petDescription.innerText = item.description;
                petAge.innerHTML = `<b>Age:</b> ${item.age}`;
                inoculations.innerHTML = `<b>Inoculations:</b> ${item.inoculations}`;
                diseases.innerHTML = `<b>Diseases:</b> ${item.diseases}`;
                parasites.innerHTML = `<b>Parasites:</b> ${item.parasites}`;
            }
        }
    });
});

// change bg of close button on blackout mouse over
document.addEventListener('mouseover', (event) => {
    if (event.path.includes(document.querySelector('.popup'))) {
        return
    }
    closePopup.classList.add('close-popup-hover-blackout')
});

popup.addEventListener('mouseover', () => {
    closePopup.classList.remove('close-popup-hover-blackout');
});

// ________________________________________________________________Pagination

let eightElementsArr = [];

const makeRandomPaginationEight = () => {
    let randomArr = [];
    let elemToPush = 0;
    for (let i = 0; randomArr.length < 8; i++) {
        elemToPush = Math.round(Math.random() * 7);
        if (randomArr.includes(elemToPush)) {
            continue;
        }
        else {
            randomArr.push(elemToPush);
        }
    }
    return randomArr;
}

for (let i = 0; i < 6; i++) {
    eightElementsArr.push(makeRandomPaginationEight());
}

//fill initial cards after reload
const fillInitialCards = () => {
    sliderElements[0].children[1].textContent = pets[eightElementsArr[0][0]].name;
    sliderElements[0].children[0].setAttribute("src", pets[eightElementsArr[0][0]].img);

    sliderElements[1].children[1].textContent = pets[eightElementsArr[0][1]].name;
    sliderElements[1].children[0].setAttribute("src", pets[eightElementsArr[0][1]].img);

    sliderElements[2].children[1].textContent = pets[eightElementsArr[0][2]].name;
    sliderElements[2].children[0].setAttribute("src", pets[eightElementsArr[0][2]].img);

    sliderElements[3].children[1].textContent = pets[eightElementsArr[0][3]].name;
    sliderElements[3].children[0].setAttribute("src", pets[eightElementsArr[0][3]].img);

    sliderElements[4].children[1].textContent = pets[eightElementsArr[0][4]].name;
    sliderElements[4].children[0].setAttribute("src", pets[eightElementsArr[0][4]].img);

    sliderElements[5].children[1].textContent = pets[eightElementsArr[0][5]].name;
    sliderElements[5].children[0].setAttribute("src", pets[eightElementsArr[0][5]].img);

    sliderElements[6].children[1].textContent = pets[eightElementsArr[0][6]].name;
    sliderElements[6].children[0].setAttribute("src", pets[eightElementsArr[0][6]].img);

    sliderElements[7].children[1].textContent = pets[eightElementsArr[0][7]].name;
    sliderElements[7].children[0].setAttribute("src", pets[eightElementsArr[0][7]].img);
}

fillInitialCards();

const makeUniqueSix = () => {
    let fullArr = [];
    let six = [];
    let temp = [];
    for (let item of eightElementsArr) {
        for (let elem of item) {
            fullArr.push(elem);
        }
    }
    let i = 0;
    while (fullArr.length > 0) {
        if (temp.includes(fullArr[i])) {
            i++;
        }
        else if (temp.length == 6) {
            six.push(temp);
            temp = [];
            i = 0;
        }
        else {
            temp.push(fullArr[i]);
            fullArr.splice(i, 1);
            i = 0;
        }
    }
    six.push(temp);
    return six;
}

const makeUniqueThree = () => {
    let fullArr = [];
    let three = [];
    let temp = [];
    for (let item of eightElementsArr) {
        for (let elem of item) {
            fullArr.push(elem);
        }
    }
    let i = 0;
    while (fullArr.length > 0) {
        if (temp.includes(fullArr[i])) {
            i++;
        }
        else if (temp.length == 3) {
            three.push(temp);
            temp = [];
            i = 0;
        }
        else {
            temp.push(fullArr[i]);
            fullArr.splice(i, 1);
            i = 0;
        }
    }
    three.push(temp);
    return three;
}

let sixElementsArr = makeUniqueSix();
let threeElementsArr = makeUniqueThree();

// buttons hover__________________________________________________________
const button = document.querySelectorAll('.switcher-buttons');
button.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add("buttons-hover");
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove("buttons-hover");
    });
});

//slider__________________________________________________________________

const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#prev');
const pageNumberStr = document.querySelector('#current');
const toStartButton = document.querySelector('#to-start');
const toLastButton = document.querySelector('#to-last');

//set attribute disable to initial page button
previousButton.setAttribute("disabled", true);
toStartButton.setAttribute("disabled", true);

//animation function_______________________

const animateTopBottom = () => {
    for (let item of sliderElements) {
        item.classList.remove('slider-animation-tb');
        item.classList.remove('slider-animation-bt');
        void item.offsetWidth;
        item.classList.add('slider-animation-tb');
    }
};

const animateBottomTop = () => {
    for (let item of sliderElements) {
        item.classList.remove('slider-animation-tb');
        item.classList.remove('slider-animation-bt');
        void item.offsetWidth;
        item.classList.add('slider-animation-bt');
    }
};

nextButton.addEventListener('click', () => {

    //increase current page number
    pageNumberInt = parseInt(pageNumberStr.innerText, 10);
    pageNumberInt++;
    pageNumberStr.innerText = `${pageNumberInt}`;

    //animation
    animateBottomTop();

    //fill content
    if (window.innerWidth >= 1280) {
        sliderElements[0].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][5]].img);

        sliderElements[6].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][6]].name;
        sliderElements[6].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][6]].img);

        sliderElements[7].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][7]].name;
        sliderElements[7].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][7]].img);

        if (pageNumberInt != 1) {
            previousButton.removeAttribute("disabled");
            previousButton.removeAttribute("style");
            previousButton.classList.remove('buttons-hover');
            toStartButton.removeAttribute("disabled");
            toStartButton.removeAttribute("style");
            toStartButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 6) {
            nextButton.style.background = '#f6f6f6';
            nextButton.style.cursor = 'default';
            nextButton.setAttribute("disabled", "true");

            toLastButton.style.background = '#f6f6f6';
            toLastButton.style.cursor = 'default';
            toLastButton.setAttribute("disabled", "true");
        }
    }
    else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        sliderElements[0].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][5]].img);

        if (pageNumberInt != 1) {
            previousButton.removeAttribute("disabled");
            previousButton.removeAttribute("style");
            previousButton.classList.remove('buttons-hover');
            toStartButton.removeAttribute("disabled");
            toStartButton.removeAttribute("style");
            toStartButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 8) {
            nextButton.style.background = '#f6f6f6';
            nextButton.style.cursor = 'default';
            nextButton.setAttribute("disabled", "true");

            toLastButton.style.background = '#f6f6f6';
            toLastButton.style.cursor = 'default';
            toLastButton.setAttribute("disabled", "true");
        }
    }
    else {
        sliderElements[0].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][2]].img);

        if (pageNumberInt != 1) {
            previousButton.removeAttribute("disabled");
            previousButton.removeAttribute("style");
            previousButton.classList.remove('buttons-hover');
            toStartButton.removeAttribute("disabled");
            toStartButton.removeAttribute("style");
            toStartButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 16) {
            nextButton.style.background = '#f6f6f6';
            nextButton.style.cursor = 'default';
            nextButton.setAttribute("disabled", "true");

            toLastButton.style.background = '#f6f6f6';
            toLastButton.style.cursor = 'default';
            toLastButton.setAttribute("disabled", "true");
        }
    }
});

previousButton.addEventListener('click', () => {

    //reduce current page number
    pageNumberInt = parseInt(pageNumberStr.innerText, 10);
    pageNumberInt--;
    pageNumberStr.innerText = `${pageNumberInt}`;

    animateTopBottom();

    if (window.innerWidth >= 1280) {
        sliderElements[0].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][5]].img);

        sliderElements[6].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][6]].name;
        sliderElements[6].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][6]].img);

        sliderElements[7].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][7]].name;
        sliderElements[7].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][7]].img);

        if (pageNumberInt != 6) {
            nextButton.removeAttribute("disabled");
            nextButton.removeAttribute("style");
            nextButton.classList.remove('buttons-hover');
            toLastButton.removeAttribute("disabled");
            toLastButton.removeAttribute("style");
            toLastButton.classList.remove('buttons-hover');

        }
        if (pageNumberInt == 1) {
            previousButton.style.background = '#f6f6f6';
            previousButton.style.cursor = 'default';
            previousButton.setAttribute("disabled", "true");

            toStartButton.style.background = '#f6f6f6';
            toStartButton.style.cursor = 'default';
            toStartButton.setAttribute("disabled", "true");
        }
    }
    else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        sliderElements[0].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][5]].img);


        if (pageNumberInt != 8) {
            nextButton.removeAttribute("disabled");
            nextButton.removeAttribute("style");
            nextButton.classList.remove('buttons-hover');
            toLastButton.removeAttribute("disabled");
            toLastButton.removeAttribute("style");
            toLastButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 1) {
            previousButton.style.background = '#f6f6f6';
            previousButton.style.cursor = 'default';
            previousButton.setAttribute("disabled", "true");

            toStartButton.style.background = '#f6f6f6';
            toStartButton.style.cursor = 'default';
            toStartButton.setAttribute("disabled", "true");
        }
    }
    else {
        sliderElements[0].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][2]].img);

        if (pageNumberInt != 16) {
            nextButton.removeAttribute("disabled");
            nextButton.removeAttribute("style");
            nextButton.classList.remove('buttons-hover');
            toLastButton.removeAttribute("disabled");
            toLastButton.removeAttribute("style");
            toLastButton.classList.remove('buttons-hover');

        }
        if (pageNumberInt == 1) {
            previousButton.style.background = '#f6f6f6';
            previousButton.style.cursor = 'default';
            previousButton.setAttribute("disabled", "true");

            toStartButton.style.background = '#f6f6f6';
            toStartButton.style.cursor = 'default';
            toStartButton.setAttribute("disabled", "true");
        }
    }
});

toStartButton.addEventListener('click', () => {
    pageNumberInt = 1;
    pageNumberStr.innerText = `${pageNumberInt}`;

    animateTopBottom();

    if (window.innerWidth >= 1280) {
        sliderElements[0].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][5]].img);

        sliderElements[6].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][6]].name;
        sliderElements[6].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][6]].img);

        sliderElements[7].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][7]].name;
        sliderElements[7].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][7]].img);

        if (pageNumberInt != 6) {
            nextButton.removeAttribute("disabled");
            nextButton.removeAttribute("style");
            toLastButton.removeAttribute("disabled");
            toLastButton.removeAttribute("style");
            nextButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 1) {
            previousButton.style.background = '#f6f6f6';
            previousButton.style.cursor = 'default';
            previousButton.setAttribute("disabled", "true");

            toStartButton.style.background = '#f6f6f6';
            toStartButton.style.cursor = 'default';
            toStartButton.setAttribute("disabled", "true");
        }
        toLastButton.classList.remove('buttons-hover');
    }
    else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        sliderElements[0].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][5]].img);


        if (pageNumberInt != 8) {
            nextButton.removeAttribute("disabled");
            nextButton.removeAttribute("style");
            toLastButton.removeAttribute("disabled");
            toLastButton.removeAttribute("style");
            nextButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 1) {
            previousButton.style.background = '#f6f6f6';
            previousButton.style.cursor = 'default';
            previousButton.setAttribute("disabled", "true");

            toStartButton.style.background = '#f6f6f6';
            toStartButton.style.cursor = 'default';
            toStartButton.setAttribute("disabled", "true");
        }
        toLastButton.classList.remove('buttons-hover');
    }
    else {
        sliderElements[0].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][2]].img);

        if (pageNumberInt != 16) {
            nextButton.removeAttribute("disabled");
            nextButton.removeAttribute("style");
            toLastButton.removeAttribute("disabled");
            toLastButton.removeAttribute("style");
            nextButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 1) {
            previousButton.style.background = '#f6f6f6';
            previousButton.style.cursor = 'default';
            previousButton.setAttribute("disabled", "true");

            toStartButton.style.background = '#f6f6f6';
            toStartButton.style.cursor = 'default';
            toStartButton.setAttribute("disabled", "true");
        }
        toLastButton.classList.remove('buttons-hover');
    }
});

toLastButton.addEventListener('click', () => {

    animateBottomTop();

    if (window.innerWidth >= 1280) {
        pageNumberInt = 6;
        pageNumberStr.innerText = `${pageNumberInt}`;

        sliderElements[0].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][5]].img);

        sliderElements[6].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][6]].name;
        sliderElements[6].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][6]].img);

        sliderElements[7].children[1].textContent = pets[eightElementsArr[pageNumberInt - 1][7]].name;
        sliderElements[7].children[0].setAttribute("src", pets[eightElementsArr[pageNumberInt - 1][7]].img);

        if (pageNumberInt != 1) {
            previousButton.removeAttribute("disabled");
            previousButton.removeAttribute("style");
            toStartButton.removeAttribute("disabled");
            toStartButton.removeAttribute("style");
            previousButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 6) {

            nextButton.style.background = '#f6f6f6';
            nextButton.style.cursor = 'default';
            nextButton.setAttribute("disabled", "true");

            toLastButton.style.background = '#f6f6f6';
            toLastButton.style.cursor = 'default';
            toLastButton.setAttribute("disabled", "true");

        }
        toStartButton.classList.remove('buttons-hover');
    }
    else if (window.innerWidth < 1280 && window.innerWidth >= 768) {

        pageNumberInt = 8;
        pageNumberStr.innerText = `${pageNumberInt}`;

        sliderElements[0].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][2]].img);

        sliderElements[3].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][3]].name;
        sliderElements[3].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][3]].img);

        sliderElements[4].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][4]].name;
        sliderElements[4].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][4]].img);

        sliderElements[5].children[1].textContent = pets[sixElementsArr[pageNumberInt - 1][5]].name;
        sliderElements[5].children[0].setAttribute("src", pets[sixElementsArr[pageNumberInt - 1][5]].img);

        if (pageNumberInt != 1) {
            previousButton.removeAttribute("disabled");
            previousButton.removeAttribute("style");
            toStartButton.removeAttribute("disabled");
            toStartButton.removeAttribute("style");
            previousButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 8) {
            nextButton.style.background = '#f6f6f6';
            nextButton.style.cursor = 'default';
            nextButton.setAttribute("disabled", "true");

            toLastButton.style.background = '#f6f6f6';
            toLastButton.style.cursor = 'default';
            toLastButton.setAttribute("disabled", "true");
        }
        toStartButton.classList.remove('buttons-hover');
    }
    else {
        pageNumberInt = 16;
        pageNumberStr.innerText = `${pageNumberInt}`;

        sliderElements[0].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][0]].img);

        sliderElements[1].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][1]].img);

        sliderElements[2].children[1].textContent = pets[threeElementsArr[pageNumberInt - 1][2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[threeElementsArr[pageNumberInt - 1][2]].img);

        if (pageNumberInt != 1) {
            previousButton.removeAttribute("disabled");
            previousButton.removeAttribute("style");
            toStartButton.removeAttribute("disabled");
            toStartButton.removeAttribute("style");
            previousButton.classList.remove('buttons-hover');
        }
        if (pageNumberInt == 16) {
            nextButton.style.background = '#f6f6f6';
            nextButton.style.cursor = 'default';
            nextButton.setAttribute("disabled", "true");

            toLastButton.style.background = '#f6f6f6';
            toLastButton.style.cursor = 'default';
            toLastButton.setAttribute("disabled", "true");
        }
        toStartButton.classList.remove('buttons-hover');
    }
});

//switch number of page if window size changed
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280 && parseInt(pageNumberStr.innerText, 10) > 6) {
        pageNumberStr.innerText = '6';
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1280 && parseInt(pageNumberStr.innerText, 10) > 8) {
        pageNumberStr.innerText = '8';
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1280 && parseInt(pageNumberStr.innerText, 10) == 6) {
        pageNumberStr.innerText = '8';
    }
    if (window.innerWidth < 768 && parseInt(pageNumberStr.innerText, 10) == 8) {
        pageNumberStr.innerText = '16';
    }
});

