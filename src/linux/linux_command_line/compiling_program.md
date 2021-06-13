most common and widely used compiler gnu gcc
check if installed 
which gcc

source code
compiler	//gcc 
linker		//link all the dependencies 

compile a program from source code
./configure
make
make install

run the configure file to check if all dependencies for program is available
go to program root directory
./configure
it will generate a makefile which is required for make program
make does the compiling using makefile and at the time of recompiling it checks for any missing part and 
compiles that part only
if install file is available 
make install will do something written in it
generally putting that programs in the shell path folder generally /usr/local/bin


