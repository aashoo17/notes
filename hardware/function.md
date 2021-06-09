# function

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

System V ABI is most commonly used these days - linux, freebsd and most unix variant etc... use it  