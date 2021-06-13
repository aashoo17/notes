# String

[Learn about cpp strings](https://www.ntu.edu.sg/home/ehchua/programming/cpp/cp9_String.html)

cpp wanted to utilise the heap memory for strings as the heap can grow and shrink on demand at run time   
whereas in c as char array on stack this was not possible  

so what does string do to achieve this  

constructor   
---------->   
constructor call will create a pointer and behind that memory for string (all char contents) on the heap may be using default heap allocation strategy of new call  
since actual memory is going on heap we dont have to put pointer to that memory and some meta data on heap  
can be kept on stack.

```cpp
//put on stack
//actual memory on heap
string s;

//this heap allocation is never required though it can be done
string *s = new string;
```

[all constructor call string c++11](http://www.cplusplus.com/reference/string/string/string/)
```cpp
//all constructor calls
default (1)	            string();
copy (2)	            string (const string& str);
substring (3)	        string (const string& str, size_t pos, size_t len = npos);
from c-string (4)	    string (const char* s);
from buffer (5)	        string (const char* s, size_t n);
fill (6)	            string (size_t n, char c);
range (7)	            template <class InputIterator>string  (InputIterator first, InputIterator last);
initializer list (8)	string (initializer_list<char> il);
move (9)	            string (string&& str) noexcept;
```


copy constructor  
--------------->  
```cpp
string s("Hello");
//call to copy constructor by passing string s to s1
string s1(s);

//this copy constructor can also be called as following
//this is same as string s1(s);
string s1 = s;
//here if the copy constructor does not do deep copy then it will have reference to same underlying memory for s and s1
```

destructor  
--------->  
when the variable goes out of scope destructor will get called and logic is written to free the actual heap memory when destructor is run  
this does help us not to worry about memory cleanup but this has some implication if we do shallow copy i.e. bu default copy constructor provided by cpp which just copies each member but will not create new heap memory so this poiinter will also point to same heap memory and when cleanup will happen by call to destructor we have refernce to no longer valid memory  

so cpp for strings provide deep copy i.e. when copy constructor is called new heap allocation will also happen  


iterator  
------->  
iterator will be nested class calling begin() on string will give iterator type wrapping first element  
* is defined when called on iterator will give underlying value  
++ on iterator will construct iterator with next value wrapped in it
== and != is defined to check for equalities of iterator
```cpp
#include <iostream>
#include <string>
using namespace std;

int main(){
    //string copy constructor from char array
    string s{"Hello World!"};
    //iterator type is string::iterator as iterators are nested classes
    /*
    class string{
       class iterator{}
    }
    */
    string::iterator a = s.begin();
    //check if start and end iterator are not same print *a
    while( a != s.end()){
        cout << *a <<endl;
        a++;
    }
}
```
const iterators  
most of the time it is desired that getting container values for read only access so const iterators are better choice  
they will not allow modification of underlying value of containers
cbegin() and cend() are functions to get const iterators

TODO: range based for loop
[range based for loop](https://www.francescmm.com/range-based-loop-cpp11/)

insert  
----->  


remove  
----->  





strings how to handle c based strings all the headers for handling c strings  
cctype
cstdlib
cstring

