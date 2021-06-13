#include <assert.h>

this can be used to check that at compile time something holds true if it does not compilation will fail  
so eventually it is a tool for checking compile time correctness  

but this checks from assert will not work if it is run time check or user input based checks which can vary

for e.g.


```c
#include <stdio.h>
#include <assert.h>
//call access is not given to users 
//it will be used by the programmer writing the code
static void call(int* x){
    //i want that in place of pointer x NULL should not be passed
    //so it will check that programmer is not passing NULL during call uses
    //asserts are for internal library they are not to be used in api's passed to other programmer
    assert(x != NULL);
    //say call() function is used by library author only then he does not necessarily have toc check like this
    if(x != NULL){
        //do this
    } 
    //and asserts are just removed in release builds
}

int main(){
    //NULL being passed in call
    //this will fail at compile time
    call(NULL);
}

```