## streams and fd
fd is just an integer by which kernel recognizes the device/file on which opearion is to be performed and generally unix/linux uses fd windows has its own low level implementation so though we can use fd for file operation but it will not be cross platform and not only that old language like c can have different api/function to call this fd for read/write

to eliminate this idea of stream came which will wrap low level implementaion may be fd or any other thing to give common data structure for all platforms as well functions which will take this data structure for read/write will provide same api for all platforms

wrapping explained => say i have int which is now called as fd by typedeffing and wrap it in struct 
```c
typedef int fd;
struct Wrapper{
    fd x;
    //some other things
}
``` 
TODO:
explain process wide fd => system wide fd => inode table from linux programming interface book

## reading and writing data
these 3 opeartions are that usually performed on fd/streams

**buffer** => buffer is just data in memory usually this term is used for arrays as they have few bytes space allocated
char buffer in c
char buf[100] => this allocates 100 byte on stack this memory of 100 bytes is now called buffer
int buf[20] => integer buffer
char *buf = malloc(sizeof(char)) => creates buffer on heap

reading => get the data from somewhere which already exists and store it a buffer
writing => buffer is my data and we have to send it to any file/device
seeking => it is possible to read data in sequence that means start at first byte then go 1,2....etc or we can jump to some byte location say 30 and then start read/write for 31,32,33.... etc this is called seeking 

so normally we have to use some methods to create/get streams/fd but there are three unique ones which are generally always available for any process called as 
three streams are automatically created for the every process
stdin, stdout, stderr
stdin => generally your input device such as keyboard
stdout/stderr => is your terminal emulator
actually shell creates these three for itself
and all the process creation happend from shell as its child
hence they inherit these three streams automatically
stdin => standard input
stdout => standard output
stderr => standard error
stdin is normally connected to keyboard device
stdout/stderr are connected to console/monitor

idea of readers and writers
apart from c all languages have some form of interface idea which defines few functions which can be written for any class/struct
so there are generally written 2 interface called as Reader and Writer (name may differ a little bit in some languages)
Reader => read() method
Writer => write() method
so any data structure which implements these are named as Reader/Writer
common one are 
files,tcp socket,stdin,stderr and stdout (comes under file)  

how to get access to files,tcp socket
check the language specific implementation in their folders

## formatted I/O
everthing which can be displayed/write to disk should be in asccii/unicode or some other encoding
but numbers and other data structure in memory are represented in other forms
so it is impossible to display them directly
first we need converion to ascii/unicode
e.g.
int in memory are always 32 bits
but as ascii
any thing more than 4 digits will take more than 32 bits
ascii representaion
1 => 48(in binary forms)
2 => 49
.
.
9 => 57

12345 => [48,49,50,51,52] this has to go in file for storage/display
data structires are made of basic types like no,char...etc
if we can convert basic data types we can do the same for structs

## how buffering works conceptually
now for any file/device we can immediatelly start read/write as soon as we get 1 byte data or we can wait for accumulation of data say 100 bytes and then write
now every storage device physically write data say for disk movement of head etc so if we write for all 1 byte we have lot of small movements which is generally not efficient and wear/tear could be more eventually reducing their lifetime. on top of that lot of device will read/write fast if data is multiple of some no which is device specific
what we do then don't generally write 1 byte immediatelly instead we wait for some more data and then write this is called buffering the data read/write

buffering in kernel
now kernel takes care of this problem and creates a buffer in memory when it is full will eventaully read/write to actual device

buffering in standard library of any language
now standard library of any language creates its own buffer because if it calls kernel for each byte usualy it is expensive since we have to call kernel function/system call and then when kernel gives control back we again start with our function in stdlib
so now it will also create some buffer and then give to kernel later

now if say two programs trying to write/read to same device 
program 1 writes but it is now in buffer may be kernel or language standard library then program 2 starts reading what will happen will it find the content from the device ??
now if it is kernel buffer program 2 have to ask kernel for reading so kernel sees ok file has some content but new content have kept in memory so it will give new content and everything is ok.

but if it was lanaguge stldib buffer kernel will not know about it and program 2 gets an old content. so language specific buffers are to be taken care by the user
flushing 
now we have seen that lang stdlib may have content in its buffer lot of time until buffer is not full
so we came to idea of flushing in which saying send the content to its destination device/file even the buffer is not full

some languages allow buffering in its standard library by default
TODO: 
find out which are the language allow buffering by default which one don't
mechanism to allow/disallow this buffering


## Read/Write of bytes vs strings
now writing bytes mean it doesn't matter it can happen for any file type
but reading/writing string is very common so special function are provided to just handle them
and stdin/stdout etc take string only so operation on them need to be done with these methods

## which is best writing bytes vs chars and caveats


MYVIEW:
i think it is best to make read and writes always in bytes (binary mode)
sending char array from outside convert it to bytes
and if reading char from file make it iterator over new lines


