function buttonClick(element, img) {
    const randHex = Math.floor(Math.random() * 16777215).toString(16);

    const generatedColor = '#' + randHex;

    element.innerHTML = generatedColor;

    $(img).css("background-color", generatedColor);
    $(element).css("background-color", generatedColor);
}
// let arr = document.querySelectorAll('hash')
// let arr2 = document.querySelectorAll('button2')

// document.getElementById("chOver")
//     .addEventListener("click", (event) => {
//         let children = Array.from(event.target.parentNode.children)
//         let div = ''
//         let img = ''
//         children.forEach((element) => {
//             if (element.classList.contains('color')) {
//                 div = element
//             }

//             if (element.tagName === 'IMG') {
//                 img = element
//             }
//         })
//         console.log(div)
//         console.log(img)
//         let element = div.children[0]
//         console.log(element)

//         // console.log(arr2.indexOf(event.target))

//         buttonClick(element, img)
//     });



document.querySelectorAll('.button2').forEach((element) => {
    element
        .addEventListener("click", (event) => {
            let children = Array.from(event.target.parentNode.children)
            let div = ''
            let img = ''
            children.forEach((element) => {
                if (element.classList.contains('color')) {
                    div = element
                }

                if (element.tagName === 'IMG') {
                    img = element
                }
            })
            console.log(div)
            console.log(img)
            let element = div.children[0]
            console.log(element)

            // console.log(arr2.indexOf(event.target))

            buttonClick(element, img)
        });
})



// document.getElementById("chHat")
//     .addEventListener("click", buttonClick2);

// //face

// function buttonClick3() {
//     const randHex = Math.floor(Math.random() * 16777215).toString(16);

//     const generatedColor = '#' + randHex;

//     document.getElementById('colorsp3').innerHTML = generatedColor;

//     $("#face").css("background-color", generatedColor);
//     $("#colorsp3").css("background-color", generatedColor);
// }

// document.getElementById("chFace")
//     .addEventListener("click", buttonClick3);

// //hair
// function buttonClick4() {
//     const randHex = Math.floor(Math.random() * 16777215).toString(16);

//     const generatedColor = '#' + randHex;

//     document.getElementById('colorsp4').innerHTML = generatedColor;

//     $("#hair").css("background-color", generatedColor);
//     $("#colorsp4").css("background-color", generatedColor);
// }

// document.getElementById("chHair")
//     .addEventListener("click", buttonClick4);

// //gloves
// function buttonClick5() {
//     const randHex = Math.floor(Math.random() * 16777215).toString(16);

//     const generatedColor = '#' + randHex;

//     document.getElementById('colorsp5').innerHTML = generatedColor;

//     $("#gloves").css("background-color", generatedColor);
//     $("#colorsp5").css("background-color", generatedColor);
// }

// document.getElementById("chGloves")
//     .addEventListener("click", buttonClick5);

// //shoes
// function buttonClick6() {
//     const randHex = Math.floor(Math.random() * 16777215).toString(16);

//     const generatedColor = '#' + randHex;

//     document.getElementById('colorsp6').innerHTML = generatedColor;

//     $("#shoes").css("background-color", generatedColor);
//     $("#colorsp6").css("background-color", generatedColor);
// }

// document.getElementById("chShoes")
//     .addEventListener("click", buttonClick6);


/*USA Code Generation*/
// var hex = document.getElementById("overalls").value;
var hex = document.getElementById("colorsp").innerHTML;
console.log(hex);
function generatePantsUSA() {
    var hex = document.getElementById("overalls").value;
    var r = hex.substr(1, 2).toUpperCase();
    var g = hex.substr(3, 2).toUpperCase();
    var b = hex.substr(5, 2).toUpperCase();

    var code = "8107EC20 " + r + g + "\r\n8107EC22 " + b + "00\r\n8107EC24 " + r + g + "\r\n8107EC26 " + b + "00\r\n8107EC28 " + r + g + "\r\n8107EC2A " + b + "00\r\n8107EC2C " + r + g + "\r\n8107EC2E " + b + "00";
    return code;
}

function generateCapUSA() {
    var hex = document.getElementById("capCol").value;
    var r = hex.substr(1, 2).toUpperCase();
    var g = hex.substr(3, 2).toUpperCase();
    var b = hex.substr(5, 2).toUpperCase();

    var code = "8107EC38 " + r + g + "\r\n8107EC3A " + b + "00\r\n8107EC3C " + r + g + "\r\n8107EC3E " + b + "00\r\n8107EC40 " + r + g + "\r\n8107EC42 " + b + "00\r\n8107EC44 " + r + g + "\r\n8107EC46 " + b + "00";
    return code;
}

function generateGlovesUSA() {
    var hex = document.getElementById("glovesCol").value;
    var r = hex.substr(1, 2).toUpperCase();
    var g = hex.substr(3, 2).toUpperCase();
    var b = hex.substr(5, 2).toUpperCase();

    var code = "8107EC50 " + r + g + "\r\n8107EC52 " + b + "00\r\n8107EC54 " + r + g + "\r\n8107EC56 " + b + "00\r\n8107EC58 " + r + g + "\r\n8107EC5A " + b + "00\r\n8107EC5C " + r + g + "\r\n8107EC5E " + b + "00";
    return code;
}

function generateShoesUSA() {
    var hex = document.getElementById("shoesCol").value;
    var r = hex.substr(1, 2).toUpperCase();
    var g = hex.substr(3, 2).toUpperCase();
    var b = hex.substr(5, 2).toUpperCase();

    var code = "8107EC68 " + r + g + "\r\n8107EC6A " + b + "00\r\n8107EC6C " + r + g + "\r\n8107EC6E " + b + "00\r\n8107EC70 " + r + g + "\r\n8107EC72 " + b + "00\r\n8107EC74 " + r + g + "\r\n8107EC76 " + b + "00";
    return code;
}

function generateFaceUSA() {
    var hex = document.getElementById("faceCol").value;
    var r = hex.substr(1, 2).toUpperCase();
    var g = hex.substr(3, 2).toUpperCase();
    var b = hex.substr(5, 2).toUpperCase();

    var code = "8107EC80 " + r + g + "\r\n8107EC82 " + b + "00\r\n8107EC84 " + r + g + "\r\n8107EC86 " + b + "00\r\n8107EC88 " + r + g + "\r\n8107EC8A " + b + "00\r\n8107EC8C " + r + g + "\r\n8107EC8E " + b + "00";
    return code;
}

function generateHairUSA() {
    var hex = document.getElementById("hairCol").value;
    var r = hex.substr(1, 2).toUpperCase();
    var g = hex.substr(3, 2).toUpperCase();
    var b = hex.substr(5, 2).toUpperCase();

    var code = "8107EC98 " + r + g + "\r\n8107EC9A " + b + "00\r\n8107EC9C " + r + g + "\r\n8107EC9E " + b + "00\r\n8107ECA0 " + r + g + "\r\n8107ECA2 " + b + "00\r\n8107ECA4 " + r + g + "\r\n8107ECA6 " + b + "00";
    return code;
}

function generateUSA() {
    document.getElementById("code").value = "";
    // alert("hi z");
    document.getElementById("code").value = generatePantsUSA() + "\r\n" + generateCapUSA() + "\r\n" + generateGlovesUSA() + "\r\n" + generateShoesUSA() + "\r\n" + generateFaceUSA() + "\r\n" + generateHairUSA();
    document.getElementById("type").innerHTML = "This code is for the <b>NTSC-U (American)</b> version.";
}