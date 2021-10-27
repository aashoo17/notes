# Closure

**closure vs function**  
only thing a closure do is it can capture outer functions scope variable whereas function can't   
apart from that there is no difference   

closure and function both are ultimately an address where code is available in memory  
and when they are called using () processor uses jump instruction to reach there and start executing code  

function and closure both can be passed as argument and both can be returned from any function  

## So getting a variable from outer scope what are the benefits that closure appear in almost all language

TODO: show some practical cases  

[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  

Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to  object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.  
Consequently, you can use a closure anywhere that you might normally use an object with only a single method.  

so it basically says in struct/class we have data and methods accesses those data passed as this/self  
