# UnicodeCipher.js - A portable package that revolutionizes the encryption and decryption processes

## Information
A cipher that transcends more than just letters, it utilizes the entire Unicode Consortium, creates new ways to encrypt and decrypt text, and encompasses almost every world language that exists in the world! Whether you would like to use it for software of the past, or you want to use it to meet modern needs, the cipher is a very good way to hide messages and moreover protect information in a website!
## Usage
You can use this by attaching a script tag and put the script name in the src name of the script tag. For HTML Elements, there are variables of which they get their value from the tag of which contains an id. Insert a ID Name into the empty field, and don't forget to check that you put the id name as well for the HTML Element.
## Tips
### Typescript Reference in HTML
While Javascript files can be included in the script tag, you need to compile Typescript files, if you do not have a Typescript Compiler, you need to use the following command in the VScode terminal: npm install typescript --save-dev, which will give you a output, then use the command 'npx tsc' to install the Typescript Compiler. Afterwards, to compile a Typescript file, you must run the command 'tsc [filename].ts' to convert it into a js file (it will appear as a separate file).
### PHP
PHP is a server-side language, while HTML and Javascript are both client-side (although in some cases Javascript can be a server-side language [See Node.js: https://www.w3schools.com/nodejs/default.asp]), this means that the order of generation may differ, PHP code is executed first, followed by HTML, and then Javascript. If you don't want to go through the hassle of script execution order, you can copy the code from the Javascript file to the PHP file, although you should consider PHP syntax as well. Reference: https://www.w3schools.com/php/default.asp
### Javascript/Typescript ES6+
Otherwise known as ECMAScript 2015, allows the usage of let and const blocks to be added, JS Classes are added soon after. A JS Class is a template for objects, not merely a object itself, it also introduces import and export statements as well. Please check which file you want to use depending on what your intentions are, there are already files reserved for these things.
## Warnings
### Sensitive Information
Putting or attempting to put sensitive information into the input fields for input and keyword may carry some risk. See Security Details for more.
### Variables
Do not unbind the const variables from their values, nor change their values to something else, this may throw an error because const variables are immutable.
### Node Modules
Do not modify Node Modules, these are packages from NPM/NPX, and changing them would affect how the code runs.
### Compatibility
fromCharCode() and charCodeAt() can only go up to the limit of 16 bits in UTF-16 (U+0000 to U+FFFF), above this you need to have a surrogate pair, otherwise it won't show up, consider using fromCodePoint() and codePointAt() if you want to include all of the characters in the UTF-8 (0x0000 - 0x10FFFF).
## Fun Facts
1. UTF-8 is the current encoding system, including over 1 million characters, ranging from 1-4 bytes, and even more.
2. Indexes 32-127 of UTF-8 are the same as ASCII, even including its control characters.
3. Unlike ASCII, UTF-8 can support a wide variety of letters associated with other languages around the world.
