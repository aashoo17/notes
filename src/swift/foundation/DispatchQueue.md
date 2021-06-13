[Dispatch](https://developer.apple.com/documentation/dispatch)

[dispatchqueue](https://developer.apple.com/documentation/dispatch/dispatchqueue)

global and main are two types of thread pool in ios  
main for priority calls such as for UIs  
and global is used for heavy lifting i.e. computational heavy tasks but may take time and will have less priority than main


```swift
import Foundation

//global() is static method will return an instance of class on which async is called which takes a closure
//interesting part is that after async we dont have to write () and closure doesn't take any args hence called as {...code...}
//block under async signifies that will be executed asynchronously
DispatchQueue.global().async{
    print("hi")
}
//same syntax as above called async with () 
DispatchQueue.global().async (execute: {
    print("hi")
})
```

```swift
//main is a variable hence does not take () like global() call
DispatchQueue.main.async{
    print("hi")
}
```