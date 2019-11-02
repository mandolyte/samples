

function mDextractSubstr(str, regexp) {
    let s;
    s = str.replace(/\[.*\]\(.*\)/g,' ');
    s = s.replace(/(\d+):(\d+)/g, '$1 $2'); // handle numbers with colons between them
    s = s.replace(/(\d+)-(\d+)/g, '$1 $2'); // handle numbers with dashes between them
    return s.replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase().match(regexp) || [];
}

// Find words by searching for sequences of non-whitespace characters.
function getMdWords(str) {
    let s;
    s = str.replace(/\[.*\]\(.*\)/g,' ');
    s = s.replace(/(\d+):(\d+)/g, '$1 $2'); // handle numbers with colons between them
    s = s.replace(/(\d+)-(\d+)/g, '$1 $2'); // handle numbers with dashes between them
    s = s.replace(/[^\w\s]|_/g, ''); // remove all non-word and non-space characters
    s = s.replace(/\s+/g, ' '); // change all multiple sequences of space to single space
    return s.toLowerCase().match(/\S+/g) || [];
}

function wordCount(str) {
    return [...new Set(getMdWords(str))].length;
}

function getWords(str) {
    return [...new Set(getMdWords(str))].sort();
}

var fs    = require('fs');
//var util  = require('util');

let tests = ["test1.txt","test2.md", "test3.md", "test4.md", "test5.md", "test6.md"];
let expected = [11,7, 7, 3, 3, 12];

for (var i=0; i < tests.length; i++) {
    let testnum = i;
    let results = expected[i];
    fs.readFile(tests[i], (err, data) => {
        if (err) throw err;
        let s = ""+data;
        let t = wordCount(s);
        if ( t === results ) {
            console.log("Test #",testnum," passed:",t);
        } else {
            console.log("Test #",testnum," failed:",t," - expected:",results);
            console.log("Words are:",getWords(s))
        }
    });    
}


/* code graveyard...

function extractSubstr(str, regexp) {
    return str.replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase().match(regexp) || [];
}
*/