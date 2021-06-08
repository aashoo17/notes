# struct/classes 

TODO:
1. what is the use of struct/classes  
2. how come classes make some fields private and not accessible  
3. in c/cpp heap allocations are always kept behind pointer but on stack they can be just normal variable
```cpp
class Ashu{};
Ashu a; //stack allocation like normal variables int/float etc
Ashu *a = new Ashu(); //heap allocation behind pointer
```
but java and other class based garbage collected languages if you see they will keep heap allocation of class also behind normal variable how does that happen
```java
class Ashu{}
Ashu a = new Ashu();  //heap allocation but no pointer access
```
so is it like idea of smart pointer in rust
4. function/method accessing structs/class
5. struct alignment padding 
6. initialization of struct/class
like c does not initialize but class based language even if no constructor is provided will run a default constructor and initialize the memory to some defaault value find out which language does what



## struct allocation on stack/heap

### C  
struct Ashu a;
this will always put things on stack memory  
if its local variable that is defined inside a function it will not initialize the memory with zero or defaults whatever ram holded previously value over there will be seen known as garbage values

allocation on heap is done by malloc family or brk family of functions (brk may be specific to linux/unix) but they need to be explicitly freed

### CPP
cpp has classes equivalent to struct in many ways but with added benefits  
```cpp
class Ashu{

}
Ashu a; //allocates on stack
Ashu *a = new Ashu();   //allocates on heap
```
stack allocation is not different than that in c  
but cpp comes with a concept of a constructor which is a function run when memory is allocated on heap it will initialize the class fields with some values so usually after heap memory allocation we need to eventually initialize it to make it any useful cpp makes it easy to do the same. on top of it constructor function can be overloaded to have different type of arguments keeping the same name of the constructor function.  
this heap memory is also not freed by default and has to be done explicitly  
similarly there are destructor functions which are run when pointer to heap memory is gone from the stack i.e. goes out of scope.

### Rust
rust is more like c it allocates structs only on stack  
heap allocation is not directly exposed to user with pointers but behind a smart pointer(a struct having pointer and other meta data)  
look for smart pointers in rust

### GO
go does not explicity tells if the struct will go on stack or heap it does this based on certain rules this allows users to not worry about memory allocations/deallocations on/from stack/heap.
```go
type Ashu struct{}
var a : Ashu = Ashu{}   //something like this does not gurantee stack allocations
```

### java/kotlin/swift/dart
these languages asks big heap from kernel and then keep all class objects on it there is a garbage collector running to cleanup the memory/object when not required 

## function/method accessing structs/class
now functions are just instruction which will start at some memory location/pointer so at best they are just pointers  
structs are most of the time passed to function to manipulate its fields  
starting with c when structs are small/copy is required they are passed by value and if they were big/reference/change is to be done to same struct they are passed as reference/pointer/address.  
cpp also does similar thing  

```c
struct Ashu{};
struct Ashu a;
//pass as value to call, here call gets a new copy of a, but not manipulate a itself
void call(Ashu a){

}
//manipulate a by passing reference/address
void call(Ashu *a){

}
```

[Why doesn't Java allow stack allocated objects?](https://www.quora.com/Why-doesnt-Java-allow-stack-allocated-objects)  
[Stack vs heap allocation of structs in Go](https://stackoverflow.com/questions/10866195/stack-vs-heap-allocation-of-structs-in-go-and-how-they-relate-to-garbage-collec)
[make and new in go](https://stackoverflow.com/questions/9320862/why-would-i-make-or-new)