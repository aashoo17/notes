# Hardware

Processor, RAM, BUS, IO Bus

## How does processor and RAM carry out most of the tasks using BUS 

Read Book - But how Do it Know?, The Basic Principles of Computers for Everyone – J. Clark Scott  
Page 108 - The first great invention  

![hardware in bsic form](assets/hardware.png)

## RAM 

MAR - memory address register  
set MAR value and access that RAM location  
address - value kept in MAR  

## Processor

**registers**  
register faster value access than RAM   
TODO: why register is fast because closer to processor so electricity travel time is smaller compared to RAM  

**ALU**  
takes two registers and do operation   
like +, -, *, /, %, <<, >> etc...  
so since operations are more than 1  
assign a number corresponding to each operation so that ALU can know  
which arithmetic operation is to be done - this no is called OPCODE  

e.g.  
for adding 10 + 10  
one 10 in rax and one in rbx  
ADD %rax %rbx  => opcode register register  

**control section**  
it is not very useful from software perspective  
sync all opeeration happening in hardware  
like a byte kept on bus should be changing only some particular register this will be ensured by control section  

**IR**   
IR register keeps the current instruction being executed  

**IAR**   
IAR register keeps the address of next instruction to be executed  

## BUS
bus is just group of wires which takes electricity from one place to another - taking electricity means taking bytes  
all the things from ram, register, alu etc.. are connected to bus  
so that they can give/take byte to/from another place  



# hardware support for programming

explore what is actually supported by hardware  

## variable
1. operations like +, - , *, /  etc.. supported by ALU on binary integers and floats  
2. storage of these variables - store them anywhere in RAM  
stack and heap are common way to store in memory  
3. char, bool, string are not supported they are ideas built on top of integer numbers  
char - ascii, unicode encoding on top of integers  
string - array of chars  
bool - just integers with new type name  
4. pointer - address in RAM is generally hidden by compiler from normal user, pointer exposes that address to store and work on them  

## loop
IAR - instruction address register  
keeps next instruction to be executed  
changes serially one to next instruction automatically  
what if we can change this at our will  
processor gives opcode to do this  
loop - say start at instruction at line 10 go till instruction 15 and jump to 10 again and so on... you got a loop  

## conditional
flag register - a special register which implicity gets set by ALU operations  
processor will check this flag register before jumping to new location  
and you got the conditional  

## function
function is also a form of jump  
think of it like this  
I have kept some instruction at line 20 to 30  
if processor executing at line 2 jumps to 20 and run instruction till 30 and come back to line 3 now  
that's it - it is a function  

only thing is that line 20 to 30 - have same instruction all the time not very useful  
so argument and return ??
argument - data can change in line 20 and 30  
return - give some changing value back  

**argument passing**  
we have two place two keep arguments  
- register
- stack  

since register are faster generally kept on register  
but register are limited and they have fixed size say 8 bytes (in x64) - so stack is used in these cases  

**return**  
value to be given back is kept in register - %rax in x64  

**saving register**  
since two functions are running on same processor  
they will use same register also  
so caller has to somehow save its registers before giving to callee  - so that it can return to its previous state  

this can be done in 3 ways  
1. caller saves all register on stack before giving control  
2. callee will save all register then modify them and restore the register before giving control to caller  
3. caller saves few registers and callee saves few of them  

**abi**  
all kernel/os will decide their way of passing argument to which registers, return value to which register, and saving register convention  
even different hardware can constraint these way of doing - x86 has few register so we have to keep most of args on stack and so on ..

System V ABI is most commonaly used these days - linux, freebsd etc... use it  

## Array
store many of the items 1 after another in linear memory voilaa got arrays  

## struct
same as array only we will keep different type in linear memory one after another  
this poses a big hardware problem - memory alignemnt requirement  

take x64  
it can access 1, 2, 4, 8 bytes in one cycle  

say we have memory locations as starting from 1 till 100  

reading memory can be done like this  
1 byte mode - 1, 2, 3, 4 .. so any location  
2 byte mode - 2, 4, 6, 8, 10 ... so all multiple of 2  
4 byte mode - 4, 8, 12, 16, 20 ... so all multiple of 4  
8 byte mode - 8, 16, 24, 32 .... all multiple of 8  

what we will do in these scenarios  
8 bytes long data - use 8 byte reading 1 cycle used, but this can be done only if memory kept at address of multiple of 8  
4 bytes long data - use 4 byte reading 1 cycle required given memory kepy at address in multiple of 4  

2 data types - 1st is 8 byte at address 8 and 2nd 4 bytes kept at 16  
1st use 8 byte reading and then 4 byte reading and 2 cycle we are done  

2 data types - 1st is 1 byte kept at address 8 and 2nd is 8 byte kept at address 9   
1st use 1 byte reading at address 1 and since 8 bytes are kept at address 2 8 byte reading can not be done  
we can read in chunk of 4  - takes total 3 cycles  

**data alignment**  
if we keep the data at an address multiple of their size memory is called aligned and less cpu cycles are required  

## enum
simply array of integers all given different names  




