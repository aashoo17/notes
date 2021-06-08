[FileHandle - An object-oriented wrapper for a file descriptor.](https://developer.apple.com/documentation/foundation/filehandle)

```swift
import Foundation

//can relative path be used
var f = FileHandle(forWritingAtPath: "/Users/ashu/Desktop/str.txt")
//Data class to be used as buffer
//with simple api as list
var data = Data()
data.append(contentsOf: [72 ,101, 108, 108, 111, 32,     119, 111, 114, 108, 100])
//check for optional unwrapping
f?.write(data)
```

FileHandle class constructors will be used to open file fr reading/writing/both  
now normally buffer is used to be array/slice/list  
swift uses another class Data to be used as buffer which internally stores mutable list of UInt8  
this also provides simple api as append/remove to add and remove content in Data  
then read/write methods are simply called to complete the reading/writing  

**working with strings directly**


**strings for stdin/stdout use cases**
