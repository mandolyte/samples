# Samples using mattn/go-sqlite3 

## Samsung Chromebook Plus (Arm v8) 
This requires the Linux Crostini to be installed. Then Go and sqlite3 itself
to test things.

To install the `mattn`:
- be sure that gcc is on your path:
```
$ gcc -v
Using built-in specs.
COLLECT_GCC=gcc
COLLECT_LTO_WRAPPER=/usr/lib/gcc/aarch64-linux-gnu/6/lto-wrapper
Target: aarch64-linux-gnu
Thread model: posix
gcc version 6.3.0 20170516 (Debian 6.3.0-18+deb9u1)
$
```
- A cgo enable flag is needed to install the package. Thus:
```
CGO_ENABLED=1 go get github.com/mattn/go-sqlite3
```

Once the package is installed, CGO isn't required for your code that
uses this as a database driver.

## simple.go

This little test code comes from the examples provided by `mattn`.
```
