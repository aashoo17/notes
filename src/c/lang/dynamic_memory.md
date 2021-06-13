# DYNAMIC MEMORY ALLOCATION

TODO: Heap is a general idea move it to general topics  
## HEAP
is assigned by kernel so is platform dependent  
Heap mangement by linux kernel  
ram has contiguous memory locations say there addresses are
40 next will be 41 and then 42 and so on...

now say when heap/dynamic memory allocation will start take any starting point
i will call it 61
when we will call malloc for 4 bytes allocation 
it will mark 61,62,63,64 as allocated and cant be allocated further in future i will give it name as pointer x
next call for say 3 bytes allocation will mark 
65,66,67 as allocated say it is named as pointer y
if i call free on x it will release/deallocate 61,62,63,64 
now linux has a data structure which will keep record of all the free locations
next call to malloc will first search for free location big enough to kept in one of the continuous free locations
if it matches exactly the same all the bytes will occupy and the location will be kept out pf free data structure
if it is small that much memory will be marked as occupied and rest will be kept in the free data structure
so last we have freed x i.e. 61,62,63,64
next we make a call to allocate 3 bytes it will see that we have a free location of 4 bytes good enough to allocate 3 bytes
now 61,62,63 will be allocated and 64 will still be marked as free
next call to allocate 3 bytes now it will not find any free location from free data structure to allocate
so now it will start from 67 onwards
i.e. 68,69,70 will be allocated
last location till where we have reached during dynamic memory alloation we call it to be marked as brk
and next request is made on top of brk(read as break)

TODO:
Does free data structure is handled by language runtime itself without interference from kernel.
Look for book linux programming interface chapter 6 for process for proper details of memory allocation on HEAP and STACK
heap brk
stack pointer
[process memory breakup in linux including heap](https://manybutfinite.com/post/anatomy-of-a-program-in-memory/)


[dynamic memory allocation malloc,realloc,calloc and free in depth](https://www.codingame.com/playgrounds/14589/how-to-play-with-pointers-in-c/dynamic-memory-allocation)  
how it differs in compiler allocation for memory vs kernel/run time memory allocations  
deallocation of memory allocated by compiler vs kernel  
why dynamic memory always works with pointers not variables  
calloc giving initial 0 value to all the locations wheras malloc   
all these functions can fail in circumstances when memory can not be allocated and NULL pointer is returned  
so we have to continuously have to check for NULL return when these functions are used.  



TODO:
Why malloc always gives pointer  
is my assumption true  
using malloc dynamic memory is allocated by kernel at runtime so compiler can't know the address etc for such locations hence we always take pointers to such locations  
as without pointer we will not be able to track this location if we are storing address in these locations we have to have pointer to pointer so generally we will see  
lot of pointers to pointer when using mallocs or dynamic memory allocations.  
malloc can allocate memory for single var or array of that type and c language can only handle array behind pointers.


PROBLEMS:  
use malloc to create 20 bytes dynamic memory aloocation since malloc doesn't initialise them they will have garbage value check the garbage values.  
use calloc to create 20 bytes it initializes all the location with 0 check if its true  
realloc one ptr by doubling to its previous size and getting the new ptr  
TODO:  
does realloc copies the previous bytes till the new size (either big or small)  
does it free the previous pointer  

use free to mark a location as free for new allocations.   
