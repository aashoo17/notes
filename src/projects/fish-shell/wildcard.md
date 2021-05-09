# under src => wildcard.cpp and wildcard.h

first understand how directory itself and its content can be read and modified
glibc chapter on file system interface is good start
header files <uinistd.h> and <dirent.h>

## globbing

globbing is matching some syntax with available directory names

## class wildcard_expander_t

vector in cpp
fields in class are private use of making them const
std::unordered_set how unordered_set defined
passing const parameter in function

## function wildcard_find()

understanding wchar_t and size_t
wide character
so in normal char size is 1 byte long and it can not store all the available char in all languages
hence wchar_t is developed in c it can be 16 bit or 32 bit depending on the compiler but ultimately
they can represent all the chars
size_t is just typedef given to an int class signed or unsigned
to work with wchar_t
https://en.wikipedia.org/wiki/Wide_character
stored in wchar_t
size_t is compiler specific type of unsigned int sizes may vary as per compiler
wchar is defined in header file <wchar.h>

//TODO: understanding unicodes

strings written like L"Hello World" or L'\0'(null) meaning
these seems to be a way UTF-16 encoded string to write starting with L

static function

const keyword

wcstring::npos
wstring is string class to handle wide char strings
wcstring is instantiation of wstring

npos
it is having a value of -1
https://en.cppreference.com/w/cpp/string/basic_string/npos

string in cpp
https://stackoverflow.com/questions/402283/stdwstring-vs-stdstring

const
const keyword with pointers passed as argument uses
pointers may point to new memory location i think this will not allow to assign them to
others
https://docs.microsoft.com/en-us/cpp/cpp/const-cpp?view=vs-2017

## How to handle the directory structure in unix/linux

header file <dirent.h> is having useful functions to handle directory
[dirent.h](http://pubs.opengroup.org/onlinepubs/7908799/xsh/dirent.h.html)
