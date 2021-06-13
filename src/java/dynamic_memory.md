How does dynamic memory allocation works in java

so class is used to dynamic memory allocation or keeping data on the heap

MYTAKE:
class has two parts
properties
methods
```java
class Human{
    //prop
    int x;
    //method
    public void call(){
        System.out.println("i am human");
    }
}
```
so starting with methods
they are just functions or instructions code for cpu
so they just go on read only memory marked by kernel of process
now properties
they go on the heap we will know the size, allocate that much size on heap and with the concept of constructor we can initialize that heap memory
looks simple but since we dont have pointers in java how recursive class will know to allocate the memory
```java
class Ashu{
    //Ashu is used as props
    Ashu as;
}
```
now we have class Ashu having recursive use of Ashu as variable in class now it is difficult to guess the size 
