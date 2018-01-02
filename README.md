# Samples Readme

This repo contains code samples that demonstrate various things.
Most only useful for personal use. But some may be of wider interest.

Below find an inventory.

## BlackFridayTraceRenderer

This BF renderer simply reports on the AST that is parsed by 
the BlackFriday Markdown v2 parser. It takes no input and outputs the 
"report" to STDOUT. The markdown to be processed must be assigned to the
content variable at the bottom of the source. 

Here are examples as of this writing:

```
/*
Pick which "content" you wich to process by leaving it
un-commented
*/

/*
var content = []byte(
	`# Heading 1
This test shows a code block inside a blockquote.

> Example 1
>
>     sub routine {
>        print "hi";
>     }

See above sample!
`)
*/

var content = []byte(
	`# Heading 1
Lines in a single paragraph
that are spread across
three lines in the text file.
`)
```