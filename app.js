// Your Code Here

function alphabetize(word) {
  return word.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(text) {
  let comparison = alphabetize(text);
  let anagramsArray = [];
  for (let currentWord = 0; currentWord < words.length; currentWord++) {
    let compared = alphabetize(words[currentWord]);
    if (compared == comparison) {
      anagramsArray.push(words[currentWord]);
    }
  }
  let displayAnagrams = document.createElement("div");
  displayAnagrams.innerText = text + ": " + anagramsArray.join(" ");
  document.body.appendChild(displayAnagrams);

  event.preventDefault();
}

const button = document.getElementById("findButton");
button.onclick = function () {
  let typedText = document.getElementById("input").value;
  getAnagramsOf(typedText);
};
