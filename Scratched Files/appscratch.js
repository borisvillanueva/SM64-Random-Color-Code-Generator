function buttonClick() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp').innerHTML = generatedColor;

    $("#overalls").css("background-color", generatedColor);
    $("#colorsp").css("background-color", generatedColor);
}

document.getElementById("chOver")
    .addEventListener("click", buttonClick);

// //overalls
// let buttonSweet = document.getElementById("chOver")
//     .addEventListener("click", buttonClick);

// function buttonClick() {
//     // console.log('Button Clicked');
//     const randHex = Math.floor(Math.random() * 16777215).toString(16);
//     //console.log(randHex);
//     // document.getElementById('overalls').style.backgroundColor = randHex;
//     document.getElementById('colorsp').innerHTML = "#" + randHex;

//     // document.querySelector()
//     //     .getElementsByClassName.backgroundColor = randHex;
//     return '#' + randHex;
// }

// let overallSweet = document.getElementById("chOver")
//     .addEventListener("click", changeColOver);

// function changeColOver() {
//     $("#overalls").css("background-color", buttonClick);
//     // document.querySelector('#overalls').style.backgroundColor = 'buttonClick';
// }

// let boxSweet = document.getElementById("chOver")
//     .addEventListener("click", changeBoxCol);

// function changeBoxCol() {
//     $("#colorsp").css("background-color", buttonClick);
// }

// //overalls original
// const setBg = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     colorsp.innerHTML = "#" + randomColor;
//     return '#' + randomColor;
// }


// function genDifColorOveralls() {

//     $("#overalls").css("background-color", setBg);

// }


//hat
function buttonClick2() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp2').innerHTML = generatedColor;

    $("#hat").css("background-color", generatedColor);
    $("#colorsp2").css("background-color", generatedColor);
}

document.getElementById("chHat")
    .addEventListener("click", buttonClick2);
// const setBg2 = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     colorsp2.innerHTML = "#" + randomColor;
//     return '#' + randomColor;
// }

// function genDifColorHat() {
//     $("#hat").css("background-color", setBg2);
// }

//face

function buttonClick3() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp3').innerHTML = generatedColor;

    $("#face").css("background-color", generatedColor);
    $("#colorsp3").css("background-color", generatedColor);
}

document.getElementById("chFace")
    .addEventListener("click", buttonClick3);

// const setBg3 = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     colorsp3.innerHTML = "#" + randomColor;
//     return '#' + randomColor;
// }
// function genDifColorFace() {
//     $("#face").css("background-color", setBg3);
// }

//hair
function buttonClick4() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp4').innerHTML = generatedColor;

    $("#hair").css("background-color", generatedColor);
    $("#colorsp4").css("background-color", generatedColor);
}

document.getElementById("chHair")
    .addEventListener("click", buttonClick4);

// const setBg4 = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     colorsp4.innerHTML = "#" + randomColor;
//     return '#' + randomColor;
// }
// function genDifColorHair() {
//     $("#hair").css("background-color", setBg4);
// }

//gloves
function buttonClick5() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp5').innerHTML = generatedColor;

    $("#gloves").css("background-color", generatedColor);
    $("#colorsp5").css("background-color", generatedColor);
}

document.getElementById("chGloves")
    .addEventListener("click", buttonClick5);
// const setBg5 = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     colorsp5.innerHTML = "#" + randomColor;
//     return '#' + randomColor;
// }

// function genDifColorGloves() {
//     $("#gloves").css("background-color", setBg5);
// }

//shoes
function buttonClick6() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp6').innerHTML = generatedColor;

    $("#shoes").css("background-color", generatedColor);
    $("#colorsp6").css("background-color", generatedColor);
}

document.getElementById("chShoes")
    .addEventListener("click", buttonClick6);
// const setBg6 = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     colorsp6.innerHTML = "#" + randomColor;
//     return '#' + randomColor;
// }
// function genDifColorShoes() {
//     $("#shoes").css("background-color", setBg6);
// }

