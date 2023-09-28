function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length; i++){
		let char = str.charAt(i);
	    // Check if the character appears only once in the string
	    if (str.indexOf(char) === str.lastIndexOf(char)) {
	      return char; // Found the first non-repeated character
    }
  }
  return null; // Return null if there are no non-repeated characters
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
