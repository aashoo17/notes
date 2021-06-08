## create an iterator of a vector container

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    //defined an empty vector
    vector<int> v;
    //fill the vector with 10 elements
    for(int i = 0; i < 10; i++){
        v.push_back(i);
    }
    //call begin() to get the nested iterator class
    vector<int>::iterator vi = v.begin();
    //loop till not equal to end() or less than end() can be called
    for(;vi != v.end(); vi++){
        //deref to get the underlying value
        cout << *vi;
    }
}
```

## using for(:) in cpp
[range based for loop](https://en.cppreference.com/w/cpp/language/range-for)
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    //defined an empty vector
    vector<int> v;
    //fill the vector with 10 elements
    for(int i = 0; i < 10; i++){
        v.push_back(i);
    }
    //loop with for over containers which define begin() method
    for(auto x : v){
        //print the value
        cout << x;
    }
}
```

## custom iterator
to create a custom iterator we will need at minimum 3 things  
1. nested iterator class  
2. * deref operator overloading
3. ++ operator overloading

class will implement begin() method and it will return nested iterator type  
deref it and it will give the first element    
++ will take you too next element and dereffing it will give next element  
this ++ should continue till end() method  

TODO:
implement a custom iterator  
different types of iterator
