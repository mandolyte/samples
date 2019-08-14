import json

with open("langnames.json", "r") as read_file:
    fdata = read_file.read()
    jdata = json.loads(fdata)



count=0
for lnj in jdata:
    count=count+1
    #print (lnj)
    if lnj["lc"] == "en":
        lnj["newkeyofmyown"] = "mandolyte"
        print(lnj)

print("\n\n\nTotal in list: "+str(count))