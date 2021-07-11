# Secure Hashing Algorithms

## SHA function
a function which will take input of any length
and gives unique return value for same piece of data

byte array => sha hashed byte array  

so we can check lets say a file if it is changed or not 
if hash previously vs now is still matching file is same

[What is SHA1 and successors](https://www.keycdn.com/support/sha1-vs-sha256)
[play with SHA online](https://tools.keycdn.com/sha256-online-generator)

SHA1 is currently not treated as safe and SHA256 is used
SHA1 is treated as vulnerable to collision attack

collision attack =>
two different files give same hash value i.e. final outcome of hash function 


## golang

[SHA1](https://golang.org/pkg/crypto/sha1/)