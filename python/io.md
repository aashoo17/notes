# I/O opeartion

[file io in python](https://docs.python.org/3/library/io.html)
functions
open => mode and encoding
read
write
close
seek

specifying modes during file opening

## byte vs char based read/write

working on character array and specifying encodings
why encoding needs to be specified explicitly

Unlike other languages, the character 'a' does not imply the number 97 until it is encoded using ASCII (or other equivalent encodings).
Moreover, the default encoding is platform dependent. In windows, it is 'cp1252' but 'utf-8' in Linux.
So, we must not also rely on the default encoding or else our code will behave differently in different platforms.

