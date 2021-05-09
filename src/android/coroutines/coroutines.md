# Coroutines

## create coroutines  

all the coroutines are created in a scope which will be used to launch coroutines and cancel them from this scope when required  

### scope  
scope is a variable created by CoroutineScope() using a Dispatcher  
```kotlin
    //create corotine scope variable
    //GlobalScope is is a coroutinescope which runs till program execution is not finished  
    //TODO: how to use Dispatchers.Main in CoroutineScope
    val scope = CoroutineScope(Dispatchers.IO)

    //this scope can be used to spawn as many coroutine you want
    //TODO: launch also takes Dispatcher so why both launch and CoroutineScope need to be given Dispatcher ??
    scope.launch {

    }

    //again new coroutine
    scope.launch {

    }

    //cancel all coroutines launched by scope
    scope.cancel()
```

## suspend functions

all couroutines take suspend function for execution  

### withContext()
withContext() is also suspending function which takes Dispatcher   
any code inside withContext() can be spawned on any other Dispatcher thread so this will not block main thread which is responsible for UI rendering  

```kotlin
suspend fun ashu(){
    //send execution on IO thread
    withContext(Dispatchers.IO){
        Log.d("ashu","Hello World")
    }
    //now we are back on Main thread
    //TODO: we will still come back on Main thread even if CoroutineScope is launched on IO dispatcher  
}
```
