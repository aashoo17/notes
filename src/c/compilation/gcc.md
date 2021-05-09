# GCC

say we have a main.c file we have to do the following compilation steps  
1. preprocess file  
all the macro is expanded, header files are included(#include is also a macro)  
gcc -E main.c -o main.i
-E tails give me preprocessed file  
-o tails give the file name as main.i

2. compile to assembly file
gcc -S main.i  
take the preprocesses main.i file and generate assembly main.s file
gcc -S main.c  
if main.c is fiven as input both steps of preprocessing and assembling is done main.s is generated  

3. object file  
gcc -c main.s  
take the assembly file and generate compiled binary 
gcc -c main.c
take the c file and generate compiled binary  
 
4. linked executable file  
compiled binaries are not able to execute until they are linked as there may be dependency on other   
library files  
gcc -o main main.o  
pass object file and generate executable binary
gcc -o main main.c
pass c file and generate executable binary

5. different language standard can be used by passing --std flag

6. libc is linked automatically by GCC

7. Searching for Header Files and Libraries (-I, -L and -l)
<> header files are looked into some predefined directories  
"" header files are looked into current directory  
if we want compiler to look in some other directory also we have to give -I flag as -Idir where dir is directory to look for  
similarly linking happens with files (.o/.so/.a files) in predefined directories if we want to add other directories  
we have to add -L flag as -Ldir where dir is directory to look for  
so what is -l flag  
apart from linking directory we have to also tell which static/shared library(.a/.so) we have to link with  
that is specified with -l generally shared lib is preferred first
-lm = libm.so/lib.a
-lcall = libcall.so/libcall.a  
libm.so will be told to link -lm  
l stands for library and m with lib and so omitted  
it means -lc is called automatically for libc.so  

8. PATH, CPATH, LIBRARY_PATH
these are the environment variable which can be set in shell which can specify user defined look up  
directories for header/library

9. static and shared library

where these libraries are kept in linux ??

-static and -shared flag gcc

[Brief function of GCC](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html)

[GCC basics](https://medium.com/@meghamohan/everything-you-want-to-know-about-gcc-fa5805452f96)

[GCC command line](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html)

[GCC video](https://www.youtube.com/watch?v=ocbVPeHrHUw)

Download the microtar library from github 
[microtar source](https://github.com/rxi/microtar)

write a simple archive creation program and create the execuatable

## cross compilation
[cross compilation explained](https://opensource.com/article/19/7/cross-compiling-gcc)

TODO:
creating the microtar.o file  
create main.o file (main.c is file where you written your code)  
here microtar file like this in main.c  
//#include<microtar.h>  
as gcc looks for includes in certain directories it will not find it  
where these include files are kept in linux  

use the -Idir flag to include the directory  
something like  
-Ihome/ashu/code/c_cpp/prac/micotar/src  

once both main.o and microtar.o is created link them to  
create executable file  

now only use ld command to link main.o and microtar.o other than gcc command  


