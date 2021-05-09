[threading in java](https://www.youtube.com/watch?v=6Oo-9Can3H8)  

Runnable vs Callable  
Executors - for single thread and thread pool  
Futures  


**Runnable**  
this can provide a piece of code for executoion on any thread  

**Callable**  
problem with Runnable is that they don't return a value but Callable does return a value  
so Callable may not return value immediately for long running CPU bound tasks/IO intensive tasks and so on ..  
so Callable gives Future<T> in return where this Future will resolve to value of type T  
for resolving the future immediately by blocking the thread we can call Future.get() method  

**Executors**  
this will create a single/multi threaded pool where Runnable/Callable can be spawned and can be resolved  
usually Runnable are putted on executors execute() method and Callable on executors submit() method  