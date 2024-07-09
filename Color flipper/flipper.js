// =================*generating random number*================
const GenerateRandomNumber =()=>{
    return Math.floor(Math.random() * 10);
}

// ================*arrays of colors*==================
let arrColorSimple = ['red','blue','green','blueviolet','brown','aqua','coral','burlywood','cornflowerblue', 'pink'];

let arrHEXCode = ['#B1B2FF','#ABD9FF','#4C00330','#EEE3CB','#FFDE00','#EBC7E8','#FA9494','#704F4F','#90B77D','#002B5B'];

let arrRgbaColors = ['rgb(135, 162, 251)','rgb(173, 221, 208)','rgb(250, 148, 148)','rgb(245, 237, 220)','rgb(26, 77, 46)','rgb(178, 112, 162)','rgb(161, 194, 152)','rgb(172, 112, 136)','rgb(250, 244, 183)','rgb(225, 255, 238)']

// ====================*getting elements*==============================
let button = document.querySelector(".btn");
let bodyElement = document.querySelector('body');
let simple = document.querySelector(".simple");
let hex = document.querySelector(".hex");
let rgba = document.querySelector(".rgb");

// ===================*change color simple*========================
simple.addEventListener("click", ()=>{
    simple.style.color = 'rgb(75, 131, 251)';
    hex.style.color = 'black';
    rgba.style.color = 'black';
    button.addEventListener("click",()=>{
        let randomNumber = GenerateRandomNumber();
        document.querySelector(".background").innerHTML = "Background-color: " + arrColorSimple[randomNumber];
        bodyElement.style.backgroundColor = arrColorSimple[randomNumber];
    })
})


// ===================*change color hex code*======================
hex.addEventListener("click", ()=>{
    hex.style.color = 'rgb(75, 131, 251)';
    simple.style.color = 'black';
    rgba.style.color = 'black';

    button.addEventListener("click",()=>{
        let randomNumber = GenerateRandomNumber();
        document.querySelector(".background").innerHTML = "Background-color: " + arrHEXCode[randomNumber];
        bodyElement.style.backgroundColor = arrHEXCode[randomNumber];
    })
})


// ====================*Change color rgba*==============================
rgba.addEventListener("click" , ()=>{
    rgba.style.color = 'rgb(75, 131, 251)';
    simple.style.color = 'black';
    hex.style.color = 'black';
    button.addEventListener("click", ()=>{
        let randomNumber = GenerateRandomNumber();
        document.querySelector(".background").innerHTML = "Background-color: " + arrRgbaColors[randomNumber];
        bodyElement.style.backgroundColor = arrRgbaColors[randomNumber];
    })

})