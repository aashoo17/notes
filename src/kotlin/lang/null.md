# null

[null safety](https://kotlinlang.org/docs/reference/null-safety.html)

in general variables don't allow null as a value  

```kotlin
var a : String = "Hello";
a = null //error

//explicitly marking variable to be possibly having null
//known as optional  
var b : String? = null  //can be done

//calling props and methods on optional 
b?.length   //this will give value if b is not null or null otherwise

b!!.length  //this will give length or error when b is null , this is more like assertion for value to be not null

//casting
//String? to String say

val c: String? = b as? String
```
