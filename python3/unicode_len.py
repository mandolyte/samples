import unicodedata

s = u"\u67f3\u9ed4\u58ef\u8a9e"
slen = len(s)

u = s.encode("utf-8")
ulen = len(u)


print("slen=%i" % slen)
print("ulen=%i" % ulen)

s1 = "help"
s1len = len(s1)

u1 = s1.encode("utf-8")
u1len = len(u1)

print("s1len=%i" % s1len)
print("u1len=%i" % u1len)
