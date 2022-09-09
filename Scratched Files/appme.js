function buttonClick() {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    document.getElementById('colorsp').innerHTML = generatedColor;

    $("#overalls").css("background-color", generatedColor);
    $("#colorsp").css("background-color", generatedColor);
}

document.getElementById("chOver")
    .addEventListener("click", buttonClick);

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


