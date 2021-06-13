# Insertion Sort

## Inspired from golang sort.go
[Golang Sort](https://github.com/golang/go/blob/master/src/sort/sort.go)

[insertion sort](https://www.youtube.com/watch?v=OGzPmgsI-pQ)

divide the array into two parts
1. sorted
2. unsorted

e.g. lets say following array
[4,2,7,9,1]

we will start like this initially
think as first element 4 is sorted and rest is not
make a loop and start from the next element 2 to till last element 1

for i:= 1; i < arrayLength - 1; i++
here we are starting from index 1 i.e. second element and increaing 
by one till arraylength - 1 as index starts from 0.

we will write a nested loop for each iteration which will start from
same index as previous i.e. i and will go in opposite direction of 
previous loop where all sorted element lies 
for j:=i; j >= 0; j--
inside this loop we will swap two adjacent element 
swap(j,j-1)

but we dont always want to swap, so one another condition is added 
if j index element is smaller from j-1 then only swap
say we can check two elemnt at index i and j comarison by
less(i,j)  => true if element i is smaller than j

then we will change loop like this
for j:=i; j >= 0 && less(j,j-1); j--

[4,2,7,9,1]
first iteration outer loop
we will start from 2

first iteration inner loop
we will start from 2
then check if 4 (previous element) is greater than 2
since it is we will swap
[2,4,7,9,1]
now outer loop will point to 7
inner loop
start from 7 and check if 4 is bigger since it is not we will leave it
[2,4,7,9,1]
now 7 is checked with 4 and 2 repectively since 7 is bigger from both
no change
same with 9 no change
[2,4,7,9,1]
next with 1
since 1 is smaller than 9 we will swap
[2,4,7,1,9]
now 1 is smaller than 7 swap again
[2,4,1,7,9]
this goes on and finally we get
[1,2,4,7,9]


//TODO: these loops can be convered to iterators
for..in syntaxes can be used to traverse
rust,cpp,swift,kotlin can benefit from this


//TODO: implement this logic in all the languages
c,cpp,rust,go,swift,kotlin

//TODO: after implementaion in all languages
implement following logic
sorting for array and vector of any type T
sorting for strings classes
sorting for any custom struct data

//TODO: since so many loops is going on do debug
and see if the same is happeing in each iteration of 
loop as we expect




















