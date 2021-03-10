[io in cpp](http://www.cplusplus.com/doc/tutorial/files/)  
[cpp stream classes](https://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm)

## BASIC stream
istream,ostream,iostream  
MYVIEW:stream is idea how bytes can be written/read from some location they also employ buffering by default in cpp  
cin,cout,cerr are defined as stream and implemented to terminal and keyboards

in cpp we said files are to be opened commonly for these 3 operations only
read
write
read/write both

so created three stream as below to do these three operations exclusively

## FILE IO

ifstream => only accepts input
ofstream => can only output
fstream => both input/output

we call this stream as
say
fstream f;
TODO:this fstream class will be created on stack amd all the fields initialized with its default constructor  
default constructor doesn't bother to initialize any field so open has to be called or other constructor to be used

we next make call to open to initialize all the fstream fields and two things we need most
is file name and mode in which we open
as we know by default
fstream => opens for read/write
ifstream => for read
ofstream => for write

so open mode is only required if we want to change these default opening modes
TODO: can we change mode for ifstream/ofstream also as their sole purpose seems to be already defined

next we need read/write method call but they are replace with << and >> operator hence we will see
something like
f << "hello world"  
<< and >> are for string based opeartions only  
for working with bytes we have to use f.read() or f.write() only

and at the end we will close the file that is rlease the fstream from stack
generally stack values will be removed once function terminates but close is required when
fstream is allocated on heap or called directly in main and will not be removed until program terminates

```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main(){
    //if allocated on stack is struct/class's all elements initialized to its zero values
    ofstream f;
    //open now works like constructor and initializes some values of class
    //open will not create the file here
    //to create extra arg to be passed if file not available 
    //f.open("str.txt",ios::app);
    f.open("str.txt");
    //explicit mode can be given if required
    //f.open("str.txt",ios::out);
    //write function converted with << operator 
    f << "Hello World!";
}
```
//ifstream
```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main(){
    char data[100];
    //if allocated on stack is struct/class's all elements initialized to its zero values
    ifstream f;
    //open now works like constructor and initializes some values of class
    f.open("str.txt");
    //read function converted with >> operator 
    f >> data;
}
```

//fstream
```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main(){
    char data[100];
    fstream f;
    f.open("str.txt",ios::app);
    f >> data;
    cout << data;
}
```
## opening modes of file

[Binary file io in c++](https://courses.cs.vt.edu/~cs2604/fall00/binio.html)
how fstream/ifstream/ofstream are by default do only character based io
read and write method for byte based io  
[filehandling-difference-between-iosapp-and-iosate](https://stackoverflow.com/questions/10359702/c-filehandling-difference-between-iosapp-and-iosate)


cout and cin in cpp are instance of stdout and stdin streams and creted automatically
they will read/write from terminal

TODO:is ios an enum which applies mode of opening a file

TODO:how to do read/write on bytes 
ios::binary
[working with binary read/write operation in cpp](http://courses.cs.vt.edu/~cs2604/fall00/binio.html)
TODO:using constructor instead of open method call to initilaize the fstream on heap instead of stack