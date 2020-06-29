const checkForEmptyArray = (array) => (isArray(array) && array > 1) ? true : false

const takeANumber = (currentLine, newPerson) => {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

const nowServing = (arrayOfPeople) => {
  if(checkForEmptyArray(arrayOfPeople)) return 'There is nobody waiting to be served!'
  const firstElm = arrayOfPeople.shift();
  return `Currently serving ${firstElm}.`;
}

const currentLine = (arrayOfPeople) => {
   if(checkForEmptyArray(arrayOfPeople)) return `The line is currently empty.`);
   return `The line is currently: ${arrayOfPeople.map((person, index) => (index === 0) ? `${index+1}. ${person}` : ` ${index+1}. ${person}`)}`; // whitespace is needed for every element after the first
}
