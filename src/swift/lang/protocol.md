## protocol

[protocols from swift book](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html)

protocol are just like interfaces which provides method signatures which any class can inherit and provides its instructions  
can be inherited by struct,class and enums
```swift
protocol Human{
    func race()
}
class Ashu : Human{
    func race(){
        print("human")
    }
}

var a = Ashu()
a.race()
```

### Protocol Inheritance

protocol can inherit another protocol to say that all of them needs to be satisfied

### Class-Only Protocols