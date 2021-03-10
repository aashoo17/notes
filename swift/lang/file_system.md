## File System

Foundation import is required to handle file system  

in unix file paths are strings  
but URL class gives access to any type of path like file path on disk, network path over http,ftp etc  
hence generalizes the path  

FileManager class gives access to the details which may or may not be common in file handling on all computers  
say username on different computers will be different and hence home directory name and so on  
FileManger class gives lot of values which can be used to make life easier  

so now path is basically string or URL and can be modified at these two stages  
string manipulation to change path vs URL methods to change in the path which one to be used

[FileManager Class Tutorial for macOS: Getting Started with the File System](https://www.raywenderlich.com/666-filemanager-class-tutorial-for-macos-getting-started-with-the-file-system)

[Apple file system basics](https://developer.apple.com/documentation/foundation/file_system)

[FileManger class and its methods](https://developer.apple.com/documentation/foundation/filemanager)

```swift
import Foundation
//string to specify path
let completePath = "/Users/ashu/Desktop/MyPlayground.playground"
//convert to URL
let completeURL = URL(fileURLWithPath: completePath)
//using FileManger to home directory for any computer
var f = FileManager().homeDirectoryForCurrentUser
//modify home directory stored in var f to point to desktop
//f is an instance of URL class
f.appendPathComponent("Desktop")
```

TODO:
create files and dir  
delete  
move and copy  
see the contents of dir  
file attributes such as size, permissions for read/write etc  
rename  
