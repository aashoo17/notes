# Process

## how does memory look like of a process

1. env variables and command line args
2. stack
this has func args, return and local variables => called as stack frame
3. heap
4. uninitialized global var
5. initialized global var
6. code segment (read only)

now code segment can have read only data also best example is char *x = "Hello" and x not modifiable but access is fast

## process creation and manipulation

fork()
exec() family

process create and get the child process to execute some piece of code  
monitor child process exection status  
terminate a child  
make child a daemon by terminating parent

## process internal values information

