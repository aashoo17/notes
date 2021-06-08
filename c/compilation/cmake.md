[cmake docs](https://cmake.org/cmake/help/v3.19/)

[**project command**](https://stackoverflow.com/questions/26878379/in-cmake-what-is-a-project)

## creating variable
```cmake
# variable name is created with value 10
# can be used as ${name}
set(name 10)
```

## conditional

## creating executable

```cmake
cmake_minimum_required(VERSION 3.10)
project(prac C)
# create target main from main.c 
add_executable(main main.c)
```

## creating library

```cmake
cmake_minimum_required(VERSION 3.10)
project(prac C)
# this will create libmain.a
# if SHARED is declared libmain.so is created
add_library(main STATIC main.c)
```

## include a directory for header files

```cmake
cmake_minimum_required(VERSION 3.10)
project(prac C)
add_executable(main main.c)
target_include_directories(main PUBLIC include)
```

## include a library for linking to a target executable/object
```cmake
cmake_minimum_required(VERSION 3.10)
project(prac C)
add_executable(main main.c)
add_library(call SHARED call.c)
# telling to link libcall.so to link to main executable
# though here library is libcall.so is being created and later told to linked to main
# we can also link other libraries say for e.g. libuv.a/libuv.so like this
# target_link_libraries(main uv)
# find_library() command can be used to simplify searching for library
target_link_libraries(main call)
```

## finding library and include files and using them

```cmake
cmake_minimum_required(VERSION 3.10)
project(prac C)
# find the library libcall.a / libcall.so and give it a variable name lib
find_library(lib call)
# find the library libcall2.a / libcall2.so and give it a variable name lib2 they are searched in these paths also /usr/local/lib /usr/lib
find_library(lib2 call2 /usr/local/lib /usr/lib)
# find the header files
find_path(headers some.h)
# tell to use found header file 
include_directories(${headers})
add_executable(main main.c)
# using the found library
target_link_libraries(main ${lib})

```

## generating binary and library in a particular directory

```cmake
cmake_minimum_required(VERSION 3.10)
project(prac C)
# this will set the binary generation path
set(EXECUTABLE_OUTPUT_PATH build)
# this will set the library generation path
set(LIBRARY_OUTPUT_PATH build)
add_executable(main main.c)
```






