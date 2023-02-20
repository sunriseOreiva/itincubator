//Add Length

function addLength(str) {
    const words = str.split(' ');
    const result = words.map(word => `${word} ${word.length}`);
    return result;
  }
  
  console.log(addLength("apple ban"));
  console.log(addLength("you will win"));