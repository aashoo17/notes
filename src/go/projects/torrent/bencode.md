# bencoding
[bencoding specs](https://www.bittorrent.org/beps/bep_0003.html)

why required ??
all the no. struct and other data types internally can be represented in language specific bytes
converting it to letters/ascii/utf-8 we can achieve common byte_slice/string representaion which will work
in all platform for data transfer like json

four types of data
only 4 is defined in bencoding
int
string
list
dictionary

but usually we can write for all the defined data types in that language to bencode form
for e.g. struct can work like dictionary 

now for all the data outside/user generated types to work we have to rely on reflect package in go
type Ashu struct{
	name string
}
type Other struct{
	name string
	age int
}
we can have lot of structs derivative but can't assume any special case so we have to write a generic
code which handles interface{} data type and at runtime gets the value and converts it.
type NewInt int 
NewInt is a int type etc
hence a generic code with reflect package is written
check reflect

strconv library will be useful for string conversions
look strconv.md

mutex use
converting structs to bencode form we can leverage the concurrency
using a map to store all the structs converted till now in bencode by multiple goroutines
read the map by taking a read lock on RWMutex type and if not found in the map
after bencoding take write lock to update the map

bencode api
marshal()
marshal will take any go type and convert it to bencoded form in memory
unmarshal()
unmarshal will do the opposite by taking bencoded form and converts to go type

Encode/Decode
they will work directly on files instead of keeping things in memory after completion
so they will always wrap a os.File data type