# interprocess communication (IPC)
process are made to not interfere with each other
but eventually we need them to talk/ share results
it is achieved through IPC

## pipes
two process one will read data and one will write
unidirectional that means one process can not do both
read and write on pipe  
its implementation is very simple one process will give
data to kernel to store in kernel memory and other process
will read data from kernel  
if we want one process to do both read and write we can connect
two same processes with 2 pipes one for read and other for write

## FIFO
they are named pipes
//TODO: benefits of having name what does it acheives
is it like any two process can be connected with FIFO
since it has name whereas pipes can connect only related
process such as child process spawned by some parent

## posix shared memory
pipes are good but everytime we send data to kernel and read
it again from kernel and its expensive
so we keep data in user space and any no of processes can be 
made to access this data
only problem is we will need synchronization as data race or 
race condition can occur
data race => lets say process 1 is trying to write data and 
process 2 is trying to read simultaneously
it may be possible that half data is written (out of 8 bits say 4 bits were
written) and process 2 reads at that momemnt now data is corrupt
neighther we get initial value or final value in read
race condition => we will not be able to restrict two process
which one should access the data first lets say in prev case
process 1 first gets to write and then only process 2 reads it
how to ensure? when cpu scheduler can run any process in random.

**semaphores**

**thread based** 
**mutex** 
**channel**  

## sockets
local sockets  
works on same computer
network sockets
works on internet 

comes in pair
they have an address(a name) to identify them
in local sockets they are just file names
in network sockets they are having ip and port

byte stream based socket
they work on byte can be read or write in multiples of bytes
implemented with TCP protocal

message based socket
few fixed bytes are always squiezzed under a message
and queued based on their priority
can be read from queue one after another
implemented with UDP protocal
