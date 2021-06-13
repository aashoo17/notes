# Shell
These steps are reuired in creation of any shell

## Get the inputs given by the user and store it in some array 
we can use getchar() function to get the individual character, use while loop to get all the cahracters input given by the user
use malloc to allocate memory as we dont know what amount of input will be given by user, just fix a memory space initially when exeeceded by user use realloc to create more memory space 
## After getting the string tokenize it into words generally by seeing the whitespaces given by the user
use strtok() function to tokenize the string
## Create a child process and use any exec family function to excute the commands
using fork() command to create a new process
fork will return process id of child in parent process and 0 in child process
we will check if pid is 0 to excute the next commands only by child process
execvp function takes the tokenized string and executes them in child process

## Create builtin commands in shell

## Questions....
why getchar returns an int instead of char its stores
can we write own function instead of using getchar()
tokenize string without using strtok
understand whats a process?
execvp() working?
can we write own fork and execvp
why builtin command like cd,exit are required to be in shell why they cant be external commands/programs itself like grep
can getline be used instaed of getchar
whats a system call
