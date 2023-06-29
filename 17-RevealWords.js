function solve(firstWord, secondWord){
    let words = firstWord.split(', ');
    let stringForReplace = secondWord.split(' ');

    for (let i = 0; i < stringForReplace.length; i++) {
        const currentWord = stringForReplace[i];

        if(currentWord[0] === '*'){
            words.forEach(wordToReplace => {
                if(wordToReplace.length == currentWord.length){
                    stringForReplace[i] = wordToReplace;
                }
            });
        }
    }
    console.log(stringForReplace.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');