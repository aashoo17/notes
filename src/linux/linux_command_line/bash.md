# SHELL

What is a shell?
shell(its a program) is nothing but programming language interpreter to convert shell commands in machine code


terminal
A way to transfer any commands to be interpreted by shells and then send to OS for execution.
Different types of shell
bash
sh
ksh
zsh
commands for doing basic operations are builtin in all the shells 
their names may differ in different shells for doing the same operation bash is the default shell in terminals
apart from builin commands we can use any external program for doing tasks
generally all these programs/commands gives an exit status (a simple no code from 0 to 255 to represent type of outcome then later new line commands are 
executed)

## Linux basic shell commands

command -options arguments
command history with up arrow
exit a shell by typing exit
echo      // returns whatever you type
$			//starting with $ means ant variable
|		//called as pipe and used to chain several commands output of one becomes input for next
echo $SHELL     //to check the type of shell
#!/bin/sh      //It is called shebang written at the top of a shell script
.sh extension		//Shell script is just a simple text file with “.sh” extension

## Directory traversal
cd 		//used to change directory
cd - 
cd ~UserName
pwd		//present working directory

## List files and dirs
ls		//list directory
ls -l	//long format

cd(enter)	//move to home directory

absolute path /
relative path . and ..

touch 		//to create a directory
less 
zless		//display files of gzipped files 
vim filename	//to edit the file in vim editor
chmod 		//to edit the file permission(read,write and execution)
sh shell_script_name 	//to run the shell script(don't forget #!/bin/sh at top )
#		//used for comments
ps 		//list the running processes
date
date format_type   //to get the date e.g. date +%m_%d_%y-%H.%M.%S
date_formatted=$(date +%m_%d_%y-%H.%M.%S)       //create a variable to run some command
cal 		//shows calendar

## understanding folder structure

/usr
/usr/bin
/usr/lib
/usr/local
/usr/sbin
/usr/share
/usr/share/doc
/var
/var/log

## link creation

symbolic links
hard links
ln		//create symlink or hard link
ln		//hard link
ln -s 	//symlink

## Globbing for directory path

wild cards
*		//Matches any characters
?		//Matches any single character
[characters]	//Matches any character that is a member of the set characters
[!characters]	//Matches any character that is not a member of the set
					characters
[[:class:]]		//Matches any character that is a member of the specified
					class	
					
[:alnum:] 		Matches any alphanumeric character
[:alpha:] 		Matches any alphabetic character
[:digit:] 		Matches any numeral
[:lower:] 		Matches any lowercase letter
[:upper:] 		Matches any uppercase letter				
## Variable

VAR=value		//no spaces otherwise it will treat as command and try to execute it
				//variable not assigned will be empty string
MY_MESSAGE="Hello World"
echo $MY_MESSAGE
read MY_NAME		//read a variable from a std input
export MYVAR		//export variable to be used by other program
. ./myvar2.sh		//We can source a script via the "." (dot) command: changes in any variable here will reflect in original file
"${USER_NAME}_file"		//kind of concatenation with variable

## Copy, Move and remove
cp /tmp/a/* /tmp/b/		//wildcards * to choose any/all
cp /tmp/a/*.txt /tmp/b/
cp -r		//recursive

mv
mkdir
rm 		//remove
rm -i 	//for interactive i.e. asking for confirmation and all before doing


type
which		
man
whichis
alias

## Escape characters

special characters are treated as literally as they are inside double quotes
can be escaped using \
\ is used to write in multiple lines

df		//current free space on disks
free	//check free space
exit	//exit terminal session


Web Utilities
------------>



## cron


## proc


## Process viewing and killing

system login
access to file and directories
login with ssh and run commands on different machine
grep and regular expression

making files immutable
symbolic links for files
checksum and verification
cryptographic tools and hashes
rename, move and copy files

## I/O redirection
redirection of input,output and error
>
2>
1>
&>
ls -l /bin/usr 2> /dev/null		//dispose output or do nothing
cat < lazy_dog.txt		//change source of input from keyboard to file
uniq	//unique
wc		//word count
grep pattern [file...]		//match a pattern
head 
tail
tee

arithmetic expansion
$((expression))		//arithmetic in shell
$((2 + 2))

Brace expansion
echo Front-{A,B,C}-Back			//Front-A-Back Front-B-Back Front-C-Back
echo Number_{1..5}
echo {Z..A}

Variable expansion
echo $USER

Double Quotes, why?

history
~.bash_history


File Permission
-------------->
id – Display user identity

/etc/passwd
/etc/group
/etc/shadow

chmod octal and symbolic usage
umask for default/initial file permissions


