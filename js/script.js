//When page loads a prompt appears, 
//User types something to shout


//1. create variable to capture user response to prompt

var stringToShout = prompt("What should I shout?")

//2. another string to hold the toUpperCase method

var shout = stringToShout.toUpperCase();

//3.  add exclamation at the end

shout += "!!!";

// Send message back to them

alert(shout);



//  LESSON NOTES.  String Properties and Methods


//.length returns the number of characters inside a string
//
//var str = '9 letters';
//alert( str.length ); 
// opens an alert dialog with the number 9

//.toUpperCase() returns a copy of a string with all uppercase letters
//
//var str = 'upper';
//alert( str.toUpperCase() ); 
// opens an alert dialog with the string 'UPPER'

//.toLowerCase() returns a copy of a string with all lowercase letters
//
//var str = 'LOWER';
//alert( str.toLowerCase() ); 
// opens an alert dialog with the string 'lower'

