import json
import os
import yaml

# read in sample JSON
with open("test_indentYAML.json", "r") as f:
    jdata = f.read()
    jstring = json.loads(jdata)

# convert to YAML
ystring = yaml.dump(jstring,allow_unicode=True, default_flow_style=False)

# read YAML as lines in a file, indent, and write
count=0
with open("test_indentYAML.yaml", "w") as w:
    for line in ystring.split('\n'):
        w.write("%s%s\n" % ("    ", line))
        count = count+1

print("Lines in YAML String: %i" % count)

