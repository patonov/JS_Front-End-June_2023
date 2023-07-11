function solve(input){
    let wordsToFind = input[0].split(' ');
    let wordsWithCount = [];
    
    for (let index = 0; index < wordsToFind.length; index++) {
        const count = 0;
        let word = wordsToFind[index];
        wordsWithCount.push({word, count}); 
    }
    
    input.splice(0, 1, null);

    input.forEach((word) => {
        if (wordsToFind.includes(word)){
            let targetWord = wordsWithCount.find(t => t.word === word)
            targetWord.count++;
        }
    });

    wordsWithCount.sort((a, b) => (b.count - a.count))
    .forEach((w) => console.log(`${w.word} - ${w.count}`));
}

solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);