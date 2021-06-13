# CLASS

[class in swift from swift docs](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html)

classes are references

## Stored props

initialization  
1. give props default values
```swift
class Ashu{
    var x : Int = 0
    var y : String = "Hello"
}
```
2. make them all optional (swift will initialize with nil)
```swift
class Ashu{
    var x : Int
    var y : String?
}
```
3. use init to initialize
```swift
class Ashu{
    var name : String
    var age : Int
    init(name: String,age : Int){
        self.name = name
        self.age = age
    }
}
```

using init is the best way as default values will be fixed and may not use them always and have to change after object creation   
making them all optional is bad idea (learned from mistakes of c and cpp) the whole purpose of optional will be waste here  
init can takes parameters from outside and initialize with different values as required

```swift
//this is not allowed in swift throws error that stored props are not initialized either directly or using init(){}
//swift does not initialize all props to their default zero value
//this will throw error
class Ashu{
    var x : Int
    var y : String?
}
```

```swift
//only optional props swift will initialize with nil
class Ashu{
    var name : String?
    var age : Int?
    var geneder : String?
}
var a = Ashu()
//this will print nil as name gets default value of nil being optional
print(a.name)
```


```swift
//even this throws error
class Ashu{
    var x : Int
    var y : String?
    //init has to initialize props
    init(){}
}
```

## Identity Operators
