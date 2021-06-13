# FUNCTION POINTER

[function pointer basics](https://www.codingame.com/playgrounds/14589/how-to-play-with-pointers-in-c/function-pointers)
so function pointer are same like variable pointer which can point to functions with
same kind of signature
signature => same no and type of args and return type
calling over these pointers will give same result as calling those functions

advantages
we can have one function pointer which can call lots of functions with same signature 
of course  
we can typedef function pointer to act as a type and then can spawn lot of pointers  
we can pass these pointers as arguments in functions as callback

## creating a function pointer
a function pointer which will return void and take no args
void (*fun) ();
*fun is written in () if not it will be signature for normal function returning void pointer type
void *fun();

## assigning to a function with same signature
void call(){}
void (*fun)();
fun = &call;
or
fun = call;	//without & is also same

## typedef of function pointers
void call(){}
typedef void (*fun)();	//keep the same name fun for type
TODO: is it possible to give new name to the type as newfun
typedef void (*fun)() newfun;	
now we can spawn function pointer type variables
this feels like assigning a variable
fun f = call;

## passing function as callback using function pointers

## 

