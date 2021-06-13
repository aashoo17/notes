# Heap

## new
[memory allocation with new](https://docs.microsoft.com/en-us/cpp/cpp/new-operator-cpp?view=vs-2019)
any data type can be allocated on the heap using new keyword
```cpp
class Ashu{}
//new allocates it heap
Ashu *a = new Ashu();
struct Human{}
//goes on heap
Human *h = new Human;
```
TODO:
if in any class/struct if user defined constructor is not written with new will both class and struct will be initialized with default constructor
say class Ashu and struct Human as in prev example  
```cpp
//class with no user defined constructor
//default Ashu() will run and initialize all the fields to its zero equivalent
Ashu *a = new Ashu;
//what about the structs ??
//will they be initialized to zero equivalent this does not happen in c when malloc is used
Human *h = new Human;

```

## delete

delete will deallocate memory on heap pointed by a pointer
```cpp
struct Human{}
//goes on heap
Human *h = new Human;
//delete from heap
delete h;
```
