# references
lvalue refs are generally called as references  
refs are alias(new name) to a variable that is one value is pointed by more than one variables  
ref can only be assigned to a variable  

value types also can be changed by refs  
[cpp refs](https://www.learncpp.com/cpp-tutorial/611-references/)


## lvalue and rvalue 
learn it from c primer plus
TODO: explain in brief 
 
## lvalue reference like int&  
## lvalue ref uses in variable and inside function  
```cpp
#include <iostream>
using namespace std;

int main(){
    int x = 3;
    //ref to x
    int &y = x;
    //now ref y is changed
    y = 4;
    //x changed to 4 even if x is value type
    cout << x;
}
```

**references inside function**  

```cpp
#include <iostream>
using namespace std;

//references
void call(int& a){
    a = 20;
}

int main(){
    int a = 10;
    //reference is lvalue reference points to same memory
    call(a);
    //refrences can change value inside function also like pointer
    cout << a << endl;
}
```

## difference between lvalue ref and pointer 
pointers can change same memory location from different variables  
even pointers can change things inside functions  

references do all these two above   

so how refs are different than pointer and why they should be preffered over pointer

1. references needs to be initialized 
2. references can not be repointed to other location , they can only change value unlike pointer which can repoint to another location/address  
3. these references are lvalue references, they can be assigned to lvalue only

```cpp
#include <iostream>

using namespace std;

int main(){
    int a = 10;
    int b = 20;
    int *c;

    //c points to a now can change value of a
    c = &a;

    //c now points to address of b
    c = &b;

    //this we can not do with lvalue refs
    int& d = a;
    //no way d can change b now
    //lvalue refs can't be uninitialized like pointers
    //int& e;   //will give error
}

```

## rvalue refs like int&&  

## use of std::move() to create rvalue ref from anything  
```cpp
#include <iostream>

using namespace std;

int main(){
    string s = "Hello World";

    //idea is to use all the underlying resources of s now in a
    //in rust this is known as moving the underlying value 
    //TODO: what magic does std::move() does to move these resources
    string&& a = std::move(s);

    //now s should not be used as it's underlying memory moved for a new variable a
    //s could be anything which we will know how std::move() works
}
```
## rvalue ref use variable, inside function, in move constructor of a class  
[rvalue ref and using move constructor](https://www.educative.io/edpresso/what-is-a-move-constructor-in-cpp)

```cpp
#include <iostream>

using namespace std;

class Human{
    public:
    Human() = default;
    Human(Human&& h){
        //TODO: how to use it now
    }
};

int main(){
    Human h = Human();
    Human&& h1 = std::move(h);
}
```




