## Writing to standard output


## Reading from standard input and parsing


## Formatted IO on stdout

[formatted IO formatters keywords](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html#syntax)

## java.io vs java.nio
java.io = stream based io   
java.nio = buffer based io  
[java streams basic](https://docs.oracle.com/javase/tutorial/essential/io/streams.html)  
input stream = data can be read from here i.e. it is some kind of store for data may be disk, network etc  
output stream = data can be written here  
TODO: say i have an int based input stream does that mean for any operation first we will take 1st int then 2nd and so on and do whatever  
we want to do with each int may be write to output stream, modify each int etc . If we are writing and all to output stream each int is  
individually written to stream    
so buffering can be done with streams also that's not a problem
TODO: how java.nio changes all this

## all java.io streams


Scanner class 
so Scanner class reads next chunk based on method called and tries to parse it into it.
e.g. nextInt() = read bytes as equivalent to size of int and parse it.


java.lang => has class System which has io implementation for stdin/stdout

since stdin/stdout are already created for each process java defines them in PrintStream/InputStream class but givees you two variables under System as out and in
out => instance of PrintStream attached to stdout
in => instance of InputStream attached to stdin

so System => PrintStream => methods on PrintStream
and we see as
System.out.println()
System.in.read() etc


PrintStream => 
this class just provides the ability to represent the Int,Float,... etc in memory in printable form
automatically flush can also be done by this class
TODO: flushable interface
so whoever wants to print data in character/string form just inherits this class


## main java.io classes 
Buffered IO
- BufferedOutputStream - bufferred write (they wrap any normal writers)
- BufferedInputStream - buffered read (they wrap any normal readers)

File IO
- FileInputStream = read from files
- FileOutputStream = write from files
- FileReader = read from files use char[] (character based io)
- FileWriter = write to files from char[] (character based io)

Formatted IO
- System.out.printf()
stdin
- System.in = read from stdin (generally wrapped by Scanner class to read next chunk of int/float/string and parses)
stdout
- System.out = write to stdout


## java.nio 

here we have channels, buffers  
channels = wrapper created over filestream  
buffers = classes to create buffer in memory where we can read/write from/to  
then we can do normal read/write calls in the buffer   