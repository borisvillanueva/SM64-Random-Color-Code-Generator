

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//overalls
function genDifColorOveralls() {
    $("#overalls").css("background-color", randomColors());
}

//hat
function genDifColorHat() {
    $("#hat").css("background-color", randomColors());
}

//face
function genDifColorFace() {
    $("#face").css("background-color", randomColors());
}

//hair
function genDifColorHair() {
    $("#hair").css("background-color", randomColors());
}

//gloves
function genDifColorGloves() {
    $("#gloves").css("background-color", randomColors());
}

//shoes
function genDifColorShoes() {
    $("#shoes").css("background-color", randomColors());
}
