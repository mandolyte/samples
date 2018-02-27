# Samples Readme

This repo contains code samples that demonstrate various things.
Most only useful for personal use. But some may be of wider interest.

Below find an inventory.

## BlackFridayTraceRenderer

This BF renderer simply reports on the AST that is parsed by 
the BlackFriday Markdown v2 parser. It takes stdin as input or, 
if present, the first argument as a filename. It outputs the 
"report" to STDOUT.

## aes

A tiny example of encrypting and decrypting a string based on some gists
I found while searching the web for things to "leverage".

In between, the encrypted bytes are converted to base64 and then
reverted. The reverted string is then decrypted.

This just shows the end-to-end workflow when it is required to store
the encrypted text as a string in a database or text file type.
