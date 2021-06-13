## include guard

There could be a problem and program will not compile if a file is included twice
lets say some program
#include "fileA.h"		
#include "fileB.h"

and where fileA.h is defined like this
#include "fileB.h"		//already contains fileB
so #ifndef...  #define....#endif to be used before including the file
or sometimes #pragma once .....			//is also used but may not be supported by all compilers

//TODO: const keyword in cpp and uses

**structs**
struct are also written same as class with struct keyword
struct A{
	int x;		//in struct members default to public opposed to class
	int y;
}

//TODO: implicit and explicit conversion specially with constructor explicit keyword

//TODO:namespaces
	using namespace
	create your namespace and using


## Templates
[templates](http://www.cplusplus.com/doc/oldtutorial/templates/)

## Refernces

[CPP language full topics](https://www.ntu.edu.sg/home/ehchua/programming/)

[NULL vs nullptr in cpp and why NULL is not advised in CPP](https://www.quora.com/Whats-the-difference-between-NULL-and-nullptr-in-C++)





