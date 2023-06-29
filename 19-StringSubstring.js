function solve(wordToFind, text) {
    const words = text.split(' ');

    let isFound = false;
  
    for (const word of words) {
      if(wordToFind.toLowerCase() === word.toLowerCase()){
      isFound = true;
      console.log(wordToFind);
      return;
      }
    }

    if(isFound === false){
        console.log(`${wordToFind} not found!`);
    }
}