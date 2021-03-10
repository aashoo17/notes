## executable
all the programs usually start executing instructions from some location usually main function address
if main() is available it will acts as a executable and dont need any other program to run.

## library
library code just helps other code to get some job done but kernel does not treat to be runnable standalone
they will not have main function in them

## explaining the header file
we do two things compilation and linking
in compilation source is converted to binary format but for making code modular we divide the code into small
small lot of parts
if compilation of some source code is done but it does not implementaion in the same file
compiler will not know about the other code
so at the time of compilation we provide it with header file telling that this is the implementaion you will find later
at the time of linking plus we have to tell where are the headers will be located
by default platform specific compiler will search for some location to find the header files written in <>(angle brackets)
header file will be looked in current directory if marked in ""(double quotes)
gcc has option to -Idir to add any other custom location
TODO: check for clang and find out any other possible way of specifying such as environment variable CPATH etc or any other

## linking
during linking we have to tell linker the path of compiled files that's all
linker also checks for some default location which is platform dependent
-Ldir is used for GCC for custom location check for clang any other way of specifying


1. you have source code
.c/.cpp file is available

2. you don't have source code
object file and .h file is given
benefits of providing .o files and header

[gcc compilation](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html)
4 steps in compilation
1. preprocessing
2. compilation to assembly
3. assemble to object file
4. link the objects and create executable

finding header files
default header path 
finding object/library file
default library path

# problems

1. how to do each step of compilation seperately and see the results  
2. we have object file and want to use it with header file  
3. keep all headers in include folder and use source or oblect file
in compilation  
4. similarly keep all object file in one folder and use it  
5. the above two is simulation of library given with OS and using it