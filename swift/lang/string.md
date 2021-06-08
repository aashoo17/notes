[string in swift](https://developer.apple.com/documentation/swift/string)

swift 5.1 onwards uses utf-8 for string encoding  
writing unicode directly in swift string 
```swift 
let x = "\u{65}\u{301}"
```
declartion
```swift
let x = "hello world!"
```

string are value types
```swift
let x = "hello"
let y = x   //y gets a copy not a reference in swift
```

comparison and equality operator  
==, <=,=>,<,>
TODO: how comparison is done on bytes/character/unicode values in string

concatenation with +

string creation from constructors init

inspecting string

append string

insert char

couting string 
```swift
let x = "\u{65}\u{301}"
print(x.count)      //it is 1
//so basic char count we get in count
//what is we want to count utf8/utf16/unicode bytes used ??
```

replace/remove substrings

change case

find substring

find char

get substring

split string

iterate over string chars

reorder/sort string chars

Manipulating Indices




