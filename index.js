// Get a reference to the main element
const mainElement = document.getElementById('main');

// Check if the main element exists
if (mainElement) {
  // Get a reference to its parent node
  const parentElement = mainElement.parentNode;
  
  // Remove the main element from its parent node
  parentElement.removeChild(mainElement);
}
const newHeader= document.createElement('h1');
newHeader.textContent = 'This is a new header';
document.body.appendChild(newHeader);
newHeader.id='victory';
document.body.appendChild(newHeader)

const yourName= "Fletcher"
newHeader.textContent= yourName + "is the champion"
document.body.appandChild(newHeader)