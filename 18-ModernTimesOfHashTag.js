function solve(text) {
    const words = text.split(' ');
  
    for (const word of words) {
      if (word.startsWith('#')) {
        const justWord = word.substring(1);
        if (/^[a-zA-Z]+$/.test(justWord)) {
          console.log(justWord);
        }
      }
    }
  }

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');