# Word Count from Markdown

## Limitations

Does not handle reference style links, for either URLs or Images. For example:
```
Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

[I'm a reference-style link][Arbitrary case-insensitive reference text]


[arbitrary case-insensitive reference text]: https://www.mozilla.org
```

In this folder are six test cases and all are passing. To run, `node.js` must be installed.

Here are the results when run:
```
$ ls
README.md  test1.txt  test2.md  test3.md  test4.md  test5.md  test6.md  wc.js
$ node wc.js
Test # 0  passed: 11
Test # 1  passed: 7
Test # 2  passed: 7
Test # 4  passed: 3
Test # 3  passed: 3
Test # 5  passed: 12
$ 
```
