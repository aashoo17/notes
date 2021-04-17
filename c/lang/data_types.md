# Data types

## How people find ways to represent char, int, float/double 

### int
[Decimal and binary conversion of int](https://owlcation.com/stem/How-to-Convert-Decimal-to-Binary-and-Binary-to-Decimal)  
int representation was very easy any no can be represented in binary form as described above.  
more bytes mean bigger no can be represented say for  
16 bits = 2^16 possible representation  
32 bits = 2^32 possible integer reprentation  

then came negative no so the easy way to do it would have been keep 1 bit for sign say  
0000 0001 = 1
1000 0001 = -1 (8th bit is 1 showing -ve no)

but 0 is problem here we get two 0 as +0 and -0 then  
0000 0000 = +0
1000 0000 = -0
[2's complement system](https://en.wikipedia.org/wiki/Two%27s_complement)  
show came 2's complement, in this we reverse the bits and 1 to no to get the negative no of it  
0000 0001 = 1  
1111 1110 (bits reversed)
1111 1111 = -1 (1 is added)  

this way we will not get two zeros  
0000 0000 = 0  
get 2's complement  
1111 1111 (reverse bits)  
0000 0000 (add 1) = so we get same byte for 0's 2's complement  

so in language there is no -2 representation of bytes  
here - acts as unary operator and gets the 2's complement bits  
2 = 0000 0010  
-2 = 1111 1110 (- operator gets the 2's complement)  

### char
[ascii table for char](http://www.asciitable.com/)  
char was the easiest to do 1 byte can represent 255 possible combination  
so with 1 byte we can represent 255 chars  
just name some byte any char  
for e.g. 

if i have to do naively  
0000 0001 (i.e. 1) can be A  
0000 0010 (i.e. 2) can be B  

so ascii has done that is most widely adopted see the ascii table  

unsigned and signed char problem with char type  
initially ascii had 127 characters only so some compiler has used unsigned char type and some used signed char type but for 127 chars representation both will have same bit pattern  

say 1 in signed or unsigned type will be 0000 0001  
but later ascii got extended to cover 255 chars  
now the problem arose 

say 128 unsigned type no problem but in signed char system 128 is not possible it will be some -ve no though all 8 bits will be same internally  
1000 0000 = 128 (in unsigned type)  
TODO: 1000 0000 = 0100 0000 (reverse of 2's complement) = -127  (possible value is -127 but not working out check it)   
so internally bit did not change but meaning changed in signed/unsigned type  

TODO: complete the task below  
so if we write a program as  
char a = 128;   (will this work portabily)  

### float/double
[IEEE-754 float visualization](http://bartaz.github.io/ieee754-visualization/)

[How does a computer determine the data type of a byte?](https://cs.stackexchange.com/questions/45794/how-does-a-computer-determine-the-data-type-of-a-byte)  
so write a program with 1 signed and 1 unsigned type vs both unsigned type and add them see their assemble which addition command is used. is it dfferent for signed types

```c
#include <stdio.h>

int main(){
    //so 1 is 0000 0001 in byte form (actually it will be 00000000 00000000 00000000 00000001 on modern processors and then truncated to 00000001)
    //-1 will be 2's complement as 1111 1111 and unsigned type will mean 255 for this value
    unsigned char a = -1;
    printf("%u",a);
}
```

TODO: what are the arithmetic operations for which type is signed/unsigned will matter, see the intel manual and find out  

## How computer fetches memory and memory alignment
[Data/memory alignment: why it is required](https://developer.ibm.com/technologies/systems/articles/pa-dalign/)  


## processor working on bytes 
this pretty much explains how processor fetches the memory  
this memory is kept in registers say take a 64 bit register ( common in x86_64 processors)  
byte kept in register is 00000000 00000000 00000000 00000000 00000000 00000000 00100000 10000000  
now processor can operate on 1st byte only/2 bytes combined/ 4 bytes/  all 8 bytes  

see intel manual volume 1 chapter 3.4.1 table 3.2 Addressable General Purpose Registers

## Number
bsically we handle these bits type  
- Integers
    - bits
        - 8 bits
        - 16 bits
        - 32 bits
        - 64 bits
    - unsigned nos

    - unsigned char is just int of 8 bits(char is compiler dependent so cant be relied upon may be unsigned char or signed char internally)
    [byte data type in c/](https://stackoverflow.com/questions/20024690/is-there-byte-data-type-in-c)
    - char
    - short
    - int
    - long
    - long long
    - all unsigned counter part just starts with unsigned keyword
    - unsigned short
    - unsigned int
    - unsigned long
    - unsigned long long

usually processor will fetch 32/64 bits but they can work on 8/16/32/64 bytes. 

## How all int types like short,int,long,long long fit in general
standard has only defined minimum size for them   
short and int = min 16 bit  
long = min 32 bit  
long long = min 64 bit  
  

## int and char platform dependency
**int**  
so older hardwares might have say 16 bit processor so int will be 16 bit only there are when compiler generates code for that platform we get 16 bit int there, it is good for portability but it becomes a problem when we want that int should be a fixed width so that overflows etc should not happen so stdint.h was created  

**char**  
char is platform dependent  
char
    - unsigned char
    - signed char

some platform make char as unsigned char and some as signed char  
this is problem for portability as we might not know what type of char is available for us  

```c
//now this may work on platform with unsigned char
//but on signed char platform we can't go beyond 128 so we wrap the char c = -1 is what we will get  
char c = 255;
//to overcome this problem we see many places int being used or returned for portability and then converted to signed/unsigned char
```

```c
//EOF is marked as end of file and EOF = -1
//but say we have unsigned char type we can never rpresent -1 (only 0 to 255 is possible)
//so this is tackled by returning int 
//getchar() returns int

//now EOF = -1 and if we try to return getchar() in a char type for a platform with unsigned char we will never get -1 and loop will run infinitely
char c;
while((c = getchar()) != EOF){

}

```

so if you are taking min size as consideration program will be portable to any platform  
[A good read on platform depedency on integer types](https://softwareengineering.stackexchange.com/questions/400379/why-arent-the-platform-specific-integer-types-in-c-and-c-short-int-long-d)  
[using fixed with size of integers](https://stackoverflow.com/questions/13413521/is-there-any-reason-not-to-use-fixed-width-integer-types-e-g-uint8-t)  
[What is the size of an integer in a 64-bit computer?](https://www.quora.com/What-is-the-size-of-an-integer-in-a-64-bit-computer)  

since there were platform dependency for all integer types c came out with header stdint.h which will typedef underlying type to gurantee some assumptions  

## stdint.h and inttypes.h  
1. The header file on a system that uses a 32-bit int could define int32_t as an alias for int. A different system, one with a 16-bit int and a 32-bit long, could define the same name, int32_t, as an alias for int. Then, when you write a program using int32_t as a type and include the stdint.h header file, the compiler will substitute int or long for the type in a manner appropriate for your particular system.
The alternative names we just discussed are examples of exact-width integer types; int32_t is exactly 32 bits, no less or no more. It’s possible the underlying system might not support these choices, so the exact-width integer types are optional.  

2. set of names promises the type is at least big enough to meet the specification and that no other type that can do the job is smaller. These types are called minimum width types. For example, int_least8_t
3. C11 define a set of types that will allow the fastest computations. These are called the fastest minimum width types. 
4. or some programmers, only the biggest possible integer type on a system will do; intmax_t stands for that type, a type that can hold any valid signed integer value. Similarly, uintmax_t stands for the largest available unsigned type.  

printf() requires specific specifiers for particular types. So what do you do to display an int32_t value when it might require a %d specifier for one definition and an %ld for another? The current standard provides some string macros  to be used to display the portable types. For example,
the inttypes.h header file will define PRId32 as a string representing the appropriate speci-fier (d or l, for instance) for a 32-bit signed value. The inttypes.h header file includes stdint.h, so the program only needs to include inttypes.h.  

printf("x = %" PRId32 "\n", x);  
printf("x = %" "d" "\n", x);  
But C combines consecutive quoted strings into a single quoted string, making the line this:  
printf("x = %d\n", x);  


## Integer Overflow  
The unsigned integer j is acting like a car’s odometer. When it reaches its maximum value,
it starts over at the beginning. The integer i acts similarly. The main difference is that the unsigned int variable j, like an odometer, begins at 0, but the int variable i begins at –2147483648. Notice that you are not informed that i has exceeded (overflowed) its maximum value. You would have to include your own programming to keep tabs on that.
The behavior described here is mandated by the rules of C for unsigned types. The standard doesn’t define how signed types should behave. The behavior shown here is typical, but you could encounter something different

//TODO: how does this work at byte level

# FLOAT/DOUBLE

[IEEE-754 representaion visually](http://bartaz.github.io/ieee754-visualization/)
we can visualize the floating point from here, even 0 and 1 can be changed with mouse for new value visualization

- Real Nos
    - float
        - 64 bits
    - double
        - 128 bits

How floats and double are stored in memory  
IEEE system for floats representation  
[IEEE-754 float visualization](http://bartaz.github.io/ieee754-visualization/)


## Floating-Point Overflow and Underflow  
This is an example of overflow—when a calculation leads to a number too
large to be expressed. The behavior for this case used to be undefined, but now C specifies that toobig gets assigned a special value that stands for infinity and that printf() displays either inf or infinity (or some variation on that theme) for the value.  
There will be a number that has the smallest possible exponent and also the smallest value that still uses all the bits available to represent the mantissa. This will be the smallest number that still is represented
to the full precision available to a float value. Now divide it by 2. Normally, this reduces the exponent, but the exponent already is as small as it can get. So, instead, the computer moves the bits in the mantissa over, vacating the first position and losing the last binary digit. This situation is called underflow, and C refers to floating-point values that have lost the full precision of the type as subnormal. If you divide by a large enough value, you lose all the digits and are left with 0. The C library now provides functions that let you check whether your computations are producing subnormal values.  

NaN, or not-a-number  
asin() function a value, and it returns the angle that has that value as its sine. But the value of a sine can’t be greater than 1, so the function is undefined for values in excess of 1. In such cases, the function returns the NaN value, which printf() displays as nan, NaN, or something similar.  


## printing formatted output using printf  
format specifiers in C
--------------------->
%c	Character	char unsigned char
%d	Signed Integer	short unsigned short int long
%e or %E	Scientific notation of float values	float double
%f	Floating point	float
%.2f float with 2 digit after decimal
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

explain this %+10.2f = total 10 digits + 2 decimals and left justified  

```c
#include <stdio.h>

int main(){
	float a = 1234.342;
	printf("*%+10.2d*\n",a);
}

```

## const data type 
a variable/data marked as const can't be modified while program is running

## declaration and assignment  
declaration will allocate enough memory generally on stack   
int i; //declaration  
assignment will put the value in that memory  
i = 10; //assignment

## octal and hexadecimal   
octal = starts with 0 like 028  
hex = starts with 0x like 0xAE35  
To display an integer in hexadecimal, use %x. If you want to display the C prefixes, you can use specifiers %#o, %#x, and %#X to generate the 0, 0x, and 0X prefixes respectively  


Questions:-

### what is **stdint.h**
since different compilers and different machines 8 bit, 16,32 and 64 bits machine have different sizes for all the integer types this header tries to give names which will be almost same on all platforms and compiler if that size is available
- uint8_t = this is used by bytes types most of the time
- int32_t = for guaranteed 32 bit int
- uint32_t = for guaranteed unsigned 32 bit int
- uintptr_t = memory is address in form of integers since for compilers it is of type int* (say) i.e. pointer type we can't do all possible arithmetics and other operations which are possible on integers so uintptr_t was created to convert int* type to actual integer on which we can do all sorts of operation of integer  

### what is **size_t** and why it has come
so sizes can not be negative so it is better to have unsigned type for size what better way to typedef the biggest unsigned int type as size_t on that platform     

Ideas:-
This naming convention from rust looks to me best can be typedefed in c  
i8,i16,i32,i64,i128 => signed ones  
u8,u16,u32,u64,u128 => unsigned ones  

## what is a variable at hardware level

for simplicity if we think some address from RAM is stored in one of the registers say RSP   
then we can locate any other addess just by adding a no to it  
RSP+1, RSP+10, RSP+200 etc..

so a variable at low level is pretty much something/data holded at an address  
but we don't get any way to share this address   
so variable say x then only x can manipulate data at that address  

pointer is another kind of variables which can share the addresses  
so more than 1 pointer can access same memory  
hence pointer is pretty much developed for sharing of data  

we can have struct, union, enum at high level to point to data at some memory location also  

## How stack and stack frames works at hardware level in x64

![stack and stack frames](assets/stack_&_stack_frames.png)  

think of these 2 scenarios in c  

a function call = hello()  defined as void hello(){}  
so all local variables of functions and some args (as defined by abi of OS/hardware) are stored on stack memory   
just as stack is created RBP and RSP registers point to starting of stack  
once simething is pushed on stack RSP is moved to point to next memory location  
when function returns we move RSP back to RBP location  

and another fn call = greet() defined as void greet(){hello();}  
so here greet will work same as hello() function before but  
once hello is called new stack is to be created these small stacks of functions are called as   
stack frames and entire stack frame memory can be seen as stack  

now before moving RSP when hello() is called we move RBP at this new call location of hello() so  
that when hello() returns we can come back to to stack frame of greet()  
but new problem arises as since RBP was modified how we will know where greet() stack frame was started  
so somehow we have to push the RBP address before incrementing RSP when hello() was called  

see in assembly   

greet:
    
hello:
    push %rbp    #push rbp address first
    # do something else


## data type conversion say an int to short etc. 
so these type of conversions are really supported by hardware so they are not specific to any language but depends on underlying processor  



References:-
[c data types from wikipedia](https://en.wikipedia.org/wiki/C_data_types)  
[What is difference between global and static variables in C ?](http://codingstreet.com/c-basic-questions/what-is-difference-between-global-and-static-variables-in-c/)    
TODO: put intel manual and amd64 manual link  
Book:-  
C Primer plus 6th edition
