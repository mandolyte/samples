
// Find words by searching for sequences of non-whitespace characters.
function getMdWords(str) {
    let s;
    // replace all markdown links with a space
    s = str.replace(/\[.*\]\(.*\)/g,' ');
    // handle numbers with colons between them
    s = s.replace(/(\d+):(\d+)/g, '$1 $2'); 
    // handle numbers with dashes between them
    s = s.replace(/(\d+)-(\d+)/g, '$1 $2'); 
    // handle decimal numbers 
    // WARNING: the below only works for decimal points (periods)
    s = s.replace(/(\d+)\.(\d+)/g, '$1_DECIMAL_$2');
    // tN occurrence notes (tsv format) have markdown and 
    // use <br> to indicate line breaks.
    s = s.replace(/<br>/g, '\n'); // change <br> to new line character
    // discount the numerals used on an ordered list
    s = s.replace(/^\d+\. |\n\d+\. /g, ' ');
    // remove all non-word and non-space characters
    s = s.replace(/[^\w\s]|_/g, ''); 
    // change all multiple sequences of space to single space
    s = s.replace(/\s+/g, ' '); 
    return s.toLowerCase().match(/\S+/g) || [];
}

function wordCount(str) {
    // return a object with two results: 
    // Total word count and distinct word count
    let counts = {};
    counts["total"] = getMdWords(str).length;
    counts["distinct"] = [...new Set(getMdWords(str))].length;
    let l1count = str.replace(/<br>/g, '\n').match(/^# |\n# /g) || [];
    counts["l1count"] = l1count.length;
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
let expected_l1counts = [0, 1, 1, 2, 1, 1];

for (var i=0; i < tests.length; i++) {
    let testnum = i;
    let ndistinct = expected_distinct[i];
    let ntotal    = expected_total[i];
    let nl1       = expected_l1counts[i];
    fs.readFile(tests[i], (err, data) => {
        if (err) throw err;
        let s = ""+data;
        let results = wordCount(s);
        console.log("---");

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

        let v = results.l1count;
        if ( v === nl1 ) {
            console.log("L1 Count Test #",testnum," passed:",v);
        } else {
            console.log("L1 Count Test #",testnum," failed:",v," - expected:",nl1);
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