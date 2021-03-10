# CLASS

## class as reference
all class/objects are reference type so a variable pointing to it will always change to the object and they will never be copied (no heap data will be copied) unless explicitly cloned we have some pointers to underlying data and some meta data which resides on stack only they get copied which is quite cheap

```kotlin
class Ashu{}
var a = Ashu()
//here this statement will not create new object of Ashu only point to it on heap
var b = a
```

```kotlin
class Ashu{}
var a = Ashu()
fun change(b: Ashu){
    //change the value of b
    //Ashu object will be passed as reference and any opeartion inside function on b will change the value of a outside this function
}
change(a)
```


## Constructors

when classes are created in memory it is very fundamental task to give the values to all its field  
languages like c only allocate memory and does not give any default values it has to be done explicitly all the time  
in case value is not initialized explicitly underlying value could be anything (any previous value lying at that location or may be zero etc)  
kotlin does not allow class fields to have garbage value and a function is called purely to do the initialization this function is called as constructor.  

if no constructor is provided kotlin will generate one default constructor but it does not do anything useful

constructor are functions and many times we don't have to write login in them so 
() => this part of function for taking args are written after class name  
this can be ommited if no args is passed and no visibility modifiers is required like public/private
init{} => seperately to write logic if needed
constructor(){} => to write secondary constructor

### primary constructor

```kotlin
//implicit primary constructor
class Ashu{}

//writing a constructor with no args and no code body
class Ashu(){}

//passing args
class Ashu(x: Int){}

//code in primary constructor
class Ashu(x: Int){
    init{
        //code
    }
}
```

### Secondary constructors

calling secondary constructor

all secondary constructors calls primary constructor. why ?  
delegation is optional feature available in other languages but kotlin forces this way 
this is a design pattern called delegation to other constructor if one primary constructor is able to initialize all fields use secondary consructor to change some variable initialization logic and rest work will be done by primary.

```kotlin
class Ashu(){
    var x: Int = 0
    var y: Int = 0
    var z: Int = 0
    //secondary constructor calls primary 
    //this is called delegation to other constructor here secondary constructor is delegating to primary
    constructor(x: Int,y: Int,z: Int): this(){
        this.x = x
        this.y = y
        this.z = z
    }
}

fun main(){
    var a = Ashu(2,2,3)
}

```
TODO: reverse the primary and secondary constructor  
primary  => (x: Int, y: Int, z: Int) and secondary => constructor() how to do ??

```kotlin
class Ashu(x:Int,y:Int,z:Int){
    var x: Int
    var y: Int
    var z: Int
    init{
        this.x = x
        this.y = y
        this.z = z
    }
    //secondary constructor calls primary 
    //this is simplifying for user to call var a = Ashu() to initialize the object which in turn calls another constructor
    constructor(): this(2,3,4){
        
    }
}

fun main(){
    var a = Ashu(2,2,3)
}
```

is it design decision of the kotlin that all secondary constructor can be modelled upon primary constructor  
or all class based langauages has this feature ??
this is forced in kotlin     

in my opinion initialization of data can be done in different way and all constructor need not to be rely on each other. only if required we can do so but kotlin seems to enforce that all secondary constructor should rely on primary

