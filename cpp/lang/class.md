# class

classes have data members/properties and function members/methods
class Class1{		//class creation

}

Class1 className;	//object creation(instatiation)

members in class a well as struct are accessed by . notation
and if pointer to class or struct members are accessed by ->

**data encapsulation with public/private and use of this keyword**
```cpp
#include <iostream>
using namespace std;
class Ashu{
    int x = 0;
    public:
        void call(){
            cout << this->x;
        }
};

int main(){
    Ashu a;
    a.call();
}
```

**sometimes function implementation is written seperately like**  
so any methods as well as constructor/destructor can be written seperately  
```cpp
class Class1{		
	int i;		//member default to private
	private:
		int x;
	public:
		void setValue(int value);
		int getValue();
};

void Class1::setValue(int value){};		//actual method implementation
int Class1::getValue();
```

so generally three files are written 
1. class and function in header files
2. function implementation in implementation file
3. code which will use these classes

## constructor
constructor a function which will run after struct is allocated on stack/heap can be used for
memory initialization or run some code

constructor and destructors are special functions called when class is created and destroyed 
respectively  
class is destroyed when it goes out of scope.   {} => represents scope
```cpp
class Class1{		
	int i;		//members default to private
	private:
		int x;
		void fun(){}	//private function
	public:
		Class1();		//constructor
		Class1(int value);
		~Class1();		//destructor
		void setValue(int value){};	//setter
		int getValue(){};	//getter
};
```

[is there stack or heap in class initialization](https://stackoverflow.com/questions/8754854/when-is-a-c-class-instantiated-on-the-stack)   
[different-ways-of-initializing-an-object-in-cpp](https://stackoverflow.com/questions/49802012/different-ways-of-initializing-an-object-in-c/49802943)  

**class initialization for stack and heap**
```cpp
class Entity {
public:
    int x, y;

    Entity() : x(0), y(0) { }
    Entity(int x, int y) : x(x), y(y) { }
}
//class on stack
Entity ent1;
Entity ent2();  //this will feel to compiler as function prototype
Entity ent3(1, 2);  
Entity ent2{};    //special syntax to escape from function prototype and allocate on stack
Entity ent3{(1, 2)};
Entity ent4 = Entity();
Entity ent5 = Entity(2, 3);

//class on heap
Entity *ent = new Entity();
```
## inheritance

class can be used in inheritance => multiple inheritances
```cpp
#include <iostream>
using namespace std;
class Human{
    public:
        void race(){
            cout << "Human" << endl;
        }
};
class Ashu: public Human{
    int x = 0;
    public:
        void call(){
            cout << this->x << endl;
        }
};

int main(){
    Ashu a;
    a.race();
}
```

## interface

class with virtual functions
```cpp
#include <iostream>
using namespace std;
class Human{
    public:
        virtual void race() = 0;
};
class Ashu: public Human{
    int x = 0;
    public:
        void race(){
            cout << "Human" << endl;
        }
        void call(){
            cout << this->x << endl;
        }
};

int main(){
    Ashu a;
    a.race();
}
```


TODO:
Defining method as **const safe**  
void Class1::setValue(int value) const {};		//const safe they will not change any....  

implicit constructor and destructor		//default if not defined  



