## Optional

optional is an enum which will have two values  
1. member having the actual associated value
2. nil

### declaring optional
in swift normal variables are not allowed to have nil values if it is required for a variable to be able to have nil values they are called optional and has to be marked explicitly  
```swift
var x : String? 
```

### unwrapping optional
so variable which is marked optional will show value like  
optional(value_of_variable)  
nil   
so it is necessary to get the underlying value when not nil and it is called as unwrapping the optional  
```swift
var x : String? 
//later assigned value to x which is not nil
//unwrapping the value
x!
```

### auto unwrapping
optional can be declared to auto unwrap themselves whenever value of it is used
TODO: find the syntax