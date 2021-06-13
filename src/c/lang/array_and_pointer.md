# Array

## array declaration

```c
//this will go on stack or so called automatic storage - that means memory is freed when corresponding function returns
//this will allocate memory but will not do anything to initialize
int a[100];
```
## initialization 

```c
//declare and initialize together
int a[] = {10,20,30,40};

// declare then initialize
int b[10];
b[0] = 10;
b[1] = 20;
```

## designated initializer 
```c
//this says put 10th element as 10 whose index is 9
//as we know 10th element is assigned that means we want to have atleast 10 members in this array so accordingly memory is allocated
int a[] = {[9] = 10};

//assign more than 1 element
int b[] = {[9] = 10,[1] = 2};
```

## const with arrays
```c
    const int b[] = {10,20,30,40,50};
    //can't modify b now
    b[0] = 20;  //this will not work
```

```c
void call(const int *arr, size_t size){
    //can't modify array here
    // arr[0] = 10;
}

int main(){
    int b[] = {10,20,30,40,50};
    const int a[] = {10,20,30,40,50};
    
    call(b,sizeof(b));  //even though array b was not const we can send it into call() so call will think i can not modify b even though actual array is not const type 
    call(a,sizeof(a));  //this also works neither function call() not a itself can modify the array
}
```

## storage class for array => int x[100]
```c
#include <stdio.h>
#include <stdlib.h>

int main(){
    //so this a goes on automatic storage - which is stack 
    //that means memory will be cleaned corresponding function returns - main() function here
    int a[] = {10,20,30,40,50};
    //same goes for b
    int b[10];

    //allocate on heap do manual cleanup
    int *c = malloc(sizeof(int)*10);
    //heap memory cleaed up here
    free(c);
}
```

## array assignment
```c
    int a[5];
    a = {10,20,30,40,50};   //this is not possible, all elements can not be assigned together

    //we have to do
    a[0] = 10;
    a[1] = 20;
    //and so on... or use a loop
```

## array bounds
c does not care if you are passing the array size

```c
int a[10];
//access 100th element which dies not exist
//this will get some other memory and modify after array
//so programmer have to ensure correct array bound usages
a[100] = 10;
```

## array vs pointer - similarities & dissimilarities
```c
    int a[] = {10,20,30,40,50};

    //a is casted to pointer to first element
    //we can think of it like => a = &a[0];

    //difference from pointer though
    //sizeof(a) will give actual array size not pointer size - here it will give 20 bytes (size of array) not 8 bytes (for pointer)
    //++, -- is not possible on array - a++ throws compile error => this is not allowed so that a always points to first element not some other part of array
    //a + 2 will work if we want to do array traversing
    a++; //error
    ++a; //also error

    int *b = a + 2; //this will work

```
## passing array/pointers in functions
now array does not have any information about their size in c implicitly  
so we have to pass size explicitly  

we can do two things when we pass array to say some function  
1. give size as 1 of the argument
2. give pointer to last element as one of the args

//TODO: drop an example

## pointer operations - increment, decrement, add/sub number etc.. ++, --

learn about pointers in pointer.md file