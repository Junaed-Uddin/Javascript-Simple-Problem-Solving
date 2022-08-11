// problem-2: isJavaScriptFile
/* This function will take a string as a parameter which will be a file name (eg 'index.js'). You should return true if it is a javascript file and false if not. */


function isJavaScriptFile(fileName) {
    // check if the filename isn't string
    if (typeof fileName != 'string') {
        return 'Please Insert the string';
    }
    // check if the filename isn't empty string or whitespace 
    else if (fileName === '' || fileName === ' ') {
        return 'String cannot be empty or whitespace';
    }
    else {
        // Check if there is .js at the end of the string
        if (fileName.trim().toLowerCase().slice(fileName.trim().length - 3) == '.js') {
            return true;
        }
    }
    return false;
}

let result = isJavaScriptFile('java.png.js');
console.log(result);