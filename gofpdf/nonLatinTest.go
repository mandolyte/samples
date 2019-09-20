package main

/*
To correctly produced in the output PDF the input string "Молоко и творог"
which is Russian, use codepage 1251; must also do the following:
- use the unicode translator method in gofpdf
- in the specifed font directory must be the following:
	1. cp1251.map: the codepage mapping
	2. helvetica_1251.z: font file (from the gofpdf project)
	3. helvetica_1251.json: font descriptor file
Here is the command to run this demo:
$ go run nonLatinTest.go -c cp1251 -o cp1251.pdf
*/

import (
	"flag"
	"log"

	"github.com/jung-kurt/gofpdf"
)

func main() {

	output := flag.String("o", "", "Output PDF filename; required")
	cp := flag.String("c", "", "Codepage to use; required")

	flag.Parse()

	if *output == "" {
		log.Fatal("Output PDF filename is required")
	}
	if *cp == "" {
		log.Fatal("Codepage string is required")
	}

	var err error
	var sContent string 
	sContent = `Молоко и творог`
	//sContent = `Съешь же ещё этих мягких французских булок, да выпей чаю.`
	log.Printf("Input string is:\"%s\"", sContent)
	pdf := gofpdf.New(gofpdf.OrientationPortrait, "pt", "Letter", ".")
	pdf.AddFont("Helvetica-1251", "", "helvetica_1251.json")
	pdf.AddPage()
	pdf.SetFont("Helvetica-1251", "", 12)
	tr := pdf.UnicodeTranslatorFromDescriptor(*cp)
	pdf.Write(15, tr(sContent))
	err = pdf.OutputFileAndClose(*output)
	if err != nil {
		log.Fatalf("pdf.OutputFileAndClose() error:%v", err)
	}
}
