# Make
**knowing these topic we can master 80% of make**  

## why make is used
 
1. normally during compilation we do the following things running gcc for compilation sending compiled files to certain locations deleting them etc more like we are running shell scripts this all shell script can be written and make will run them 1 by 1 so we get kinda automation

2. compilation can take a lot of time for big projects and most of the time it is caused as we will be recompiling everything even when changes are just made to certain file only. make can deduce if the compilation is required or the file in current state is need not to be compiled recompilation based on certain criterias such as change in file timestamp etc which user dont have to think about

what is makefile = make will get its setting from makefile to run which is in this preferred order   
GNUMakefile makefile Makefile  

Makefile is commonaly used though  

## basic syntax

Make rules => target, prerequisites, recipe  
target : prerequisites  
	recipe  

target => a file which needs to be created(sometimes only command no file generation known as .PHONY)   

prerequisites => these files are required to create the target generally looked in current directory   

multiple prerequisites  
edit: main.o edit.o call.o  

some of these files can also be written as target so those target has to run before the completion of current target   
recipe => how the target file is to be created   

a simple recipe  
multiple lines of shell script can be written for line by line execution  
gcc -o main main.c   
./main  
rm main  

TODO: what will happen if one line goes into error will it halt the further execution and - before recipe  

generally executable and object files are common which make know how to be created
something like   
gcc -c main.c  
gcc -o main main.c  
so we dont need to write a recipe => then it is called implicit rules  

when we write our own recipe => it is called explicit rules   
which can create the file named as target or maybe not if declared as .PHONY  
generally which does not generate files with same names should be marked .PHONY  
to avoid collission with same name file which somehow exists or created in future  

Phony targets  

calling make vs make target_name whats the difference is calling make executes some special target

```makefile
# all is target, main is the prerequisite, and lines below is the recipe 
all: main
    # recipe lines get executed line by line one after another, so if some fail whole target fails until the line starts with -
	./main
	rm main
```

## variables

variables in make  
variables in make are of two types   
immediate => evaluates immediately  
x := main.o call.o

deferred => evaluates before getting called  
x := main.o call.o

this becomes useful when your variable is dependent upon another variable   
if its evaluated immediately the value is captured it does not get affected by the change in 
value of the variable it is dependent upon  
deferred variables  
will take the current value of the variable it is dependent upon  
so based on situation one or other can be useful.  

splitting lines   

what names can be given makefiles
makefile, Makefile, GNUmakefile differences if any

GNUmakefile is not advised as other make implementation other than by GNU may not consider it  

```makefile
#variable which can be substituted later, this variable is deferred
execution_recipe = cc -o main main.c
main: main.c
    $(execution_recipe)

# another variable

```

## wildcards

* = matches to all  
? = matches to any single character/number  
[..] = range can be given here to match with  
~ = home directory of user  

TODO: give the wildcard pitfall example from make manual  

wildcard function  
Wildcard expansion happens automatically in rules. But wildcard expansion does not normally take place when a variable is set, or inside the arguments of a function. If you want to do wildcard expansion in such places, you need to use the wildcard function, like this:  

$(wildcard pattern…)  

## pattern matching with %

%.o : %.c
        cc -c $< -o $@

## implicit rules and automatic variables  

some implicit rules are provided by make like building executables, building object files etc  

if we don't define any rule for those targets implicit rule is used  

we can define our own implicit rule to be used  
say if we define for object files then user provided rule will override existing make implicit rule  

say for object file

```makefile
# my implicit rule for oblect file creation
# say i give main.o as target then my rule says ok main.o is file ending with .o it should have prerequisite have main.c if found run the code/recipe in shell cc -c $< -o $@  
%.o:%.c
    cc -c $< -o $@

# now when main is executable its implicit rule is used to create it but prerequisite is that main.o 
#since main.o is object file it will use our given/written implicit rule for its creation
main: main.o

```

$< $@ etc are automatic variables which signifies something  
like here   
$< says first prerequisite  
$@ says target  

now i can hardcode them like in place of they are usefule here as when we are using pattern matching like %.o we don't name file name in advance  
so they are very useful  

when we use VPATH or vpath then also they are useful as we don't know full path of file in advance so we can use these automatic variables  

**implicit variables**  
CC, CXX, CPP, CXXFLAGS, CPPFLAGS etc can be set so implicit rules can use them  

e.g.
```makefile
CC = clang
# so this implicit rule uses CC variable 
%.o:%.c
    $(CC) -c $< -o $@
```

## searching directory for prerequisites
VPATH = make uses VPATH as a search list for both prerequisites and targets of rules.   

lowercase vpath  
this allows you to specify a search path for a particular class of file names: those that match a particular pattern.  

vpath pattern directories  
    Specify the search path directories for file names that match pattern.   
vpath pattern  
    Clear out the search path associated with pattern.  
vpath  
    Clear all search paths previously specified with vpath directives.   

A vpath pattern is a string containing a ‘%’ character. The string must match the file name of a prerequisite that is being searched for, the ‘%’ character matching any sequence of zero or more characters. For example, %.h matches files that end in .h. (If there is no ‘%’, the pattern must match the prerequisite exactly, which is not useful very often.) 

