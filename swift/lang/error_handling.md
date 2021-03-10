## Error handling

types of errors can be written in enum form and enum will implement Error protocol  
to notify that it has cases of handling error  
and i think Error protocol is just empty and only notional for marking enum of handling error  

### error handling enum
```swift
enum ErrorType : Error{
    case NoWater
    case NoFood
    case NoAir
}
```
### throwing error
throwing an error with throw keyword says that something unexpected has happened  
```swift
throw ErrorType.NoAir
```
### catching error
when error is thrown it has to be handled there are many ways to handle error but  
simplest is the calling in do..catch block  

```swift
do {
    try expression
    statements
} catch pattern 1 {
    statements
} catch pattern 2 where condition {
    statements
} catch {
    statements
}
```
TODO: learn about the type of patterns that can be made in catch

if the given pattern matches in catch block it will get executed  

functions throwing error has to be marked with throws keyword

```swift
enum ErrorType : Error{
    case NoWater
    case NoFood
    case NoAir
}
//function marked with throws to signify error will be thrown
func call() throws {
    throw ErrorType.NoAir
}
//handling error with do..catch
do {
    try call()
}
catch ErrorType.NoAir{
    print("no air error captured")
}
catch{
    print("any type of error can be captured")
}
```