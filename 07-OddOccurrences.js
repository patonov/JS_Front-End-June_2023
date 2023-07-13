function solve(input){
    let words = input.split(' ').map(w => w.toLowerCase());
    let result = [];

    result = words.reduce((acc, cur, i) => { 
        if(!acc.hasOwnProperty(cur)){
            acc[cur] = 1;
        } else {
            acc[cur]++;
        }

        return acc;
    }, {});

    result = Object.entries(result).filter(([word, count]) => {
        if (count % 2 !== 0){
            return word;
        }
    }).map(ent => ent[0]);

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');