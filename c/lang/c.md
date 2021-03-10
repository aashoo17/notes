# compiling and executing C program

gcc -o hello hello.c	//compile
./hello					//execute

some useful libraries/header files
--------------------------------->

stdio.h		//std input and output 
stdlib.h	//The stdlib.h header defines four variable types, several macros, and
			 various functions for performing general functions.
stdbool.h	//boolean included
string.h	//string related functions

Preprocessors
------------>

#define		//define
#ifndef		//if not defined do it
#ifdef		//if defined
#ifdef MACRO
	controlled text
#endif

#if			//if
#if expression
	controlled text
#endif
#if expression
	text if true	
#else
	text if false
#endif

#endif		//end any if statements

#include <stdlib.h>	//inserting std C defined headers
#include "some.h"	//inserting user defined headers

variables
-------->
value can change over time
in C three types of variable are int,float and char
auto
extern

C keywords
--------->
special meaning to C compiler and can not be used for variable name

constants
-------->
value does not change over time
integer const
float const
character const

type conversion
------------->
implicit
explicit


	

use of printf and scanf
using of & in scanf

operators
-------->
arithmetic operators
+,-,*,/,%

relational operator
<,>,<=,>=,==,!,!=

logical operators
&&	//and
||	//or

bit wise calculation
&		//and true if both true
|		//or true if any one is true
^		//xor true if one of them only is true
~		//one's complement 010->101 reverse the bits
>>		//right shift divide by 2
<<		//left shift multiply by 2

conditional
---------->
if else
else if
ternary operator
expression 1 ? expression 2 : expression 3
if one true then 2 is taken else 3
its like shorthand for if else

loops
---->
while loop

initialise loop counter ;
while ( test loop counter using a condition ) {
do this ;
and this ;
increment loop counter ;
}

compound assignment operator 
+=,-=,*=,/=

for loop

for ( initialise counter ; test counter ; increment counter ) {
do this ; and this ; and this ;
}

do while loop

it is not known beforehand how many times the statements in the loop are to be executed.
This situation can be programmed using do while

do
{
printf ( "Enter a number " ) ;
scanf ( "%d", &num ) ;
printf ( "square of %d is %d", num, num * num ) ; printf ( "\nWant to enter another number y/n " ) ; scanf ( " %c", &another ) ;
} while ( another == 'y' ) ;

in this programme do-while loop would keep getting executed till the user continues to answer y. The moment he answers n, the loop terminates

continue

When continue is encountered inside any loop, control automatically passes to the beginning of the loop.

break

When break is encountered inside any loop, control automatically passes to the first statement after the loop. 

switch

switch ( integer expression ) {
case constant 1 : do this ;
case constant 2 : do this ;
case constant 3 : do this ;
default :
do this ;
}
case is followed by an integer or a character constant. Each constant in each case must be different from all the others

goto

main( ) {
int goals ;
printf ( "Enter the number of goals scored against India" ) ; scanf ( "%d", &goals ) ;
if ( goals <= 5 ) goto sos ;
else {
}
sos :
printf ( "To err is human!" ) ;
}

The exit() function is a standard library function which terminates the execution of the program

adding your function to the std c library



pointers
------->
stores memory location
int *x	//declaration
x =&y	//assignment
*x		//to get the address value
%x		//hex format specifier
int *x[]
x = &arr	//ptr will store address of first array variable
			//since next variable is stored at next memory location
			//we can get it by x++
int arr[] = {1,2,3}
arr name/notation is actually pointer to first variable

structures
--------->
storage for different type of datatype variables
struct book{			//declaration
	char name[];
	int year;
};
struct book{			//declaration
	char name[];
	int year;
}ramayana;				//struct variable creation

struct book ramayana;	//struct variable creation
strcpy(ramayana.name,"Ramayana");	//assignment
ramayana.year = 1565;


union book{			//union declaration
	char name[];
	int year;
};

function
------->
function prototype
int hello();
written before calling the function if function is defined after call
generally done in .h header files

MACROS
----->
object type
#define TWO 2
#define NUMBERS 1,2,3,4

function type
#define MAX(X,Y)	(X>Y ? X : Y)


Dynamic memory allocation

typecasting




