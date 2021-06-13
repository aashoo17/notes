# Function

## declaration
```kotlin
fun x(){
    //code
}
fun x(y: Int, z : Int){
    //code
}
```
## return
```kotlin
fun x():Int{
    return 3
}
```
## parameter/arguments

### parameters
```kotlin
fun x(y: Int, z : Int){
    //code
}
```
y and z are parameters

### Default arguments

```kotlin
//parameters are assigned default value
fun x(y: Int = 0, z : Int = 1){
    //code
}
```

### named arguments
```kotlin
fun x(y: Int, z : Int){
    //code
}
//args are passed value with their name not position
x(y = 1,z = 3)
//this will also work
x(z = 3,y = 1)
//passing arg by its position
x(1,3)
```

## Unit return from function

equivalent to java void  
if no value is return this will be implicitly returned by function  

## one line function
```kotlin
//function with one line code only
fun call() = print("call")

//no need for explicit return value of x*2 will be automatically become return value
fun call(x: Int) = x*2
```

## nested function
```kotlin
fun call(){
    fun yes(){

    }
}
```

## inline function
inline function just puts the all code at the call location it is more like copy and paste the code from the function  
```kotlin
inline fun call(){
    //code
}
```

## Higher order function/lambda

```kotlin
var x = fun(){
    //code
    }
```

## Tail recursive functions
seems to be specialised for recursion

```kotlin
tailrec fun call(){
    call()
}
```


References:

[function docs from official kotlin site](https://kotlinlang.org/docs/reference/functions.html)
