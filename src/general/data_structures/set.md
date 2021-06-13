# Set

- set 
    - no duplication of elements
    - ordered or unordered elements

first we have to select the type of elements we have to put in set
now we have to options 
    - All types
        - void *
    - use template to keep only one type of data
        - template<int> 


keeping all types void *
wrap it in struct with pointer to next element
so that we can iterate over all the elements

make a struct which will keep heap allocation data and some meta data like heap size hashing functions and equality functions pointer etc
we can keep double pointer that is memory address of all the struct which will wrap void *

## sets ordering
set can be of two type ordered and unordered
unordered
    - we will use hashing function to convert data to unsigned int and then divide it with some no to get an index to put that data at since index of data can be gotten immediately so searching will be immediate called as O(1) => order of 1 i.e. constant time searching
ordered 
    - data will be kept in order using some comparison function

## hashing functions
hash functions will convert any type in the unsigned int

hash from pointer
pointer can be hashed if the underlying data is not involved in the hashing two same data having pointer they will be inserted which should not happen in set
say 
int x = 4;
int y = 4;
int *a = &x;
int *b = &y;
a and b will have same underlying data 4 but they will be inserted in the set


## set creation
in this we will create heap allocation
and initialize other elements

## set insertions
insert the elements

## set removal of elements
remove the elements

## set clear all elements
clear all the elements

## free the set
free the allocated space on heap

## union

## intersection

