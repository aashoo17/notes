## list
[1,2,3] => list literal creates a list object
a list with same type
x = [1,2,3]
valid list with mixed types
x = [1,2,'hello']
list can grow
x = [1,2,3]
x.append(4)
now x will be [1,2,3,4]

so list is mutable and can be changed over time

[list methods](https://docs.python.org/3/tutorial/datastructures.html)
append()
extend()
insert()
remove()
pop()
clear()



## tuple
(1,2,3) => tuple literal creates a tuple object in memory
x = (1,2,3)
can't be changed it is immutable
x.append(4) => throws error

x = (1,2,3)
x = (1,2,3,4)
it is valid syntax but previous object is x = (1,2,3,4)
creates a new tuple object in memory
previous (1,2,3) is in memory but no longer is referenced
later memory will be claimed by garbage collector(GC) 


## set
[sets](https://docs.python.org/3/tutorial/datastructures.html#sets)
{} vs set()
can't use {} literal as it is used for dictionary

## dict
[dict](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

looping techniques
items()
enumerate()
reversed()
sorted()


ordered and unordered collection
ordered => they will be kept in the same order as written in memory
so if you jump one memory location to other you will always find the next 
one python will not reorder them thats why they can be accessed with index
easily

unordered => they can be rearranged by python in memory generally referenced by key

