// Write a Function that takes two parameters and returns either is landscape or portrait.

function isLandScape(width, heigth) {
    return width > heigth ? 'Landscape' : 'Portrait';
}

let result = isLandScape(200, 100);
console.log(result);