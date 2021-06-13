# class

### object allocation always on heap

### default constructor initializes class fields to null even int like basic data type all made null

```dart
class Ashu{
  int age;
}

main(){
  var a = Ashu();
  print(a.age);
}
```

### using methods to pass the class (class fields to a function)

```dart
class Ashu{
  int age;
  call(){
    print("call");
  }
}

main(){
  var a = Ashu();
  a.call();
}
```

### making fields/methods private to class 
[privacy library level in dart lang](https://groups.google.com/a/dartlang.org/forum/#!topic/misc/WllRrg0zTd4)

### this in dart to access class instance

```dart
class Ashu{
  int age;
  
  call(){
    print(this.age);
  }
}

main(){
  var a = Ashu();
  a.age = 10;
  a.call();
}
```
### constructor overloading

```dart
//no need to call Human() constructor explicitly as it does not contain any args
class Ashu extends Human{
  int age;
  
  call(){
    print(this.age);
  }
}
class Human{
  //constructor Human is written but since it does not take any args we dont have to call this constructor explicitly 
  //when a new class inherits this class
  Human(){
    print("constructor");
  }
  type(){
    print("human");
  }
}

main(){
  var a = Ashu();
  a.age = 10;
  a.type();
}
```

[calling constructor of super class](https://stackoverflow.com/questions/13272035/how-do-i-call-a-super-constructor-in-dart)
```dart
class Ashu extends Human{
  Ashu(): super(20);
  int age;
  
  call(){
    print(this.age);
  }
}
class Human{
  Human(int age){
    print(age);
  }
  type(){
    print("human");
  }
}

main(){
  var a = Ashu();
  a.age = 10;
  a.type();
}
```
here Ashu(): super(20); is calling Human(int age) constructor i think this is ok when you dont want any code in Ashu() constructor  
TODO:
but what if we want the code to have in constructor can we write  
Ashu():super(){
  //code
}
or can we call like this
Ashu(){
  super();
  //other code
}

### inheritance

```dart
class Ashu extends Human{
  int age;
  
  call(){
    print(this.age);
  }
}
class Human{
  type(){
    print("human");
  }
}

main(){
  var a = Ashu();
  a.age = 10;
  a.type();
}
```

### overriding methods