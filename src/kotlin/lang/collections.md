# Collections

In kotlin all the collections are found in two forms 
1. Immutable => all the elements in this type of collection can't be modified and read only access
2. Mutable => elements inside these collections will modifiable

following this pattern we will have two types of iterator one which will go through all the elements but not allow modifications and for in loop can simplify the access to such iterator and traversing
second will traverse over all the elements and will allow modifications to any of the element



## List


## Set


## Map

## Iterator
kotlin iterators are based on nowdays common idea that these classes will implement an interface which in turn will say to implement next() method which when called will give next element of the collection when all elements are exhausted it will give some kind of indication like giving null etc
TODO: find what it is in kotlin


TODO: are List and Set are stored in contigous memory i.e. in physical memory they are laid out one after other
sometimes this is also called ordered collection ??

TODO: there are many ways to implement the map type like hashmaps and others which is default for kotlin

TODO: common api for add,remove,insert at some location for these types 
[api for List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/)
[api for Set](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/#kotlin.collections.Set)
[api for Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/#kotlin.collections.Map)


Prob. create any of the collection type 1st will be immutable and 2nd mutable and use iterators to loop over all the elements in both cases the do it with for in loop for immutable type (is for in not possible for mutable type)



Prob. 