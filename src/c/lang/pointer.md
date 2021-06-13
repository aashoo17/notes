# POINTER
Every byte has address in RAM  
say i have a byte with adress 1000 then next will have 1001,1002 and so on  

if we have a variable which can store this address value it is known as pointer  
since pointer has address to a byte and all types can't be represented in 1 byte they will have more consecutive bytes which will make its value  
so pointer are also given type by which it knows from the byte i am pointing how many more bytes a ihave to take into consideration to evaluate underlying value  

## derference 
evaluating the underlying value is called dereffing by which we get the underlying value of a pointer  

```c
int x = 10;
int *y = &x;
//dereff
*y = 20;
```


## void pointer
pointer has type = once dereffed we get actual known type and then easy in use for further operations  
but this limits pointer as they can point to any address no matter what underlying type so came void* refer to location with void* without worrying about underlying type  

but since we don't know underlying type dereferencing void pointer is illegal so it needs to be casted before dereferencing to an actual type  
void* helps in generic programming in c language  

```c
//allocate 0 address which is equivalent to NULL
void *x = NULL;
int y = 10;
x = &y;
//it will not work
*x = 20;
//this conversion is required beforehand
//may be void assignment should the conversion automatically
//*x = 20 should be automatically call *(int *)x = 20 as after assignment compiler 
//should have known the type
*(int *)x = 20;
```

## NULL pointer and trying it to change in function
NULL is just 0   
this means that when pointer assigned an int 0 then 0 is implicitly converted to pointer type  
int *x = 0;

x having address as 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 (thinking machine is 8 byte pointer addressable)  
now actually no byte in RAM is having this address so we can not dereff and get a value but this can be used as marker pointer to say there is no address  
pointed by this pointer  

this is better than having any random address which may point to some location and when dereffed can cause unwanted memory changes  
why random value will be there  
when any memory is freed it does not make it explicitly zero because it is extra copy work which is unnecessary  
TODO: give e.g. 


so what is macro NULL  
sometimes it is defined as 0 sometimes explicitly casted to pointer type  
#define NULL 0  
#define NULL (void*)0  


```c
//a pointer not given any address will have garbage address available at that allocated place
int* x;
//since address 0 we don't have any value this was given name NULL
//TODO: is it correct #define NULL (int *)0 i.e. int 0 casted to pointer
//since 0 is false having a NULL value also means if,while if given NULL will not run
int *y = NULL;
//so from having any garbage value its better we have NULL if not pointed to any location and will be consisent
//knowing address as NULL compiler can do thing like dereff 

```

so NULL is not actual memory location if we pass a NULL pointer to a function we get a copy of this pointer this NULL pointer can not be dereffed to alter the underlying value so inside function we will generally assign the address of some location to the pointer but if we do not return this address to original pointer then this will never change

```c
int main(){
    //this pointer is NULL initially
    int *x = NULL;
    //this will not change value of x to 20
    call(x);
    //this will change ptr underlying value to 20
    x = newCall(x);
}
//takes a pointer to int
void call(int *ptr){
    //if it is NULL
    if(ptr == NULL){
        int y = 10;
        //we can't deref a NULL pointer to assign it a value
        //assign the pointer to address of y which is having 10 as value
        //since we are changing the address reffered by the ptr pointer it will no longer change the value of outside ptr location x here which was NULL
        ptr = &y;
        //trying to change ptr by dereffing and amking it 20
        //pointer x will remain NULL only
        *ptr = 20;
    }
}
//in such scenarios we have to return the modified pointer inside function to the outside pointer x in here
int *newCall(){
    if(ptr == NULL){
        int y = 10;
        ptr = &y;
        *ptr = 20;
        return ptr;
    }
}
```

## array
c tries to be smart and use pointer to work with array also for this it defines arithmetic operators on pointer  
adding any number will give new pointer say  
int* x = &y;    //address of y
x+1;    //this will give address of next 5th byte from address of y  (since int's are 4 bytes adding 1 moves pointer by 4 addresses, on others types adding by 1 it will move by sizeof(type) given)  

## ++ over array is not possible but + no is 

### char array

### pointer arithmetic
ptr++  
ptr--
ptr+=
ptr-=

## function pointer  
now functions are pretty much instructions stored in memory somewhere we can have pointer i.e. address to that location  

## pointer to pointer
pointers also take memory and kept at some address so we can have address of pointer also  

common use :

idea is keep comapct array of pointers at one location which will generally take negligible amount of space and actual allocations will happen at any random locations  
with this we can use all goodies of pointer arithmetic on pointers but be flexible with storage of data at any location  
but this become very nuisance when char array is used as you have to use it even if you don't want that

## void**
void** can be dereffed and pointer arithmetic is valid as void** just refer to array of memory addresses we know the size of address 4/8 bytes as processor so  
++,-- can increment/decrement by 4/8

```c
int y = 20;
float a = 2.1;
void** x = malloc(30);
//x is getting dereffed and valid 
//since address is to be stored and size is known in advance
x[0] = &y;
//pointer arithmetic is happening here *(x+1) = &a;
//as we know memory size 8 bytes on 64 bit we will travel that much
x[1] = &a;
```
### void and void * type
none of the variable can be assigned to void but all of the pointers can be assigned to void *
```c
int x = 3;
//this does not work
void y = x;
//this works void * takes int * as input
void *z = &x;
```

### function pointer as parameter and generalised arg and return from function using void *

```c
//function to take any variable as arg and return any variable
void *call(void *){};

#include <stdio.h>
int y = 4;
//a function which will take call func signature as its one of the args
//ashu takes call pointer as its input
//since void * can represent any value when defining call func pointer we can take any value as arg and return anything
void ashu(void *(*call)(void *)){
    call(&y);
}
int x = 3;
//a function to match signature of call which can be passed in ashu function
void *call(void *y){
    puts("Hello");
    //return global variable/static storage var as local variable gets destroyed from stack when function exits and reference to it will not be valid
    //can always return NULL if dont want to send any address
    return &x;
}

int main() {
    ashu(call);
}
```

### function which takes a pointer to a variable which will be initialized with values
```c
#include <stdio.h>
#include <string.h>

typedef struct Ashu{
    char name[25];
    int age;
} Ashu;
//function call takes a struct pointer and modifies it later
void call(Ashu *a){
    a->age = 30;
    strcpy(a->name,"Ashutosh Singh");
}

int main() {
    //creating just a pointer to struct and passing in call
    //since a pointer variable just allocates a size of ponter 4/8 bytes occupying other data will result in segfault
    //as pointer will try to access other memory region for when derefferenced
    //here pointer is trying to access memory for age int and name char array which were never allocated
    Ashu *a;
    call(a);
    //we can create first the Ashu variable so that correct size is allocated then take the pointer to it
    Ashu a;
    call(&a);
}
```
this problem was faced in pthread_create() which takes pthread * as input and i was trying to pass pointer directly

## char**

## recursive types using pointers


## Refs: 
[need of pointer](http://duramecho.com/ComputerInformation/WhyCPointers.html)   
[good pointer explanation](https://www.youtube.com/watch?v=h-HBipu_1P0)

Read the reference PointersAndMemory.pdf



