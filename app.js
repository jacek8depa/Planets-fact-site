


const buttons = document.querySelectorAll('.btn');

function changeFocusColor(color) {
    if (window.matchMedia("(min-width: 601px)").matches) {
        buttons.forEach((button) => {
            button.addEventListener('focus', () => {
                button.style.backgroundColor = color
                button.style.outline = 'none';
            })
            button.addEventListener('blur', () => {
                button.style.backgroundColor = '';
                button.style.outline = '';
            });
        })
    } else {
        buttons.forEach((button) => {
            button.addEventListener('focus', () => {
                button.style.borderBottom = `4px solid ${color}`
                button.style.outline = 'none';
            })
            button.addEventListener('blur', () => {
                button.style.borderBottom = '';
                button.style.outline = '';
            });
        })
    }
}

const planetName = document.querySelector('.planet-name')
const planetImg = document.querySelector('.planet-img')
const planetStructureImg = document.querySelector('.planet-structure-img')
const planetoverview = document.querySelector('.par-overview')
const planetStructure = document.querySelector('.par-structure')
const planetGeology = document.querySelector('.par-geology')
const planetGeologyImg = document.querySelector('.geology-img')

const detailOne = document.querySelector('.info-1')
const detailTwo = document.querySelector('.info-2')
const detailThree = document.querySelector('.info-3')
const detailFour = document.querySelector('.info-4')


async function dupa(ej) {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const name = data[ej].name;
        const overview = data[ej].overview.content;
        const overviewSource = data[ej].overview.source;
        const structure = data[ej].structure.content;
        const structureSource = data[ej].structure.source;
        const geology = data[ej].geology.content;
        const geologySource = data[ej].geology.source;
        const rotation = data[ej].rotation;
        const revolution = data[ej].revolution;
        const radius = data[ej].radius;
        const temperature = data[ej].temperature;
        const planetImage = data[ej].images.planet;
        const internalImage = data[ej].images.internal;
        const geologyImage = data[ej].images.geology;
        planetName.textContent = name
        planetImg.src = planetImage
        planetStructureImg.src = internalImage
        planetoverview.textContent = overview
        planetStructure.textContent = structure
        planetGeology.textContent = geology
        detailOne.textContent = rotation
        detailTwo.textContent = revolution
        detailThree.textContent = radius
        detailFour.textContent = temperature
        planetGeologyImg.src = geologyImage

    } catch (error) {
        prompt('error')
    }
}

const menuOptions = document.querySelectorAll('.menu-opt')

let colors = {
    mercury: '#419EBB',
    venus: '#EDA249',
    earth: '#6f2ed6',
    mars: '#CD5120',
    jowisz: '#D14C32',
    saturn: '#D83A34',
    uran: '#1ec2a4',
    neptun: '#2d68f0'
}

const colorArray = Object.values(colors)

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener('click', () => {
        dupa(i)
        changeFocusColor(colorArray[i])
        buttons[0].focus()
        obrazki.forEach((obr) => {
            obr.style.display = 'none'
        })
        obrazki[0].style.display = 'block'
        paragraphs.forEach((par) => {
            par.style.display = 'none'
        })
        paragraphs[0].style.display = 'block'
        if (!window.matchMedia("(min-width: 601px)").matches) {
            mainMenu.style.transform = "translateX(600px)"
            mainMenu.style.zIndex = '2'
        }
    })
}

changeFocusColor(colorArray[0])

buttons[0].focus()

const paragraphs = document.querySelectorAll('.par-1')
const obrazki = document.querySelectorAll('.obrazek')

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        paragraphs.forEach((par) => {
            par.style.display = 'none'
        })
        obrazki.forEach((obr) => {
            obr.style.display = 'none'
        })
        paragraphs[i].style.display = 'block'
        obrazki[i].style.display = 'block'
        if (i == 2) {
            obrazki[0].style.display = 'block'
        }
    })
})

const dots = document.querySelectorAll('.dot')

function changeDotColor() {
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = colorArray[index]
    })
}
changeDotColor();

const hamburger = document.querySelector('.icon-hamburger')
const mainMenu = document.querySelector('.main-menu')

hamburger.addEventListener('click', () => {
    if (window.getComputedStyle(mainMenu).zIndex == "2") {
        mainMenu.style.transform = "translateX(0)"
        mainMenu.style.zIndex = '3'
    } else {
        mainMenu.style.transform = "translateX(100%)"
        mainMenu.style.zIndex = '2'
    }
})


