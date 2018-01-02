package main

import (
	"fmt"
	"io"

	bf "gopkg.in/russross/blackfriday.v2"
)

func main() {

	r := NewTraceRenderer()
	_ = bf.Run(content, bf.WithRenderer(r))

}

// TraceRenderer is the struct to trace  of a markdown object
type TraceRenderer struct {
	// empty
}

// NewTraceRenderer creates and configures an TraceRenderer object,
// which satisfies the Renderer interface.
func NewTraceRenderer() *TraceRenderer {
	r := new(TraceRenderer)
	return r
}

// RenderNode is a default renderer of a single node of a syntax tree. For
// block nodes it will be called twice: first time with entering=true, second
// time with entering=false, so that it could know when it's working on an open
// tag and when on close. It writes the result to w.
//
// The return value is a way to tell the calling walker to adjust its walk
// pattern: e.g. it can terminate the traversal by returning Terminate. Or it
// can ask the walker to skip a subtree of this node by returning SkipChildren.
// The typical behavior is to return GoToNext, which asks for the usual
// traversal to the next node.
// (above taken verbatim from the blackfriday v2 package)
func (r *TraceRenderer) RenderNode(w io.Writer, node *bf.Node, entering bool) bf.WalkStatus {
	switch node.Type {
	case bf.Text:
		dbg("Text", string(node.Literal))
	case bf.Softbreak:
		dbg("Softbreak", "")
	case bf.Hardbreak:
		dbg("Hardbreak", "")
	case bf.Emph:
		if entering {
			dbg("Emph (entering)", "")
		} else {
			dbg("Emph (leaving)", "")
		}
	case bf.Strong:
		if entering {
			dbg("Strong (entering)", "")
		} else {
			dbg("Strong (leaving)", "")
		}
	case bf.Del:
		if entering {
			dbg("DEL (entering)", "")
		} else {
			dbg("DEL (leaving)", "")
		}
	case bf.HTMLSpan:
		dbg("HTMLSpan", "")
	case bf.Link:
		if entering {
			dbg("Link (entering)", "")
		} else {
			dbg("Link (leaving)", "")
		}
	case bf.Image:
		if entering {
			dbg("Image (entering)", "")
		} else {
			dbg("Image (leaving)", "")
		}
	case bf.Code:
		dbg("Code", "")
	case bf.Document:
		dbg("Document", "")
	case bf.Paragraph:
		if entering {
			dbg("Paragraph (entering)", "")
		} else {
			dbg("Paragraph (leaving)", "")
		}
	case bf.BlockQuote:
		if entering {
			dbg("BlockQuote (entering)", "")
		} else {
			dbg("BlockQuote (leaving)", "")
		}
	case bf.HTMLBlock:
		dbg("HTMLBlock", "")
	case bf.Heading:
		if entering {
			switch node.HeadingData.Level {
			case 1:
				dbg("Heading (1, entering)", fmt.Sprintf("%v", node.HeadingData))
			case 2:
				dbg("Heading (2, entering)", fmt.Sprintf("%v", node.HeadingData))
			case 3:
				dbg("Heading (3, entering)", fmt.Sprintf("%v", node.HeadingData))
			case 4:
				dbg("Heading (4, entering)", fmt.Sprintf("%v", node.HeadingData))
			case 5:
				dbg("Heading (5, entering)", fmt.Sprintf("%v", node.HeadingData))
			case 6:
				dbg("Heading (6, entering)", fmt.Sprintf("%v", node.HeadingData))
			}
		} else {
			dbg("Heading (leaving)", "")
		}
	case bf.HorizontalRule:
		dbg("HorizontalRule", "")
	case bf.List:
		if entering {
			dbg("List (entering)", fmt.Sprintf("%v", node.ListData))
		} else {
			dbg("List (leaving)", "")
		}
	case bf.Item:
		if entering {
			dbg("Item (entering)", "")
		} else {
			dbg("Item (leaving)", "")
		}
	case bf.CodeBlock:
		dbg("Codeblock", fmt.Sprintf("%v", node.CodeBlockData))
	case bf.Table:
		if entering {
			dbg("Table (entering)", "")
		} else {
			dbg("Table (leaving)", "")
		}
	case bf.TableCell:
		if entering {
			dbg("TableCell (entering)", fmt.Sprintf("%v", node.TableCellData))
		} else {
			dbg("TableCell (leaving)", "")
		}
	case bf.TableHead:
		if entering {
			dbg("TableHead (entering)", "")
		} else {
			dbg("TableHead (leaving)", "")
		}
	case bf.TableBody:
		if entering {
			dbg("TableBody (entering)", "")
		} else {
			dbg("TableBody (leaving)", "")
		}
	case bf.TableRow:
		if entering {
			dbg("TableRow (entering)", "")
		} else {
			dbg("TableRow (leaving)", "")
		}
	default:
		panic("Unknown node type " + node.Type.String())
	}
	return bf.GoToNext
}

// RenderHeader writes HTML document preamble and TOC if requested.
func (r *TraceRenderer) RenderHeader(w io.Writer, ast *bf.Node) {
	dbg("RenderHeader", "")
}

// RenderFooter writes HTML document footer.
func (r *TraceRenderer) RenderFooter(w io.Writer, ast *bf.Node) {
	dbg("RenderFooter", "")
}

// Helper functions
func dbg(source, msg string) {
	fmt.Printf("[%v] %v\n", source, msg)
}

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
