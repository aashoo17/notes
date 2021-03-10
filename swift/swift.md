print	//for console logging

// or /**/ 		//for comments

## data types
var 	//var and let type inferred by compiler if not specified
let		//constant not changeable

Int,Bool,String,Double,
unsigned int

in variable declaration in swift it is possible not to initialize at that time
but it must be initialized with data before its usage 
in basic types like Int,Float etc we know the size and can even initialize with 
default like zero but for arrays and all we have to know the size but if you look to
type signature 
var arr [Int]
no size can be inferred that means swift has gone to principle 
we can declare variable but it will not be initialized in memory like c/cpp
before use do explicit initialization of the variable

var x:String = "Hello"		//explicit type declaration

optional 
var x: String? = "Hello"
? says that Object can have nil value

## operators
+,-,*,/,%
+=,-+,*=,/=
x == 3 ? 35 : 23	//
range 1...10, 1..<10
TODO: string methods

## conditionals
let x = 0
if x < 2 {
    print("if")
}else{
    print("else")
}

## loops
var i = 0
while(i < 10){
    print(i)
    i = i + 1
}
for i in 1...10{
    print(i)
}
TODO: is there no usual for loop

## function
func hello(){
    print("Hello World")
}
return in function
func hello()->String{
    print("Hello World")
    return "Hello"
}
pass parameters
func hello(name: String){
    print("Hello World")
}

TODO: passing function as parameter and returning function

## Arrays 
var arr = [1,2,3]		//ordered
var x = [1,2,3]		//array
var x: [Int] = [1,2,3]
var x: Array<Int> = [1,2,3]

## Dictionaries
var dict = Dictionary<Int,String>()	//key value pair onordered

## Sets
var set: Set = [1,2,3]	//supposed to have unique values

## Tuples
var tuple = ("Ashutosh Singh",20,true)
var tuple = (name:"Ashutosh Singh",age:20,isMarried:false)

tuple.name		//access member, tuple is more like javascript object literal
tuple.0			//access member

## Maps/HashMap


## force unwraping
x!

## class
constructor,multiple constructor
```swift
class Ashu{
    //constructor
    init(){
        print("Ashu constructor")
    }
    var x = 3;
    func call(){
        print(self.x)
    }
}

var a = Ashu()
a.call()
```


self
```swift
class Ashu{
    var x : Int = 3
    func call(){
        //using self to refer to future instance of the this class
        print(self.x)
    }
}
```
inheritance
```swift
class Human{
    func race(){
        print("human")
    }
}
//inheriting Human class
class Ashu : Human{
    var x = 3;
    func call(){
        print(self.x)
    }
}

var a = Ashu()
a.race()
```
super
```swift
class Human{
    func race(){
        print("human")
    }
}

class Ashu : Human{
    var x = 3;
    override func race(){
        //using super to refer to inherited class
        //and calling its method
        super.race()
        print("calling race from Ashu")
    }
}

var a = Ashu()
a.race()
```
override
```swift
class Human{
    func race(){
        print("human")
    }
}

class Ashu : Human{
    var x = 3;
    //overriding race func from Human class
    override func race(){
        print("calling race from Ashu")
    }
}

var a = Ashu()
a.race()
```
calling super class method without prefixing with class instance
```swift
class Human{
    func race(){
        print("human")
    }
}

class Ashu : Human{
    var x = 3;
    func call(){
        //race method is coming from inherited Human class
        //there is no prefix of class Human before race
        //and just called as function 
        //it seems if method not found in the class it knows
        //it must be coming from super class so no need to prefix
        race()
    }
}

var a = Ashu()
a.call()
```

## enum
case and methods
```swift
enum Human{
    case Age
    case cage
}
```


## generics
generic bound with class or protocol