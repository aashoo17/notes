concept of opening a file

read/write operation

by a file descriptor
by a stream

file descriptor is a no and represents an index for some reource 
used by kernel to find

how do they differ and why file descriptor are not much
portable compared to stream
though stream work on file descriptor only

three types of read write
1. normal read/write => open stream => read n bytes => use the stream to read/write this n bytes 
generally done using loop now => close stream
2. buffered read/write => open stream => read a fix no of bytes not set by user library/language has fixed that for you sometimes 4096 bytes is common => once variable have that no of bytes it will send
it for read/write => sometimes 4096 bytes is not completed when reading just before end of file or some error comes it will not read/write => then we have to manually flush it => close stream
3. some kind of utility method which will open => loads all file contents in memory =>read/write operation done => closes the stream 
everything done by it automatically
loads all file in memory not recommended for big files which will consume/fill ram

buffer is used so that i/o read/write is not happening at small no of bytes everytime
since i/o is slow, wears the disc
so buffering is like optimizing how many no of bytes should be written for best performace

closing a file

used some form of byte array for read/write
ultimately everything is 0 and 1s so doesn't matter you read by int type
but since it is 1 byte or 8 bits can represent all types
char, int, double etc
unicode utf8, utf32 everything can be represented

seeing some kind of formatting function
in all languages
printf(), writeln(), println() etc

once we get the data as 0 and 1s we dont know what it is so we have 
to tell function manually this represents this
so we give format specifier to tell 
decode it as string or number or something else