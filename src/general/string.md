# String

different programming languages deal with string differently  
in short term string is array of characters but computer dont understand that and had to store them as bytes internally now we have encodings either utf-8 or utf-16 to choose from nowadays in c/cpp it used to be ascii for storage

so when we normally write 
"Hello World!"

store their encoded byte values 
now basic keyboard can only give ascii values and can be represented as english letters on monitor  
what if we want to write any character from the same keyboard so it has been decided to write something like
a => "\u{61}" in unicode representation

now in this format we can write any character

TODO: only question remains why unicode bytes are not stored internally directly and we use utf-8/utf-16 encoding
what are its benefits ??



