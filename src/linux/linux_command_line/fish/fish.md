# fish shell

[fish shell tutorial](https://fishshell.com/docs/current/tutorial.html#tutorial)  
run help in fish shell to get fish documentation  - nice   

A shell is a program that helps you operate your computer by starting other programs. fish offers a command-line interface  
**all the commands are written for ubuntu/debian**  

**installing**   

on debian based   
sudo apt install fish  

**changing default shell**  

chsh -s /usr/bin/fish

**wild card**  
* - select all  
? - todo: fill it

ls -la *.jpg

**pipes and redirection**  

| is called pipe - this gives its output to another command as input  
ls -la | grep *.jpg

> < are redirection - change stdin and stdout for command   
by default stdin and stdout to command is received from terminal  

here we are changing output (stdout) to a file rather than default being terminal  
ls -la > file.txt

here we are changing the stdin  
grep hello < file.txt 

## variable

[fish shell variable](https://fishshell.com/docs/current/language.html#shell-variables)  

many applications are going to use the env variables to switch their way of working or location for finding something etc..  
[linux/ubuntu environment variable location](https://askubuntu.com/questions/164586/environment-variables-where-are-they-stored-by-linux-how-do-i-change-them-and)  
global env - /etc/environment  
use env - ~/.profile and ~/.bashrc  

**accessing a variable**  
a variable can be accessed by using $ before its name  

echo $PATH  
echo $SHELL  

they are usually written in caps but it is just convention  

**scopes of variable**  

Universal - that are shared between all the users' fish sessions on the computer.  
Global - are specific to the current user fish session
Local - Local variables are specific to the current fish session, and associated with a specific block of commands like for, while , if, function, begin or switch   

There can be many variables with the same name, but different scopes. When you use a variable, the smallest scoped variable of that name will be used. If a local variable exists, it will be used instead of the global or universal variable of the same name.


**creating shell variable**  
this is also called as exporting variable  

this creates local variable  
set --export NAME CUSTOM_NAME   
set -x NAME CUSTOM_NAME     //this is not equivalent to local - the variable will be local to the currently executing function only 
set -gx NAME CUSTOM_NAME    //creating global variable 
set -Ux NAME CUSTOM_NAME    //universal variable
set -lx NAME CUSTOM_NAME    //local variable

**removing a variable**  
also called as unexporting  

set --unexport NAME CUSTOM_NAME  
set -u NAME CUSTOM_NAME   

## List
accessing list variables $PATH  
echo $PATH[3]  
index starts at 1 and not at 0  

**PATH variable**  
PATH variables act as normal lists, except they are are implicitly joined and split on colons.  

e.g.1
```bash
set -x MYPATH 1 2 3     # this will set variable to list elements 1:2:3 => echo $MYPATH shows as 1 2 3 though
set -x MYPATH "$MYPATH:4:5"     # appending to end of a list "$MYPATH 4 5" can also be used in place of "$MYPATH:4:5"
```

e.g.2
```bash
set -x MYPATH 1
set -x MYPATH[2] 2  # but we should know that how many elements are there
```

e.g.3
```bash
set --path -x MYTHING 1     # --path tells fish to keep as colon (:) separated just like path stored in shells
# if variable name ends with PATH (like in MYPATH) it will automatically create as colon (:) separated
```

PATH is global variable in fish but it does not allow you to change it in conventional way like below  
set -gx PATH "$PATH:$HOME/my_custom_dir"  

since path is very important for many executable to work correctly if you mess it up commands like ls, echo etc will not  
work until full path like /bin/ls etc.. is written and normal user will be not able to understand why things are broken  

so fish gives another universal variable which it appends to the PATH automatically -  fish_user_paths  
try -  echo $fish_user_paths  
now modifying fish_user_paths will automatically change the path for you  
set -U fish_user_paths <some-path> $fish_user_paths  => <some_path> is your custom path

## conditional
todo: conditional

## loop
todo: loop

**loop on lists**  
```bash
for i in $PATH
    echo $i
end
```

## function

creating a function ll  
$argv is list variable holding all arguments passed to function  
```bash
function ll
    ls -l $argv
end
```

**aliasing**  
```bash
function ls
    command ls --color=auto $argv
end
```

**Autoloading functions**  
Functions can be defined on the commandline or in a configuration file  

autoloading function advantages  

An autoloaded function becomes available automatically to all running shells.
If the function definition is changed, all running shells will automatically reload the altered version.
Startup time and memory usage is improved, etc.

When fish needs to load a function, it searches through any directories in the list variable $fish_function_path for a file with a name consisting of the name of the function plus the suffix '.fish' and loads the first it finds  

By default $fish_function_path contains the following:

A directory for end-users to keep their own functions, usually ~/.config/fish/functions (controlled by the XDG_CONFIG_HOME environment variable).
A directory for systems administrators to install functions for all users on the system, usually /etc/fish/functions (really $__fish_sysconfdir/functions).
Directories for third-party software vendors to ship their own functions for their software. Fish searches the directories in the XDG_DATA_DIRS environment variable for a fish/vendor_functions.d directory; if this variable is not defined, the default is usually to search /usr/share/fish/vendor_functions.d and /usr/local/share/fish/vendor_functions.d.
The functions shipped with fish, usually installed in /usr/share/fish/functions (really $__fish_data_dir/functions).  

**function path to user created & fish default functions**
we will be interested in following two locations  
1. where user can keep its created functions - ~/.config/fish/functions  
2. where fish ships its own created functions - /usr/share/fish/functions

todo: use golang for scripting in place of fish - fish will be used only for basic things complex script are for better in golang  









