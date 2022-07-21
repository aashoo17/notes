# types or variables

1. operations like +, - , *, /  etc.. supported by ALU on binary integers and floats  
2. storage of these variables - store them anywhere in RAM  
    stack and heap are common way to store in memory  
    from there they are fetched to CPU registers
3. char, bool, string are not supported directly by CPU they are ideas built on top of binary integer numbers  
char - ascii, unicode encoding on top of integers  
string - array of chars  
bool - just integers with new type name having possible two values as 0 and 1 only
4. pointer - address in RAM is generally hidden by compiler from normal user, pointer exposes that address to store and work on them  

## How computer fetches memory and memory alignment
[Data/memory alignment: why it is required](https://developer.ibm.com/technologies/systems/articles/pa-dalign/)  

## processor working on bytes  

Book : How do it Know ? - page 121 and 124
Get the details of load and store instruction and data instruction - this tells data transfer between RAM and registers 

this pretty much explains how processor fetches the memory  
this memory is kept in registers say take a 64 bit register ( common in x86_64 processors)  
byte kept in register is 00000000 00000000 00000000 00000000 00000000 00000000 00100000 10000000  
now processor can operate on 1st byte only/2 bytes combined/ 4 bytes/  all 8 bytes  

see intel manual volume 1 chapter 3.4.1.1 table 3-2. Addressable General Purpose Registers

## Integer
[Decimal and binary conversion of int](https://www.youtube.com/watch?v=RKAQsyPRk_w)   
int representation was very easy any no can be represented in binary form as described above.  
more bytes mean bigger no can be represented say for  
16 bits = 2^16 possible representation  
32 bits = 2^32 possible integer representation  

**2's Complement** 
it solves these problems
1. +0 and -0 
2. addition will work as subtraction on binary only by removing overflow bit
TODO: show two's complement with example and benefits of it

TODO: add conversion of decimal to binary for integers
TODO: add about overflow

## Float

[convert float to binary number](https://www.log2base2.com/number-system/float-to-binary-conversion.html)  
this is not representation in IEEE-754 format used in computers for float storage in memory but this will be used to reach to IEEE-754 format  

**IEEE-754**  
IEEE-754 is a standard for floating point numbers. It is used to represent floating point numbers in binary form.

[IEEE-754 representation visually](http://bartaz.github.io/ieee754-visualization/)  

32 bits - 1 + 8 + 23 bits
1 bit - for sign
8 bits - for exponent
23 bits - for mantissa

64 bits - 1 + 11 + 52 bits
1 bit - for sign
11 bits - for exponent
52 bits - for mantissa

TODO: convert 8.125 and 8.33 to float binary representation in 32 bit and 64 bit form  

## Character
a simple way was designed to store characters in memory
assign a integer value to each character    
initially it was felt that english alphabet and some special character is good enough  
this required only 1 byte (8 bits) to do so and a standard ascii encoding was used  

[ascii table](https://www.ascii-code.com)  - this was used commonly  
later need was felt to store character from all over the world  - unicode was born which used 4 byte (32 bits) to store each character  
TODO: UTF-8 and UTF16 encoding

## Boolean

boolean has only two values true and false   
1 bit is enough to store boolean value but as smallest memory is 1 byte (8 bits) it was decided to use 8 bits to store boolean values  









