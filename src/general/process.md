# Process

process vs program  

process id and parent process id  
- getting it in program 
- can be used for doing various activities with process like killing, any modification, sending signals

process memory layout  
- text section i.e. executable 
- data section (initialized and uninitialaized)
- stack (stack frames)
- heap
    - free data structure
    - free data structure having block size and pointers
    - free bloack scanning before allocation on heap

basics of virtual memory and page scheme employed by kernels and its advantages

stack 
- stack vs stack frames
- recursive stack creation by a function  
- local var, args and return on stack
- auto cleanup of stack memory
- 

command line
- arguments passed from outside to main and utilizing it in your program

environment list
- name value pair
- process inheriting env list 
- getting the env single and all
- modify and unset
- where does it lies in memory layout of a process


process creation
- child process
- file sharing i.e fd sharing
- new process i.e. child memory layout vs parent

terminate process

child process
- parent waiting on child
- orphans and zombie process

program execution
- loading new program in a running process
- PATH environment variable to find the executable program



References:  
1. Linux programming interface book chapter 6 and 24 to 27


