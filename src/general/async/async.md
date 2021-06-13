# Asynchronous IO

## async nowdays in programming languages
now a days we just use concept of thread pool to complete the no of taks to leverage all cpu cores and perform better io  
thread pool  
lets say a cpu has physically for 4 core that means it can do 4 code execution at a time  
we created small pieces of code which are in no 20 then we will put first 4 for running and then next 4 and so on and if some task is held due to waiting on IO we will remove it and put another task/code on cpu core  
in this way we are using cpu in best possible ways 

normally we will have the following things
1. a way of writing small pieces of code generally called as future
2. way of synchronising the futures that is using the result on of one future by other so waiting for other future completion
3. an executor/runtime which is logic which will determine when a future will be put on cpu and removed from cpu when blocking in IO etc

futures are like small piece of code can be put on cpu thread pool to be run

languages using future concept => cpp, rust, go goutine, node, js, kotlin coroutine,

## why async read/write to disk if disk is available all the time in computer unlike http calls where we are relied on network and have to wait a lot even better nowdays kernel can write/read into kernel buffer and make system call as complete

[async read/write io on disk](http://osr600doc.xinuos.com/en/SDK_sysprog/_Advantages_of_Asynchronous_IO.html)