vpath %.h ../headers  
tells make to look for any prerequisite whose name ends in .h in the directory ../headers if the file is not found in the current directory.  

vpath %.c foo  
vpath %   blish  
vpath %.c bar  
will look for a file ending in ‘.c’ in foo, then blish, then bar, while   
vpath %.c foo:bar  
vpath %   blish  
will look for a file ending in ‘.c’ in foo, then bar, then blish.   

The search through the directories specified in VPATH or with vpath also happens during consideration of implicit rules  

VPATH or vpath is good for finding files for make but it is not much useful for compiler say we find header files using vpath we might think that .c file containing that header now should be compiled by compiler but it is not show compiler will only know if it is passed with -I flag  

VPATH vs vpath  
VPATH is good if we want all searches to happen in some folder  
vpath = when only few patterns file should be searched say .h, .c, .o file etc

```makefile
headers = clhash/include
# vpath is used by make to find some file but say i look for header file and found it but compiler has no idea about that header though
# so i have kept it in a variable headers told make how to find it
vpath %.h $(headers)
# and then used the addprefix function to give to compiler as -Idir format
CFLAGS = $(addprefix -I, $(headers))

main:main.o
	cc -o main $(objects)
	./main
#make finds this clhash.h in clhash/include/ directory but we have to say that give it to compiler using -I format
main.o: clhash.h

```

##  Writing Recipes with Directory Search
When a prerequisite is found in another directory through directory search (using VPATH or vpath), this cannot change the recipe of the rule; they will execute as written. Therefore, you must write the recipe with care so that it will look for the prerequisite in the directory where make finds it.  
foo.o : foo.c  
        cc -c $(CFLAGS) $^ -o $@  

[look for all automatic variable reference](https://www.gnu.org/software/make/manual/make.html#Automatic-Variables)  

$@ $% $< $? $^ $+ $| $* etc 

## Directory Search for Link Libraries 

When a prerequisite’s name has the form ‘-lname’, make handles it specially by searching for the file libname.so, and, if it is not found, for the file libname.a in the current directory, in directories specified by matching vpath search paths and the VPATH search path, and then in the directories /lib, /usr/lib, and prefix/lib   

TODO: that means unlike header i don't have to pass -Ldir if vpath/VPATH is given .a/.so will be found there  

## -lname as prerequisite

## Special Built-in Target Names
.PHONY .SUFFIXES .DEFAULT .PRECIOUS .INTERMEDIATE .SILENT etc  

## Errors in Recipes

After each shell invocation returns, make looks at its exit status. If the shell completed successfully (the exit status is zero), the next line in the recipe is executed in a new shell; after the last line is finished, the rule is finished.  

If there is an error (the exit status is nonzero), make gives up on the current rule, and perhaps on all rules.  

To ignore errors in a recipe line, write a ‘-’ at the beginning of the line’s text (after the initial tab). The ‘-’ is discarded before the line is passed to the shell for execution.   

clean:  
        -rm -f *.o  

When you run make with the ‘-i’ or ‘--ignore-errors’ flag, errors are ignored in all recipes of all rules. A rule in the makefile for the special target .IGNORE has the same effect, if there are no prerequisites. This is less flexible but sometimes useful.   

## conditionals

```makefile
conditional-directive
text-if-true
endif
```

```makefile
conditional-directive
text-if-true
else
text-if-false
endif
```
```makefile
ifeq (arg1, arg2)
ifeq 'arg1' 'arg2'
ifeq "arg1" "arg2"
ifeq "arg1" 'arg2'
ifeq 'arg1' "arg2"
```
## functions
$(function_name arg1,arg2)  

### string based functions  
subst = substitute some text  
strip = Removes leading and trailing whitespace from string  
findstring = Searches in for an occurrence of find  
filter = Returns all whitespace-separated words in text that do match any of the pattern words  
sort = Sorts the words of list in lexical order, removing duplicate words.   

### filenames
dir = Extracts the directory-part of each file name in names  
suffix = Extracts the suffix of each file name in names  
basename = Extracts all but the suffix of each file name in names  
addsuffix = 
addprefix =   
join = Concatenates the two arguments word by word:  
wildcard = The argument pattern is a file name pattern, typically containing wildcard characters  
realpath = 
abspath =  

### Functions for Conditionals
if =  
or =  
and =  

### others
foreach =   
file =   
call =  
value =  
eval =  

error =  
warning =  
info =  

shell =  


## avoiding recompilation if directory timestamp changes



## common variables used as names of programs in built-in rules: 
AR AS CC CXX CPP RM CFLAGS CXXFLAGS CPPFLAGS  

TODO: CXX vs CPP and CXXFLAGS vs CPPFLAGS

## Variables for Installation Directories
prefix includedir libdir mandir srcdir

## Standard Targets for Users

all install uninstall install-strip clean distclean dist 


## parallel execution in make

[The Pitfalls and Benefits of GNU Make Parallelization](https://www.cmcrossroads.com/article/pitfalls-and-benefits-gnu-make-parallelization)  
so only targets which are not dependent on another will run in parallel not recipes on one target (recipes of 1 target will run in series only)  

so we have to write makefile keeping parallelization in mind    



## References

[GNU Make official docs](https://www.gnu.org/software/make/manual/make.html)

