function greeting(text){
    function greet(name){
        return text + ' ' + name + '!';
    }

    return greet;
}

const lastGreet = greeting('Zdravo');
console.log(lastGreet('Nikolay'));