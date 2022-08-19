const fs = require('fs');
const fileName = 'data/numbers.json';
const numbers = JSON.parse(fs.readFileSync(fileName));


export const numbersRepo = {
    getAll: () => numbers,
    scramble,
    draw
};

function scramble(){
    return numbers.sort( () => .5 - Math.random() );
}

function draw(n) {
    return scramble().slice(0, n).sort( (a, b) => a - b ); 
}