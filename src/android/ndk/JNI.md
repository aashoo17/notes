[javah utility oracle docs](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javah.html)
[JNI oraacle docs](https://docs.oracle.com/javase/7/docs/technotes/guides/jni/spec/jniTOC.html)
[JNI basics](https://www.protechtraining.com/content/java_fundamentals_tutorial-_java_native_interface_jni)

//TODO:
i have lets say libashu.so file (i.e. compiled binary no source)

want to use a function say
```c
void hello(char x[]){
	printf("%s",x)
}

```
which i know is defined in my libashu.so library

then i will write my java code

```java
package com.marakana.jniexamples;

public class Hello {
  public native void sayHi(String who, int times); //1

  static { System.loadLibrary("HelloImpl"); } //2

  public static void main (String[] args) {
    Hello hello = new Hello();
    hello.sayHi(args[0], Integer.parseInt(args[1])); //3
  }
}
```
here 1 and 2 are important for loading the libashu and giving prototype of 
function which is defined in native c/cpp

next we will call
javah utility to generate corresponding .h and .c file which works as glue
how to do that??

Now again why GCC compilation is required??

passing and returning data java equivalent in c/cpp
especially c static and instance method of cpp conversion

string from c/cpp vs java string equivalent
Array equivalent

exception