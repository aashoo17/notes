# pointer

[pointers in golang basics](https://tour.golang.org/moretypes/1)

Pointer: create, initialize, deref
pointer to structs
pointer receivers in struct
auto deref of pointerwith .
nil pointer
pointer indirection when using methods

TODO: explain why these things not available in c
void* equivalent as no generic in go = interface{} is used for generic programming instead of void*
++, -- and +, - operator on ptr = since arrays are implemented as ptr and size we don't need ++, -- or +, - syntaxes to traverse over arrays
-> syntax = this is not required as . does auto deref on ptr


no void pointer why interface{}  
memory address can represent virtually anything   

no pointer arithmetic like c  
since arrays are not represented as in terms of pointers only pointer arithmetic to reach to next  
element is not required  

nil  
pointer can be marked nil to represent no actual pointer address  

slice => slice literal,nil,len & cap, make, append, range  

```go
package main

import "fmt"

func main(){
	//int data 
	var x int = 20
	var y int = 30
	//short form
	z := 40
	//int pointer
	var a *int = &x
	var b *int = &y
	c := &z
	//nil pointer
	var d *int = nil

	//deref
	*c = 50

	//array
	e := [5]int{1,2,3,4,5}
	//slice
	f = e[1:4]
	//slice literal
	g := []int{2,3,4}
	//nil slice
	g = nil
	//len and cap of slices
	len(f)
	cal(f)

	//allocate memory for slice with make
	make([]int,20)
	//append to a slice

	//range to loop over slices
}
```