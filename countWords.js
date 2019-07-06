let text = 'blue fish, red Fish! blue fish, red Fish! blue fish, red Fish! blue fish, red Fish!';

console.log(countWords(text));

function countWords(inputString) {
  let wordsUsed = {};
  let sanitizedInput = inputString.replace(/[^a-zA-Z ]/g, "")
  let wordsArray = sanitizedInput.toLowerCase().split(' ')
    for(let i = 0; i<wordsArray.length; i++) {
      if(wordsUsed[wordsArray[i]]){
        wordsUsed[wordsArray[i]] += 1;
      } else {
        wordsUsed[wordsArray[i]] = 1;
      }  
    }
  console.log(wordsArray)
  return wordsUsed
}