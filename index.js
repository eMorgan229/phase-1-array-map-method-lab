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

// const titleCased = () => {
//   return tutorials.toUpperCase(string);
// }

//  const titleCased = () => {
   
//   return tutorials.map(element => {
//     return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//   });
// }
// const titleCased = () => { 
//   return tutorials.map((element) => {
//      const splitWords = element.split(' ');
//     const wordsInCaps = splitWords.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//     );
//       const newChangedArray =  wordsInCaps.join(' ');
//   return newChangedArray;
// };
// };

// console.log(titleCased);

const titleCased = () => {
  return tutorials.map((element) => {
    const splitWords = element.split(' ');
    const wordsInCaps = splitWords.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
      const newChangedArray = wordsInCaps.join(' ');
      return newChangedArray;
    });
  };


       
