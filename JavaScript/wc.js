function extractSubstr(str, regexp) {
    return str.replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase().match(regexp) || [];
}

// Find words by searching for sequences of non-whitespace characters.
function getWordsByNonWhiteSpace(str) {
    return extractSubstr(str, /\S+/g);
}

// Find words by searching for valid characters between word-boundaries.
function getWordsByWordBoundaries(str) {
    return extractSubstr(str, /\b[a-z\d]+\b/g);
}

// Example of usage.
var edisonQuote = "I have not failed. I have just found 10,000 ways that won't work.";
var words1 = getWordsByNonWhiteSpace(edisonQuote);
var words2 = getWordsByWordBoundaries(edisonQuote);

console.log("Words by non-white space("+words1.length+"):"+words1);
console.log("Words by Word Boundaries("+words2.length+"):"+words2);

var words3 = [...new Set(getWordsByNonWhiteSpace(edisonQuote))].sort();
var words4 = [...new Set(getWordsByWordBoundaries(edisonQuote))].sort();

console.log("Distinct Words by non-white space("+words3.length+"):"+words3);
console.log("Distinct Words by Word Boundaries("+words4.length+"):"+words4);
console.log(words4);