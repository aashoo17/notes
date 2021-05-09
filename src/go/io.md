# IO operations

## requirements
io package  
creating file
reading 
writing

buffer then write
buffer then read
streams

flushing buffers

delete files

Idea is that we have readers and writers  
reader will be somebody implementing io.Reader interface
similarly writer will implement io.Writer interface
could be files, tcp socket etc..
we need not worry how they read and write internally but
we are sure that when we call methods Read/Write()
we will get the expected result
that means no need to understand the underlying implementaion

**Reading 100 bytes of the file named file.txt**
```golang
package main
import (
	"fmt"
	"os"
)
func main() {
    //opening the file named file.txt i.e. getting File pointer
    //which implements Writer and Reader interface
    file, _ := os.Open("file.txt")
    //close the file when enclosing func is done
    defer file.Close()
    //creating slice of length 100
    var sl = make([]byte, 100)
    //call read which will fill the slice with data
    //we can call Read as it implements Reader interface
    file.Read(sl)
    //show formatted result to visualize on stdout
	fmt.Println(sl)
}

```

**Different methods to create/open File struct for read write and execute**

generally now create and open is defined
create will create file and give write only access
open will open a file with read only permission
now creating file with different permission ??
[check methods related to File](https://golang.org/pkg/os/)



