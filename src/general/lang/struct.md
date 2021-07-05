## struct
same as array only we will keep different type in linear memory one after another  
this poses a big hardware problem - memory alignment requirement  

take x64  
it can access 1, 2, 4, 8 bytes in one cycle  

say we have memory locations as starting from 0 till 100  

reading memory can be done like this  
1 byte mode - 0, 1, 2, 3, 4 .. so any location  
2 byte mode - 0, 2, 4, 6, 8, 10 ... so all multiple of 2  
4 byte mode - 0, 4, 8, 12, 16, 20 ... so all multiple of 4  
8 byte mode - 0, 8, 16, 24, 32 .... all multiple of 8  

definitely hardware could have made to access memory from anywhere rather than in their multiples  
but it was easy for hardware as less physical connections are required and burden of memory alignment was not that severe

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

## struct declaration
all languages let us create any struct whose available types are decided by us  
this is done using declaring the struct

## struct memory allocation
only two types of memory exists - stack & heap   
language gives ways to create struct on stack as well as heap  

## struct memory initialization
usually before we can do anything useful we have to initialize the struct memory

## passing struct to functions
structs are heavily passed to functions for their data modification to create a new state

todo: add reference