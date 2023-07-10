function solve(input){
    let movies = [];
    input.forEach((command) => {
        if (command.includes('addMovie')){
            const [_, name] = command.split('addMovie ');
            movies.push({
                name,
            }); 
        } else if (command.includes('directedBy')){
            const [name, director] = command.split(' directedBy ');
            const movieToCheck = movies.find(m => m.name === name);

            if (movieToCheck){
                movieToCheck.director = director;
            }
        } else if (command.includes('onDate')){
            const [name, date] = command.split(' onDate ');
            const movieToCheck = movies.find(m => m.name === name);

            if (movieToCheck){
                movieToCheck.date = date;
            }
        }        
    });
    
    movies.filter(m => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);