```kotlin
class Ashu(){
    //constructor keyword can be ommitted if no excess modifiers are available
    //class Ashu constructor(){
    /*secondary constructor calling this() that is calling primary constructor
    writing call to primary constructor is different like here
    :this() instead of
    constructor(){
        feels natuaral this way
        this()
    }
    */
    constructor(x: Int): this(){
    
    }
    fun open(){
        
    }
}
}
```
[some discussion on secondary constructor](https://discuss.kotlinlang.org/t/why-do-all-secondary-constructors-have-to-call-the-primary-constructor/7421)

## inheritance

### inherit class
open class so that it can be inherited by default classes are final and can't be inherited
```kotlin
//since open can be inherited
open class Ashu{

}
//inherit
//primary constructor call of inherited class is also written
TODO: why inherited class constructor has to be called beforehand  
this ensures that secondary will be initialized properly using the the written constructor
class Anu : Ashu(){

}
```


```kotlin
//MyView does not have primary constructor so View can not be initialized there
class MyView : View {
    //secondary constructor is called use super to initialize super class instance
    constructor(ctx: Context) : super(ctx)
    constructor(ctx: Context, attrs: AttributeSet) : super(ctx, attrs)
}
```


this  
super  
call own methods inside class itself
call inherited methods inside class itself  
```kotlin
open class Ashu{
    fun say(){

    }
}
class Anu: Ashu(){
    fun py(){

    }
    fun call(){
        //no need to say super.say() as only one say() method is available in both class
        say()
        //no need to say this.py()
        py()
    }
}
```
call own and inherited methods on instance variables


### override methods
if we want the same name of method as in super/base class we have to override  
the function should be overridable if it is open
```kotlin
open class Ashu{
	open fun call(){
        
    }
}

Very Important  
class Anu : Ashu(){
    override fun call(){
        //still if we want can use call definition from super class
        //this is used extensively in android to use the written methods and modify them at developers end for their need
        super.call()
    }
}
```
### Derived class initialization order

During construction of a new instance of a derived class, the base class initialization is done as the first step (preceded only by evaluation of the arguments for the base class constructor) and thus happens before the initialization logic of the derived class is run.
why ??  
It is very much required to initialize base class first as our derived class is based on it not only inherting methods but properties of base classes if it is not initialized first we will get undefined behaviour.

## abstract classes
abstract class is quite similar as in other languages can have implementation based methods and abstract methods  
which needs to be implemened by class inheriting abstract class  
abstract class is different from interfaces in way that it can also provide default definition for function apart from defining function semantics/type

## companion objects
companion objects are different than static class methods but for time being can be treated as same as static in our normal use cases  

```kotlin
fun main() {
	var x = Anu.call()
}

class Anu{
   companion object {
       fun call(){
           print("Hello")
       }
   }
}
```

```kotlin
fun main() {
	var x = Anu.name.call()
}

class Anu{
   companion object name{
       fun call(){
           print("Hello")
       }
   }
}
```

## Computed properties getters/setters
```kotlin
var stringRepresentation: String
    get() = this.toString()
    set(value) {
        setDataFromString(value) 
        // parses the string and assigns values to other properties value is the current value of stringRepresentation
    }
```
By convention, the name of the setter parameter is value, but you can choose a different name if you prefer.
Since Kotlin 1.1, you can omit the property type if it can be inferred from the getter:

```kotlin
val isEmpty get() = this.size == 0  // has type Boolean
```

## Late-Initialized Properties and Variables

Normally, properties declared as having a non-null type must be initialized in the constructor. However, fairly often this is not convenient. we can initialize it is lazily when used first time

```kotlin
public class MyTest {
    lateinit var subject: TestSubject
}
```
## Interfaces
Interfaces in Kotlin can contain declarations of abstract methods, as well as method implementations. What makes them different from abstract classes is that interfaces cannot store state. They can have properties but these need to be abstract or to provide accessor implementations.

```kotlin
interface MyInterface {
    fun bar()
    fun foo() {
      // optional body
    }
}

class Child : MyInterface {
    override fun bar() {
        // body
    }
}
```

### Resolving overriding conflicts
```kotlin
interface A {
    fun foo() { print("A") }
    fun bar()
}

interface B {
    fun foo() { print("B") }
    fun bar() { print("bar") }
}

class C : A {
    override fun bar() { print("bar") }
}

class D : A, B {
    override fun foo() {
        super<A>.foo()
        super<B>.foo()
    }

    override fun bar() {
        super<B>.bar()
    }
}
```
## Visibility Modifiers

Classes, objects, interfaces, constructors, functions, properties and their setters can have visibility modifiers. 
private, protected, internal and public. The default visibility, used if there is no explicit modifier, is public.

### Packages

```kotlin
package foo

fun baz() { ... }
class Bar { ... }
```
If you do not specify any visibility modifier, public is used by default, which means that your declarations will be visible everywhere;  
If you mark a declaration private, it will only be visible inside the file containing the declaration;  
If you mark it internal, it is visible everywhere in the same module;  
protected is not available for top-level declarations.  

### Classes and Interfaces

private means visible inside this class only (including all its members);  
protected — same as private + visible in subclasses too;  
internal — any client inside this module who sees the declaring class sees its internal members;  
public — any client who sees the declaring class sees its public members.  

### Constructors

```kotlin
//explicit constructor keyword is required
class C private constructor(a: Int) { ... }
```

## Extensions
Kotlin provides the ability to extend a class with new functionality without having to inherit from the class or use design patterns such as Decorator. This is done via special declarations called extensions. For example, you can write new functions for a class from a third-party library that you can't modify. Such functions are available for calling in the usual way as if they were methods of the original class. This mechanism is called extension functions.

## Data class
We frequently create classes whose main purpose is to hold data. In such a class some standard functionality and utility functions are often mechanically derivable from the data. In Kotlin, this is called a data class and is marked as data

The compiler automatically derives the following members from all properties declared in the primary constructor:

equals()/hashCode() pair;
toString() of the form "User(name=John, age=42)";
componentN() functions corresponding to the properties in their order of declaration;
copy() function (see below).

To ensure consistency and meaningful behavior of the generated code, data classes have to fulfill the following requirements:

The primary constructor needs to have at least one parameter;
All primary constructor parameters need to be marked as val or var;
Data classes cannot be abstract, open, sealed or inner;
(before 1.1) Data classes may only implement interfaces.

### Copying
It's often the case that we need to copy an object altering some of its properties, but keeping the rest unchanged. This is what copy() function is generated for

### Data Classes and Destructuring Declarations

```kotlin
val jane = User("Jane", 35) 
val (name, age) = jane
```

## Sealed Classes
[sealed class basics](https://antonioleiva.com/sealed-classes-kotlin/)

Sealed classes are used for representing restricted class hierarchies, when a value can have one of the types from a limited set, but cannot have any other type. They are, in a sense, an extension of enum classes: the set of values for an enum type is also restricted, but each enum constant exists only as a single instance, whereas a subclass of a sealed class can have multiple instances which can contain state.

```kotlin
sealed class Expr
data class Const(val number: Double) : Expr()
data class Sum(val e1: Expr, val e2: Expr) : Expr()
object NotANumber : Expr()

fun eval(expr: Expr): Double = when(expr) {
    is Const -> expr.number
    is Sum -> eval(expr.e1) + eval(expr.e2)
    NotANumber -> Double.NaN
    // the `else` clause is not required because we've covered all the cases
}
```

A sealed class is abstract by itself, it cannot be instantiated directly and can have abstract members.

Sealed classes are not allowed to have non-private constructors (their constructors are private by default).

Note that classes which extend subclasses of a sealed class (indirect inheritors) can be placed anywhere, not necessarily in the same file.

[sealed class from journal dev](https://www.journaldev.com/18719/kotlin-sealed-class)
basically for general purposes sealed classes are like enums but better  
they can take multiple types inside them whereas enum allow all the variable to be of same types  
sealed class are more like rust enums which allows multiple types inside enums

instace of sealed class is not allowed  
sealed class constructors are private by default

```kotlin
//this is not possible in enum as String and Int both can not be used
enum class Ashu(str: String){
    //string
    a("String"),
    //Int
    b(2)
}
```

```kotlin
//selaed class
sealed class Ashu{
    //here we know that only Anu and Vik are inheriting Ashu and are nested classes so something which is of type Ashu  
    //can only be of type Anu or Vik which can be checked easily
    class Anu:Ashu(){}
    //second 
    class Vik:Ashu(){}
}
```

## Nested and Inner Classes

```kotlin
class Outer {
    private val bar: Int = 1
    class Nested {
        fun foo() = 2
    }
}

val demo = Outer.Nested().foo() // == 2
```
### Inner classes

```kotlin
class Outer {
    private val bar: Int = 1
    inner class Inner {
        fun foo() = bar
    }
}

val demo = Outer().Inner().foo() // == 1
```

## Enum Classes

```kotlin
enum class Direction {
    NORTH, SOUTH, WEST, EAST
}

Here Color is telling that all values inside Color can take constructor having Int argument RED(2),GREEN(1) etc
enum class Color(val rgb: Int) {
        RED(0xFF0000),
        GREEN(0x00FF00),
        BLUE(0x0000FF)
}
```

## Type aliases
Type aliases provide alternative names for existing types. If the type name is too long you can introduce a different shorter name and use the new one instead.

```kotlin
typealias NodeSet = Set<Network.Node>

typealias FileTable<K> = MutableMap<K, MutableList<File>>
```

## Delegated Properties
There are certain common kinds of properties, that, though we can implement them manually every time we need them, would be very nice to implement once and for all, and put into a library

lazy properties: the value gets computed only upon first access;
observable properties: listeners get notified about changes to this property;
storing properties in a map, instead of a separate field for each property.

TODO: complete it need an hour of read



### object keyword in kotlin
[object in kotlin](https://en.proft.me/2019/08/26/object-keyword-kotlin/)
singleton  
companion  
anonymous class  


## References:
[kotlin classes official docs](https://kotlinlang.org/docs/reference/classes.html)