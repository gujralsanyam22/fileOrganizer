let path = require('path'); 
let fs = require('fs');

let inputArr = process.argv.slice(2);
// console.log(inputArr);

//to run this (node path.js abc.txt def.txt)

let fileName = inputArr[0];
let content = inputArr[1];

// console.log('fileName',fileName);
// console.log('content',content);


//it will print directory path,that we are working currently 
let currentPath = process.cwd();
 console.log(currentPath);


let joinedPath = path.join(currentPath,'abc','def','txt');
 console.log(joinedPath);


//it will tell the file name of given url
let file=path.basename('F:\\pepcoding-pp14\\dev\\file organizer\\pathModule\\path.js') //change '\' to '\\'
console.log(file);

//it will tell the extension name of file followed by url
let extensionoffile=path.extname('F:\pepcoding-pp14\dev\file organizer\pathModule\path.js');
console.log(extensionoffile);



let srcPath='/Users/hp/OneDrive/Desktop/wcat/fileOrganizer/f1.txt';
let destPath='/Users/hp/OneDrive/Desktop/wcat/fileOrganizer/f2.txt';

l


let toBeCopiedFileName=path.basename(srcPath);
let dest=path.join('/Users/hp/OneDrive/Desktop/wcat/fileOrganizer/dir',toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,dest);
// fs.copyFileSync(srcPath,dest);

