const takeANumber = (currentLine, newPerson) => {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

const nowServing = (arrayOfPeople) => {
  const firstElm = array1.shift();
  return `Currently serving ${firstElm}`
}

const currentLine = (arrayOfPeople) => {
  if(arrayOfPeople.length == 0) return `The line is currently empty`
   return `The line is currently: ${arrayOfPeople.map((person, index) => `${index+ 1}. ${person}`)}`
}
