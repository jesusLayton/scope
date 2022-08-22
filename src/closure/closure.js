function saludos(){
    let nombre ='jesus';
    function diosplay(){
        return `hola ${nombre}`
    }
    return diosplay
}

const g= saludos();

console.log(g)
console.log(g());