function solve(text) {
    const words = text.split(/(?=[A-Z])/);

    console.log(words.join(', '));
}

solve('HoldTheDoor');