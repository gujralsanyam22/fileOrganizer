// let fs = require('fs');       //imports fs module

// let content = fs.readFileSync("f1.txt");        //Takes location and return its content to content variable
// console.log(content + " ");       //Buffer is FAST -> Uses Hexadecimal to store value

// fs.writeFileSync('abc.txt', 'timon n pumba');

// fs.appendFileSync('abc.txt', 'Hakunama tata');

// fs.unlinkSync('abc.txt');


// //Directories
// //to make a folder
// // fs.mkdirSync('pathModule');

// //to delete a folder
// // fs.rmdirSync('pathModule');

// //to check if a file exists or not
// let doesExist = fs.existsSync('fs.js');             //Output -> True or False

// console.log("fs.js file", doesExist);

// //statusObj of file/folder
// let statusObj = fs.lstatSync("f1.txt");
// console.log(statusObj);


// console.log(statusObj.isFile());                //Check is it file
// console.log(statusObj.isDirectory());           //Check is it folder

// let fileArr = fs.readdirSync('/Users/shash/Web Dev/fileOrganizer/fsModule');
// console.log(fileArr);  