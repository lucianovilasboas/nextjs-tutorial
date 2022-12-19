export const amigo = {
    sortear
};

function scramble(nomes,n){
    // console.log("arguments:", arguments)

    if (n == undefined) n = 3

    for (let i = 0; i < n; i++) {
        nomes = nomes.sort( () => .5 - Math.random() );
        // console.log(`Laço=${i+1}`)
    }
    return nomes;
}


/* 
* Randomize array in-place using Durstenfeld shuffle algorithm 
* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle2(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function sortear(nomes){

    // let nomes_ = scramble(nomes['amigos'],2);
    let nomes_ = shuffle2(nomes['amigos']);

    let s = 1;
    let n = nomes_.length;

    let sort = new Array();

    for(let i=0;i<n;i++) {
        const amigo1 = nomes_[i];
        const amigo2 = nomes_[(i+s) % n];
        sort[i] = [ `${amigo1['nome']} -> ${amigo2['nome']}`, amigo1['email'] ];
    }

    return sort;
}





function sortear_(nomes) {

    // console.log(nomes);
    
    let nomes_ = scramble(nomes['amigos'],7);

    for (let index = 0; index < nomes_.length; index++) {
        const element = nomes_[index];
        console.log(element['nome']);
    }
    console.log("\n")

    return nomes_;
}