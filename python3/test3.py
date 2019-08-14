import json

with open("data_file.json", "r") as read_file:
    fdata = read_file.read()
    jdata = json.loads(fdata)

print (json.dumps(jdata,indent=4))
