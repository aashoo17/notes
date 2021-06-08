## Scope
int x = 3;

x can find memory 3 but x is visible only in the block and no more  
block is 
{
    int x = 3;
}

## storage 
automatic storage => placed on stack and cleaned up when function returns and stack is cleaned up  
static storage => static storage means lives through entire program global variable are static by default if we want static storage any where else we have to mark it static like inside function or block  
register storage => can be kept on register or fastest storage but address can not be taken for this variable as its not in ram address  

## linkage
static on global variables defines linkage as we know global variables are static storage by default so static marks them as 
internal linkage which means when borrowed in another file this will not be visible  
if not marked static it is called external linkage and will be visible in another file

```c
//internal linkage global var will not be visible in other file
static int x = 3;
//external linkage global var will be visible in other file
int y = 2;
int main(){

}

```
