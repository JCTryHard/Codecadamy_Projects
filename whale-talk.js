let input = "Hi my name is Jess! Nice to meet you";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let vo = 0; vo < vowels.length; vo++) {
        if (vowels[vo] === input[i]) {
            resultArray.push(input[i]);
            if (input[i] === "e") {
                resultArray.push(input[i]);
            }
            if (input[i] === "u") {
                resultArray.push(input[i]);
            }
        }
    }
}
let resultsString = resultArray.join('')
console.log(resultsString.toUpperCase())