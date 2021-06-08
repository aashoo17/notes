# Templates

```cpp
#include <iostream>
using namespace std;
//even typename is valide in place of class
//template <typename T> class Ashu{}
template <class T> class Ashu{
    public:
    void call(T x){
        cout << x;
    }
};

int main(){
    Ashu<int> a;
    a.call(3);
}
```
TODO: why there are two keywords typename and class in templates when do they differ in functionality

cpp has kind of big flaw that if something is not implemented on that type still code will compile but give runtime error  
here Vishal class does not implement display which can be used by cout it throws runtime errors

```cpp
#include <iostream>
using namespace std;
class Vishal{
    
};

template <class T> class Ashu{
    public:
    void call(T x){
        cout << x;
    }
};

int main(){
    Vishal v;
    Ashu<Vishal> a;
    a.call(v);
}
```