# function

function they save you from repetitious programming. If you have to do a certain task several times in a program, you only need to write an appropriate function once. The program can then use that function wherever needed    
running same instructions without any change may not be very useful. so idea of arguments and return value came into picture.  
arguments are data which can be passed to function from outside which in turn change the result of function.  
return value is data which is returned from function for use.  

input(argument) ---> function ----> output(return value)  
 
[function/procedure explained](https://www.youtube.com/watch?v=uS4KO-rpvsU&list=PL0oekSefhQVJdk0hSRu6sZ2teWM740NtL&index=32)  

## function at hardware level
function - it is simply a jump instruction at hardware level  
think of it like this  
I have kept some instruction at address 20 to 30  
if processor executing at address 2 jumps to 20 and run instruction till 30 and come back to address 3 now  
that's it - it is a function   

## argument passing
we have two defined places to keep arguments in memory  
- register  
- stack   

since register are faster generally kept on register  
but register are limited and they have fixed size say 8 bytes (in x64) - so stack is used in these cases  
1. when we have to pass more than six argument in x64  
2. data structure which are larger in size than register to be passed  
3. data to which address/pointer is required - as we can take address of register  

## return
value to be given back is kept in register - %rax in x64  

## saving register
since two functions are running on same processor  
they will use same register also  
so caller has to somehow save its registers before giving to callee  - so that it can return to its previous state  

this can be done in 3 ways  
1. caller saves all register on stack before giving control  
2. callee will save all register then modify them and restore the register before giving control to caller  
3. caller saves few registers and callee saves few of them  

different convention arose on different platform over the years for saving register. Linux settled on option 3.

## ABI
all kernel/os will decide their way of passing argument to which registers, return value to which register, and saving register convention  
even different hardware can constraint these way of doing due to different no of registers etc - x86 has few register so we have to keep most of args on stack and so on ..
so hardware + platform can generate different ABI  
if we have binary code which is compiled for one ABI convention may not run on other ABI.  

System V ABI is most commonly used these days - linux, freebsd and most unix variant etc... use it  