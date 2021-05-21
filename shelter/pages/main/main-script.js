// burger menu________________________________________________

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
    burger.style.transform = "rotate(90deg)";
    burger.style.transition = "0.85s ease-out";
    burgerSecond.style.transform = "rotate(90deg)";
    burgerSecond.style.transition = "0.85s ease-out";
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

// close burger-menu onclick on document_______________________
document.addEventListener('click', (event) => {
    if (event.path.includes(document.querySelector('.burger-first')) || event.path.includes(document.querySelector('.burger-menu')) || event.path.includes(document.querySelector('.popup')) || event.path.includes(sliderElements[0]) || event.path.includes(sliderElements[1]) || event.path.includes(sliderElements[2])) {
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

// slider _____________________________________________________

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
const arrows = document.querySelectorAll('.arrow');
let randomPets = [];
let tempArr = [];

//genrate random numbers from 0 to 8 to fill pets cards
const makeRandom = () => {
    let newRandomArr = [];
    let elemToPush = 0;
    for (let i = 0; newRandomArr.length < 3; i++) {
        elemToPush = Math.round(Math.random() * 7);
        if (newRandomArr.includes(elemToPush) || tempArr.includes(elemToPush)) {
            continue;
        }
        else {
            newRandomArr.push(elemToPush);
        }
    }
    tempArr = newRandomArr;
    return newRandomArr;

}

//add event listeners to arrows to change content of the cards on click
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        randomPets = makeRandom();
        sliderElements[0].children[1].textContent = pets[randomPets[0]].name;
        sliderElements[0].children[0].setAttribute("src", pets[randomPets[0]].img);

        sliderElements[1].children[1].textContent = pets[randomPets[1]].name;
        sliderElements[1].children[0].setAttribute("src", pets[randomPets[1]].img);

        sliderElements[2].children[1].textContent = pets[randomPets[2]].name;
        sliderElements[2].children[0].setAttribute("src", pets[randomPets[2]].img);
    })
});


// Animation of slider
arrows[0].addEventListener('click', () => {
    for (let item of sliderElements) {
        item.classList.remove('slider-animation-rtl');
        item.classList.remove('slider-animation-ltr');
        void item.offsetWidth;
        item.classList.add('slider-animation-ltr');
    }
});

arrows[1].addEventListener('click', () => {
    for (let item of sliderElements) {
        item.classList.remove('slider-animation-ltr');
        item.classList.remove('slider-animation-rtl');
        void item.offsetWidth;
        item.classList.add('slider-animation-rtl');
    }
});

// ___________________________________________________popup

const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup')

// display popup onclick on pets cards
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
    if (event.path.includes(document.querySelector('.popup')) || event.path.includes(sliderElements[0]) || event.path.includes(sliderElements[1]) || event.path.includes(sliderElements[2]) || event.path.includes(document.querySelector('.burger-first')) || event.path.includes(document.querySelector('.burger-menu'))) {
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
        console.log(elem.children)
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

