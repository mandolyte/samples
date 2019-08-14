import json

with open("langnames.json", "r") as read_file:
    fdata = read_file.read()
    jdata = json.loads(fdata)

print (json.dumps(jdata,indent=4))
