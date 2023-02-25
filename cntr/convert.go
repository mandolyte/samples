package main

import (
	"encoding/csv"
	"encoding/json"
	"strconv"
	"strings"

	// "sort"
	// "strconv"

	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

func convertFloatToString(f any) string {
	if f == nil {
		return ""
	}
	_f := f.(float64)
	fstring := strconv.FormatFloat(_f, 'f', 10, 64)
	fstring = strings.Split(fstring, ".")[0]
	return fstring
}
func convertNilToString(a any) string {
	if a == nil {
		return ""
	}
	return a.(string)
}

func main() {

	input := flag.String("i", "", "Input CSV filename")
	flag.Parse()

	if *input == "" {
		usage("No input file provided!")
	}

	// input file
	fi, fierr := os.Open(*input)
	if fierr != nil {
		log.Fatal("os.Open() Error:" + fierr.Error())
	}
	defer fi.Close()

	data, err := ioutil.ReadAll(fi)

	// output file names
	VerseID := strings.Split(*input, ".")[0]
	collationsOutput := VerseID + "-collations.csv"

	// var results []alignment
	var results any
	err = json.Unmarshal([]byte(data), &results)
	if err != nil {
		log.Fatalln(err)
	}
	m := results.(map[string]any)

	var collationRows [][]string
	collationRowHeaders := []string{
		"VerseID",
		"CollationID",
		"VariantID",
		"Relation",
		"Pattern",
		"Align",
		"Span",
		"Probability",
		"Classic",
		"Koine",
		"Medieval",
		"LexemeID",
		"Role",
		"Morphology",
		"GlossPre",
		"GlossHelper",
		"GlossWord",
		"GlossPost",
	}
	collationRows = append(collationRows, collationRowHeaders)

	var variantRows [][]string
	variantRowHeaders := []string{
		"VerseID",
		"VariantID",
		"Relation",
		"Pattern",
	}
	variantRows = append(variantRows, variantRowHeaders)

	var matrixRows [][]string
	matrixRowHeaders := []string{
		"VerseID",
		"Matrix",
		"Column",
		"Word",
		"Hand",
		"Version",
		"Error",
	}
	matrixRows = append(matrixRows, matrixRowHeaders)

	for k1, v1 := range m {
		log.Printf("\nWorking on key: %v", k1)

		if k1 == "verse" {
			log.Printf("Processing verse %v", v1)
		} else if k1 == "collation" {
			collations := v1.([]any)
			for _, v2 := range collations {
				var arow []string
				// log.Printf("\n\ncollation key, val: %v,%v\n", k2, v2)
				collation := v2.(map[string]any)
				var VerseID = convertFloatToString(collation["VerseID"])
				var CollationID = convertFloatToString(collation["CollationID"])
				var VariantID = convertNilToString(collation["VariantID"])
				var Relation = convertNilToString(collation["Relation"])
				var Pattern = convertNilToString(collation["Pattern"])
				var Align = convertNilToString(collation["Align"])
				var Span = convertNilToString(collation["Span"])
				var Probability = convertFloatToString(collation["Probability"])
				var Classic = convertNilToString(collation["Classic"])
				var Koine = convertNilToString(collation["Koine"])
				var Medieval = convertNilToString(collation["Medieval"])
				var LexemeID = convertFloatToString(collation["LexemeID"])
				var Role = convertNilToString(collation["Role"])
				var Morphology = convertNilToString(collation["Morphology"])
				var GlossPre = convertNilToString(collation["GlossPre"])
				var GlossHelper = convertNilToString(collation["GlossHelper"])
				var GlossWord = convertNilToString(collation["GlossWord"])
				var GlossPost = convertNilToString(collation["GlossPost"])
				arow = append(arow,
					VerseID,
					CollationID,
					VariantID,
					Relation,
					Pattern,
					Align,
					Span,
					Probability,
					Classic,
					Koine,
					Medieval,
					LexemeID,
					Role,
					Morphology,
					GlossPre,
					GlossHelper,
					GlossWord,
					GlossPost,
				)
				collationRows = append(collationRows, arow)
			}
		} else if k1 == "variant" {
			log.Printf("Processing variant")
			variants := v1.([]any)
			for _, v2 := range variants {
				var arow []string
				variant := v2.(map[string]any)
				var VariantID = convertNilToString(variant["VariantID"])
				var Relation = convertNilToString(variant["Relation"])
				var Pattern = convertNilToString(variant["Pattern"])
				arow = append(arow,
					VerseID,
					VariantID,
					Relation,
					Pattern,
				)
				variantRows = append(variantRows, arow)
			}
		} else if k1 == "matrix" {
			log.Printf("Processing matrix")
			matrices := v1.(map[string]any)
			for k3, v3 := range matrices {
				matrixItems := v3.([]any)
				for _, v4 := range matrixItems {
					if v4 == nil {
						continue
					}
					matrixItem := v4.(map[string]any)
					var arow []string
					var Column = convertFloatToString(matrixItem["Column"])
					var Word = convertNilToString(matrixItem["Word"])
					var Hand = convertNilToString(matrixItem["Hand"])
					var Version = convertNilToString(matrixItem["Version"])
					var Error = convertNilToString(matrixItem["Error"])
					arow = append(arow,
						VerseID,
						k3,
						Column,
						Word,
						Hand,
						Version,
						Error,
					)
					matrixRows = append(matrixRows, arow)
				}
			}
		}
	}
	// open collation output file
	var w *csv.Writer
	fo, foerr := os.Create(collationsOutput)
	if foerr != nil {
		log.Fatalln("os.Create() Error:" + foerr.Error())
	}
	defer fo.Close()
	w = csv.NewWriter(fo)
	w.WriteAll(collationRows) // calls Flush internally

	if err := w.Error(); err != nil {
		log.Fatalln("error writing csv:", err)
	}

	// open variant output file
	variantOutput := VerseID + "-variants.csv"
	fo, foerr = os.Create(variantOutput)
	if foerr != nil {
		log.Fatalln("os.Create() Error:" + foerr.Error())
	}
	defer fo.Close()
	w = csv.NewWriter(fo)
	w.WriteAll(variantRows) // calls Flush internally

	if err := w.Error(); err != nil {
		log.Fatalln("error writing csv:", err)
	}

	// open matrix output file
	matrixOutput := VerseID + "-matrix.csv"
	fo, foerr = os.Create(matrixOutput)
	if foerr != nil {
		log.Fatalln("os.Create() Error:" + foerr.Error())
	}
	defer fo.Close()
	w = csv.NewWriter(fo)
	w.WriteAll(matrixRows) // calls Flush internally

	if err := w.Error(); err != nil {
		log.Fatalln("error writing csv:", err)
	}
}

func usage(msg string) {
	fmt.Println(msg + "\n")
	fmt.Print("Usage: convert -i input.json -o output.csv\n")
	flag.PrintDefaults()
	log.Fatalln("Try again.")
}

/* code graveyard

_verseVal := verseVal.(map[string]any)
for _, assignmentsVal := range _verseVal {
	__v := assignmentsVal.([]any)
	alignmentSequence := 0
	for _, wordsVal := range __v {
		// log.Printf("wordsKey,wordsVal=%v,%v", wordsKey, wordsVal)
		_alignedWordsKey := wordsVal.(map[string]any)
		alignmentSequence++
		for wordsKey, wordsVal := range _alignedWordsKey {
			// log.Printf("wordkey,wordval: %v, %v", wordKey, wordVal)

			if wordsKey == "topWords" {
				_top := wordsVal.([]any)
				wordSequence := 0
				for _, topVal := range _top {
					row := make([]string, 12)
					row[0] = *book         // book
					row[1] = *chapter      // chapter
					row[2] = "" + verseKey // verse
					row[3] = fmt.Sprintf("%v", alignmentSequence)

					row[4] = "T"
					wordSequence++
					row[5] = fmt.Sprintf("%v", wordSequence)
					_topMap := topVal.(map[string]any)
					occurrence := fmt.Sprintf("%v", _topMap["occurrence"])
					occurrences := fmt.Sprintf("%v", _topMap["occurrences"])
					word := _topMap["word"].(string)
					strong := _topMap["strong"].(string)
					lemma := _topMap["lemma"].(string)
					morph := _topMap["morph"].(string)
					row[6] = occurrence
					row[7] = occurrences
					row[8] = word
					row[9] = strong
					row[10] = lemma
					row[11] = morph
					rows = append(rows, row)
				}
			} else if wordsKey == "bottomWords" {
				_bot := wordsVal.([]any)
				wordSequence := 0
				for _, botVal := range _bot {
					row := make([]string, 12)
					row[0] = *book         // book
					row[1] = *chapter      // chapter
					row[2] = "" + verseKey // verse
					row[3] = fmt.Sprintf("%v", alignmentSequence)
					row[4] = "B"
					wordSequence++
					row[5] = fmt.Sprintf("%v", wordSequence)
					_botMap := botVal.(map[string]any)
					occurrence := fmt.Sprintf("%v", _botMap["occurrence"])
					occurrences := fmt.Sprintf("%v", _botMap["occurrences"])
					word := _botMap["word"].(string)
					row[6] = occurrence
					row[7] = occurrences
					row[8] = word
					row[9] = ""
					row[10] = ""
					row[11] = ""
					rows = append(rows, row)
				}
			}
		}
	}
*/
