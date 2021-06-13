# Variadic function
Variadic functions can take variable no
of arguments

## A basic example of variadic function
```c
#include<stdio.h>
//stdarg has all the macros
//va_list,va_start,va_arg,va_end
#include<stdarg.h>

void variadic_func(int,...);

int main(){
    variadic_func(1,2,3);
}

void variadic_func(int a,...){
    //create argument pointer
    va_list ap;
    va_start(ap,a);
    //get the next value after a as
    //its the start point
    int val = va_arg(ap,int);
    printf("%d",val);
    //get the second value after a
    val = va_arg(ap,int);
    //do cleanup
    va_end(ap);
    printf("%d",val);
}
```

## what happens if we use more than one named parameter int b here
```c
#include<stdio.h>
//stdarg has all the macros
//va_list,va_start,va_arg,va_end
#include<stdarg.h>

void variadic_func(int,int,...);

int main(){
    variadic_func(1,2,3,4);
}

void variadic_func(int a,int b,...){
    //create argument pointer
    va_list ap;
    //putting a here instead of b
    //fails the compilation
    va_start(ap,b);
    //get the next value after a as
    //its the start point
    int val = va_arg(ap,int);
    printf("%d",val);
    //get the second value after a
    val = va_arg(ap,int);
    //do cleanup
    va_end(ap);
    printf("%d",val);
}
```

## using first argument as char * in which we can pass something like 
## %d etc for telling exact no of next argument will come
```c
void variadic_function(char *x,...){

}
```