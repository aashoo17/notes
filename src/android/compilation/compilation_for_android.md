# Compilation

[android bytecode runners dalvik and ART](https://source.android.com/devices/tech/dalvik)
dex bytecode  
bytecode - virtual cpu instructions    
**op_code mnemonic args** like this    
now we will have a runtime/program installed on machine which will convert this bytecode to actual cpu instructions  
so here in context of android say we have cpus - arm, x86, arm64 etc..   

i will install program ofcourse this will be platform dependent also called dalvik/ART  
which will convert from bytecode => actual hardware/cpu instructions   
now whatever the cpu of android device if i feed it dex bytecode it can run  

dalvik vs ART  
dalvik was the progrram used to run dex bytecode  
ART is the androids latest offering which replaces dalvik  

dex2oat  


## what I have to do
get commandline way to convert java/kotlin to dex bytecode   

1. use java/kotlin compiler to get .class files   
2. use dex compiler d8 to get dex from .class files    

## java compiler
download openjdk  
**sudo pacman -S jdk8-openjdk**   
for arch linux jdk8-openjdk can be used (as only java8 is supported) 
now javac will be available on commandline  

## kotlin compiler
**sudo pacman -S kotlin**  

## android compilation - command line tools
[android command line tools](https://developer.android.com/studio/command-line)  
from sdk manager in android-studio we can download the command line tools  
so d8 will generate java/kotlin .class files to .dex bytecode
aapt2 will compile & link resources (xml) file and give .apk which is not runnable  
so how do we combine .dex + compiled resource file  
then sign it using apksigner to be able to install on a device  
TODO: do compilation from command line only  

## setting classpath
[setting classpath](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/classpath.html)


TODO: I want myself totally reliant on command line and decouple myself from gradle sometime in future  
## gradle
all these step gets simplified when using gradle  
all the things gradle do for android is defined in android plugin for gradle  

in android studio go to  
file -> project structure  
we get a ui screen to configure gradle  



