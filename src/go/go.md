## packages



## enums

iota

## error handling


## goroutines and channels

main function is one goroutine
create other ones with func prefixed with go when calling function
```golang
func hello(){}  //function definition
go hello()  //creating goroutine
```
they run seperately so how to send/get results from 
one to another

when main goroutine finishes 
you will not see other goroutines results

using channels to pass results from one routine to another
and make them wait for results from another goroutine

creating channel
```golang
make(chan int)
```
chan => creating channel
int => tells what type of value will be passed

make goutines capable to pass value over channel
```golang
package main

import "fmt"
//writing func capable to pass value over channel
func channel(ch chan int) {
    var x = 1
    //passing int over channel
	ch <- x
}

func main() {
    //creating channel
    ch := make(chan int)
    //creating goroutine
    go channel(ch)
    //passing value from chanel to x
	x := <-ch
	fmt.Println(x)
}
```
so we can make channel capable of passing any type of value

**_closing a channel_**
```golang
ch := make(chan int)
close(ch)
```
**_Buffered channel_**

sending over channel blocks the goroutine until both the sender and receiver are ready to send/receive

buffered channel would not block send/receive 
until or unless they are full.

we can keep filling channel to a certain no defined in channel definition called capacity


[channels official golang docs](https://tour.golang.org/concurrency/2)  
[check out goroutines and channels](https://notes.shichao.io/gopl/ch8/)

