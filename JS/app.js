//overalls
const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorsp.innerHTML = "#" + randomColor;
    return '#' + randomColor;
}
function genDifColorOveralls() {

    $("#overalls").css("background-color", setBg);
    //$(".testo").css("background-color", setBg);
}

//hat
const setBg2 = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorsp2.innerHTML = "#" + randomColor;
    return '#' + randomColor;
}

function genDifColorHat() {
    $("#hat").css("background-color", setBg2);
}

//face

const setBg3 = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorsp3.innerHTML = "#" + randomColor;
    return '#' + randomColor;
}
function genDifColorFace() {
    $("#face").css("background-color", setBg3);
}

//hair
const setBg4 = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorsp4.innerHTML = "#" + randomColor;
    return '#' + randomColor;
}
function genDifColorHair() {
    $("#hair").css("background-color", setBg4);
}

//gloves
const setBg5 = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorsp5.innerHTML = "#" + randomColor;
    return '#' + randomColor;
}

function genDifColorGloves() {
    $("#gloves").css("background-color", setBg5);
}

//shoes
const setBg6 = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorsp6.innerHTML = "#" + randomColor;
    return '#' + randomColor;
}
function genDifColorShoes() {
    $("#shoes").css("background-color", setBg6);
}

