# operator overloading

operators are pretty much useless for classes they don't provide any functionality but they can be very natural in some operation so they can be defined for classes a special meaning  
in class binary opeartor will take two classes and emit a new class

```cpp
class Ashu{
    int age;
    //overloading + operator
    //return Ashu type and + will take another Ashu type to be added with => Ashu &a
    Ashu operator +(Ashu &a){
        //created Ashu var
        Ashu b;
        //here age is used directly without using this
        b.age = age + a.age;
        //return b
        return b;
    }
};
```