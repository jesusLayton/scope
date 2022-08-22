const my =0;

function g(){
    const number =1;
    console.log(my)

    function parent(){
        const iner = 2;
        console.log(number, my);

        function child(){
            console.log(iner, number, my)
        }
        return child();
    }
    return parent()
}
g();

