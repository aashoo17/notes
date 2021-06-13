# linker (ld)

**invoking linker from command line seperately**  
usually gcc invokes ld with appropriate options how to do it manually  

so ld by default looks for _start() function instead of main() as starting point  
so this need to be changed
we can use -e flag to do so  
**ld main.o -lc -o main -e main**  
here -e main = start from main()  
-o main = emit output with name main  
-lc = link with libc 


**ld options**  
-e = entry point   
-o = output file name after linking  
-l = link with given lib  
-s = strip all symbols  
-L = search dir for linking libs  
-O = optimization output level  
-static = do not link against shared libs  
-nostdlib = don't use std library like libc  
