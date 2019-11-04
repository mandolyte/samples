
// Find words by searching for sequences of non-whitespace characters.
function getMdWords(str) {
    let s;
    s = str.replace(/\[.*\]\(.*\)/g,' ');
    s = s.replace(/(\d+):(\d+)/g, '$1 $2'); // handle numbers with colons between them
    s = s.replace(/(\d+)-(\d+)/g, '$1 $2'); // handle numbers with dashes between them
    // WARNING: the below only works for decimal points (periods)
    s = s.replace(/(\d+)\.(\d+)/g, '$1_DECIMAL_$2'); // handle decimal numbers 
    s = s.replace(/[^\w\s]|_/g, ''); // remove all non-word and non-space characters
    s = s.replace(/\s+/g, ' '); // change all multiple sequences of space to single space
    return s.toLowerCase().match(/\S+/g) || [];
}

function wordCount(str) {
    // return a object with two results: 
    // Total word count and distinct word count
    let counts = {};
    counts["total"] = getMdWords(str).length;
    counts["distinct"] = [...new Set(getMdWords(str))].length;
    return counts;
}

function getDistinctWords(str) {
    return [...new Set(getMdWords(str))].sort();
}

function getTotalWords(str) {
    return [...getMdWords(str)].sort();
}



var fs    = require('fs');
//var util  = require('util');

let tests = ["test1.txt", "test2.md", "test3.md", "test4.md", "test5.md", "test6.md"];
let expected_distinct = [11,7, 7, 3, 3, 18];
let expected_total = [13, 24, 16, 4, 4, 26];

for (var i=0; i < tests.length; i++) {
    let testnum = i;
    let ndistinct = expected_distinct[i];
    let ntotal  = expected_total[i];
    fs.readFile(tests[i], (err, data) => {
        if (err) throw err;
        let s = ""+data;
        let results = wordCount(s);

        let t = results.distinct;
        if ( t === ndistinct ) {
            console.log("Distinct Test #",testnum," passed:",t);
        } else {
            console.log("Distinct Test #",testnum," failed:",t," - expected:",ndistinct);
            console.log("Words are:",getDistinctWords(s))
        }

        let u = results.total;
        if ( u === ntotal ) {
            console.log("Total Test #",testnum," passed:",u);
        } else {
            console.log("Total Test #",testnum," failed:",u," - expected:",ntotal);
            console.log("Words are:",getTotalWords(s))
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