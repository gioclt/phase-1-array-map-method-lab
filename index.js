const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased =() => {
  let sentence = tutorials.map(elem => elem.split(' '));
  for (let word in sentence) {
    for (let i = 0; i < sentence[word].length; i++) {
      sentence[word][i] = sentence[word][i][0].toUpperCase() + sentence[word][i].substr(1)
    }
    tutorials[word] = sentence[word].join(' ')
  }
  return tutorials;
}