// Your Code Here

function alphabetize(word) {
  return word.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(text) {
  let comparison = alphabetize(text);
    let anagramsArray = []
  if (word of words.js == comparison.length) {
      let compared = alphabetize(word)
      if (compared == comparison) {
        anagramsArray.push(words.js[word])
    }
  }
  let displayAnagrams = document.createElement("div")
  displayAnagrams.innerText = JSON.stringify(anagramsArray)
  document.body.appendChild(displayAnagrams);
}

const button = document.getElementById("findButton");
button.onclick = function () {
  let typedText = document.getElementById("input").value;
  getAnagramsOf(typedText);
};
