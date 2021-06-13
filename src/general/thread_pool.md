## Thread pools

We know in a system all available threads which can actually do work are limited to no of physical cpu/core in the computer  
take for example it is 4  
now what i do is i write 10 asynchronous tasks which can run independently  
but since threads are 4 only we can actually do 4 tasks at a time  
then we will use the concept of thread polling which is that whenever one gets free assign a task on it  
this could be done manually or we can write code based on some logic which will assign the tasks automatically to free thread on our behalf  

this program is know as runtime and this idea of automatically using all the threads available is called thread poolling

### green thread

tasks which we can write to run concurrently could be of any no they are called as green thread but in reality only few can run at a time based on cpu cores

### synchronization
when working on multiple green threads still sometimes we need to know result from some thread or share a piece of data in multiple of these green threads in general we have two ways to share the data here
1. channels
2. mutex

channels are like where any data is always owned by one thread it does whatever it wants with it and send it to other thread and does not modify this data again  
so its more like single ownership of data at any time and we are good

mutex are data structures which puts lock on the data in a thread and start working on the data either read/write if another thread wants access to this data it can not until or unless other thread releases the lock so here also data though shared between multiple threads but only one thread at a time modifies it

GO:  
this has built in thread pooling and any green thread or task which can run in parallel can be created as  
```go
//we dont have to worry about putting the green thread on thread pool  
//automatically taken care by go 
//spawn the green thread
go call()
func call(){
//code here
}
```
go has built in runtime that is logic to put these green threads on actual threads

Rust:  
rust uses tokio crate for doing this green thread creation (also called as task mostly in tokio) as well as runtime i.e. logic for utilizing the actual threads for these green threads

rust has idea of creating futures which are essentially like green threads or code which need cpu and can run independent of others

it would have been good if tokio can directly like go allocate all the futures available on thread pool  
but currently it seems it allocates only on single thread  
tokio will do allocation on available threads only when this future is explicitly passed to   
toki::spawn()  

in go we see that all the green threads are allocated on runtime automatically without any extra work

so in rust this is idea  

task => create some piece of code which can run concurrently
spawn => use tokio spawn to tell it that use all the available threads for this task
runtime => piece of code which has logic to assign threads for tasks

i know that tokio has executor/schedular which can assign the task on single thread or multiple threads but common what is the use of async when all written async code has to explicitly passed to tokio::spawn()

CPP:  

