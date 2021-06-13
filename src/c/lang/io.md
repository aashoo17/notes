## fd

fd is low level implementation for file io  
stream actully just wraps fd to provide common api  
fd is for linux/unix only and windows may have its own implementation for low level 

## Stream

data struct for file and directory  
file stream => FILE  
directory stream => DIR  


opening a stream

stream is a data structure which have 
fd (file descriptor), seek pointer to the file and
open mode of the file etc other information 
for kernel to recognise the file to work with this 
stream data struct can also apply its own buffer 
for less read/write system calls to kernel.

once you get that data structure called stream and 
represented as FILE we can use function from stdio.h
to read/write or both.

closing the stream means removing the FILE data struct 
from memory 

buffering of data before read/write is on by default in 
libc standard library

TODO: find way to stop this buffering

## working on streams  
open stream  
header stdio.h  
fopen() function  
r => read  
w => write with truncation  
a => append no truncation  
r+ => read/write but write without truncation  
w+ => read/write and write with truncation  
[difference-between-r-and-w-in-fopen](https://stackoverflow.com/questions/21113919/difference-between-r-and-w-in-fopen)  
so r+ will update/write the file without deleting/truncating the initial content   
```c
//update by r+ during write 
#include <stdio.h>

int main(){
    //str.txt file put initial content as hello baba
	FILE *f = fopen("str.txt","r+");
	fputs("hello kk",f);
	fclose(f);
}
```
and w+ will truncate/delete the content and then write plus it can read also so it differs from w

```c
//truncation by w/w+
#include <stdio.h>
int main()
{
   FILE *fp;

   fp = fopen("test.txt", "w+");
   fclose(fp);
}
```

read/write on character/string  
[size-of-character-array-and-size-of-character-pointer](https://stackoverflow.com/questions/17260242/size-of-character-array-and-size-of-character-pointer)  
char str[] = "hello"  
char array are NULL terminated and sizeof(str) comes total bytes including NULL bytes  
but char *str = "hello"  
will give sizeof(str) as 8 which is size of pointer on 64 bit machines  
if we have int array  
int x[] = {1,2,3,4};  
sizeof(x) gives 4*4 = 16 bytes and not NULL terminated  

now since we are going to work on char pointers in below functions whenever any char/string
will come from outside in some function those function will have an args telling the size
you will allow to come through
```c
#include <stdio.h>
int main(){
    //our buffer can store 4 bytes
	char str[4];
    //allowing 3 bytes to come through from stdin
	fgets(str,3,stdin);
}
```
if these function does not restrict the bytes to come and stored in the memory buffer
user can give more no of bytes and eventually overflowing the memory buffer
```c
#include <stdio.h>

int main(){
	char str[4];
    //gets does not restrict the size after char pointer
    //user can overflow the size of 4 bytes str var
    //hence gets is not safe and removed in C11
	gets(str,stdin);
}
```
//get and put char/string from streams  
//even stdin,stdout and stderr can be used  
fgetc()  
fgets()  
fputc()  
fputs()  

read/write directly to stdout/stdin etc  
puts()  
gets()  

read/write directly on bytes   
they are also called block i/o as they can write some blocks of bytes  
fread()  
fwrite()  
TODO: include seeking  
close the stream  
fclose()  
```c
#include <stdio.h>
int main(){
  FILE *f = fopen("str.txt","w");
  //byte based operations
  //buffer created in memory
  int buf[] = {1,2,3,4,5};
  //fwrite takes void pointer then since it is 
  //void ptr we have to tell its size of one element and 
  //then total no of such items to be written
  fwrite(buf,sizeof(int),sizeof(buf),f);
  fclose(f); 
}
```
To work with char array/string we can use char array  
fread/fwrite for byte based operations
```c
#include <stdio.h>

int main(){
    //writing hello world using fwrite
    FILE *f = fopen("str.txt","w");
    //H  e   l   l   o   space  w   o   r   l   d
    //72 101 108 108 111 32     119 111 114 108 100
    char buf[] = {72,101,108,108,111,32,119,111,114,108,100};
    fwrite(buf,sizeof(char),11,f);
}
```


flushing the stream
c std library does buffering by default that means it tries to minimize kernel
calls by keeping a memort in user space and when it is filled then only send to kernel
usually 4 kB  
FIXME: now in case of stdin,stdout immediate flushing happens normally  
but there cases when newline ("\n") etc can be still there in buffer
and may be older version of libc can have no flush behaviour
so usually it is better to flush the stream manually before taking an input
and starting a new one  
fflush()

## working on fd directly 
available in fcntl.h  
open()  
```c
int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
```
available in unistd.h  
read()  
```c
//fd => file descriptor
//buf => any type of memory 
//count => till where in buf pointer we have to read to memory 
//usually sizeof(buf) if allocated by array [] or malloc
//if char c[] then to omit NULL byte we can say sizeof(c)-1
ssize_t read(int fd, void *buf, size_t count);
```
write()  
```c
//fd => file descriptor
//buf => any type of memory 
//count => till where from buf pointer we have to write from memory 
//usually sizeof(buf) if allocated by array [] or malloc
//if char c[] then to omit NULL byte we can say sizeof(c)-1
ssize_t write(int fd, const void *buf, size_t count);
```
```c
#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>

int main(){
    int fd = open("str.txt",O_WRONLY | O_CREAT);
    //"Hello world" in ascii = {72,101,108,108,111,32,119,111,114,108,100}
    char buf[] = {72,101,108,108,111,32,119,111,114,108,100};
    //write takes a void *buf as its second arg but when used we are not telling the sizeof 
    //variable used in place of void is not told its size in bytes that means write always writes in single byte(8 bit) value
    //and we tell how many total bytes to be written
    //so if 
    //int x[] = {1,2}; 
    //to be written we have to tell 8 as last arg of write()
    //fread/fwrite instead always require that they are given the sizeof unit variable is given
    write(fd,buf,11);
}
```
close()  
```c
#include <fcntl.h>
#include <unistd.h>
int main(){
	int fd = open("str.txt",O_WRONLY);
	char x[] = "hello world!";
    //since NULL byte is added in size we have to minus 1 to write only char bytes
	write(fd,x,sizeof(x)-1);
}
```

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
printf()  
fprintf()  
sprintf()  

scanf()  
fscanf()  
sscanf()  
[allowing spaces in scanf](https://stackoverflow.com/questions/1247989/how-do-you-allow-spaces-to-be-entered-using-scanf)  

above functions prefix explanation  
f => to file   
s => to memory  
none => to stdio/stdout  

format specifiers in C  
--------------------->  
%c	Character	char unsigned char  
%d	Signed Integer	short unsigned short int long  
%e or %E	Scientific notation of float values	float double  
%f	Floating point	float  
%g or %G	Similar as %e or %E	float double  
%hi	Signed Integer(Short)	short  
%hu	Unsigned Integer(Short)	unsigned short  
%i	Signed Integer	short unsigned short int long  
%l or %ld or %li	Signed Integer	long  
%lf	Floating point	double  
%Lf	Floating point	long double  
%lu	Unsigned integer	unsigned int unsigned long  
%lli, %lld	Signed Integer	long long  
%llu	Unsigned Integer	unsigned long long  
%o	Octal representation of Integer.	short unsigned short int unsigned int long  
%p	Address of pointer to void void *	void *  
%s	String	char *  
%u	Unsigned Integer	unsigned int unsigned long  
	it can also be used for printing address as they are non negative nos  
%x or %X	Hexadecimal representation of Unsigned Integer	short unsigned short int unsigned int long  
%n	Prints nothing	  
%%	Prints % character  	


[api definition for these function above](https://www.gnu.org/software/libc/manual/html_node/Opening-Streams.html#Opening-Streams)  

[file io glibc](https://www.gnu.org/software/libc/manual/html_node/I_002fO-Overview.html)

[Low-Level Input/Output](https://www.gnu.org/software/libc/manual/html_node/Low_002dLevel-I_002fO.html)