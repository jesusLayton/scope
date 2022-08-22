/* function nome(cois){
    let sace = 0;
    sace +=cois;
    console.log(`nome: $${sace}`)
}

nome(5);
nome(5);
 */

function nome(){
    let sace = 0;
    function count(conis){
        sace += conis
        console.log(`nome: $${sace}`)

    }
    return count;
}

const m = nome();
m(5);
m(5);
m(15);