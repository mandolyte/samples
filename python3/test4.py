import json

with open("langnames.json", "r") as read_file:
    fdata = read_file.read()
    jdata = json.loads(fdata)


print ("type is:" +  str(type(jdata)) )

count=0
for lnj in jdata:
    count=count+1

print("Total in list: "+str(count))