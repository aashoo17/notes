# When

[working with when in kotlin](https://kotlinlang.org/docs/reference/control-flow.html#when-expression)
kotlin when is like switch in c and other languages  
but it is based on the match like syntax

```kotlin
when (x){
    1 -> //do this
    2 -> //do this
    3 -> {//do this}
    //default condition if none is matched
    else -> {//do this}
}
```

when can be used as expression or statement  
expression means it can be assigned to any variables

else can be ommitted if all the cases are covered before hand manually  
mostly in enum and sealed class no of cases are limited and default condition may be ommitted  

```kotlin
when (x){
    //when same code is to be executed we can write one liner like this
    0,1 -> //do this
}
```
using range
```kotlin
when (x) {
    in 1..10 -> print("x is in the range")
    in validNumbers -> print("x is valid")
    !in 10..20 -> print("x is outside the range")
    else -> print("none of the above")
}

```