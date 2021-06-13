[setting default values for a struct](https://stackoverflow.com/questions/37135193/how-to-set-default-values-in-go-structs)  

idea is that i give a struct field default values if the struct field is not explictly initialized  

```go
type A struct {
   I int    `default0:"3" default1:"42"`
   S string `default0:"Some String..." default1:"Some Other String..."`
}

func main() {

//TODO: say if only one default tag is there we don't have to call Set()  
//this will be enough
ptr := &A{}

Set(ptr, "default0")
fmt.Printf("ptr.I=%d ptr.S=%s\n", ptr.I, ptr.S)
// ptr.I=3 ptr.S=Some String...

Set(ptr, "default1")
fmt.Printf("ptr.I=%d ptr.S=%s\n", ptr.I, ptr.S)
// ptr.I=42 ptr.S=Some Other String...
}
```