function solve(char1, char2){
    let chars = [];
    if (char1.charCodeAt(0) < char2.charCodeAt(0)){
        for (let index = char1.charCodeAt(0) + 1; index < char2.charCodeAt(0); index++) {
            let charIndex = String.fromCharCode(index);
            chars.push(charIndex);
        }
    }
    else{
        for (let index = char2.charCodeAt(0) + 1; index < char1.charCodeAt(0); index++) {
            let charIndex = String.fromCharCode(index);
            chars.push(charIndex);
        }
    }
    console.log(chars.join(' '));
}
solve('a','d');