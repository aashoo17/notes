# UNIX

UNUX was created by AT&T and sent as free to people/institutes who has requested for free
because they were not allowed to sell due to court order.

unix like sytem => unix modified with other code improvements
some are open source(source code is available),some closed and some mixed

terminal
------->
cmd + to make font bigger
cmd - to make smaller
cmd 0 to make default

ASHUTOSHs-MacBook-Pro:~ ashu$	=> Host_Name:Directory_name user_name($ is prompt for command)
echo => just echo back what is typed
up/back arrow => to go to history commands
ctrl a => go to beginning of line
ctrl e => go to end of line
option click => go to clicked position
tab => complete command or filename
tab tab => possible completions
cmd k => clear screen and scrollback

command options arguments //command structure

kernel
core of OS to automate the things like memory allocation etc to programs

shell
outer layer of OS to interact with the user
bash shell => bourne again shell

$SHELL	=> login shell	//environment variables starts with $
\$0 => name of shell

By typing zsh,csh,tcsh etc you can nest inside shells and for getting out enter exit
until back to default

man command //manual pages for any command

Filesystem
--------->
pwd //present working directory
cd ~ //go to home
cd //go to home
cd .. //go back to previous directory
cd - //go to last directory
/(forward slash) //directory seperator in unix
/directory_name //initial slash for absolute path
./directory_name //current directory

ls //list directory
-l //option to show file permission
-a //option to show hidden .config files
-h //gives size

/ //root
/bin //binaries for unix programs(not installed programs like photoshop)
/sbin //system binaries or system programs
/dev //devices, hard drives, keyboard, mouse etc
/etc //system configurations
/home //user home directories(user files)
/lib //libraries of code
/tmp //temporary files
/var //files which generally expand (variable size)
/usr //user programs, tools and libraries(not files)

mac specific(case insensitive in mac)
/Applications //mac program
/Network //networked devices
/Library //mac libraries of code
/User //user home directory
/System //mac os x
/Volumes //mounted volumes (hard drive, dvd, ipods)
~./Trash //user trash can

Directories
---------->
avoid special characters except . - \_
starting . may hide the files in finder in mac
starting - command line may think as options
if contains space escape with \ or use ''

touch filename //supposed to change the file creation time but if file doesn't exist
it creates one

text editors
vim
emacs
nano

reading files
cat //to concatenate and output multiple files(if one outputs that one)
more //replaced by less and more launches less
less //space to new page
//f for forward
//b for backward
//g for start of document
//G for end of document
//q to exit
head //shows file from beginning
tail //shows file from end

mkdir directory_name //to create a directory
mkdir -p //creates all parent directory if doesn't exist

mv //to move or rename files and directories
cp //to copy files
cp -r //recursive copy works with directories(cp -R)
rm //to delete files
rmdir //delete empty directory
rm -r //recursive delete works with directories(rm -R)

creating aliases in Mac
cmd l //to create an alias(to point to same file in mac/finder specific only)
//breaks if origina file is deleted
//moving original file alias does not break

links in unix
hard link
ln filetolink hardlink //creates a hard link does not break if ifle is deleted
//since it is reference to storage location
//moving original file hardlink does not break
symbolic/sim link
ln -s filetolink symlink //symlink tracks the path of directory or file name
//breaks if original file is moved or deleted
find path expression
find ~/Documents -name someimg.jpg //e.g. -name is part of expression not option
using wild cards to find

- //zero or more characters
  ? //any one character
  [] //any character in the bracket

commands and programs
echo 'hello world' // /bin/echo program is getting executed
whereis echo //path of this file
which echo //path of this file
whatis echo //simple description
common option in commands -v --version --help
common exit commands q,x,ctrl q,ctrl x,esc

force quit ctrl c

\$PATH => stores the location/path for looking a file for execution they are colon seperated
and unix will look in first path then second and so on
setting the path for current session
PATH=/bin:/sbin

system info commands
time //get the current system time
uptime
users //will not dedup same user
who //generally show 2 users one in terminal and second through finder interface
uname //unix name, darwin in macOS
hostname
domainname

disk related info
df //disk free space
df -h //h for human eyes readable
du //disk usage
-h //human readable
-d //depth of directory

processes

ps //process status by default me(root etc will not be shown)
ps -a //shows which is not owned by me
ps aux //a for all processes,u for users,x for background processes
//it is snapshot at taht moment and does not changes the values over time
ps -ax //kinda same as above

top //for seeing the changes in process
-n //number of processes to show
-o //short order(special keys to be used try: cpu)
-s //refresh time in seconds
-U //filter user

stop process
ctrl c //stop forcefully
kill PID //process id to kill
kill -9 PID //forcefully kill(sometimes it will not as it thinks it should not be done)

text file helpers
wc //word count 5 5 43(meaning 5 lines 5 words 43 characters)
sort //sort lines and output and actual file not changed
uniq //checks for next line if it matches line is escaped(use with sort to remove many duplicates )

utility programs
cal //calender
ncal //another calender
bc //bench calculator
expr
units //conversion from one to another unit

~/.bash_history //tracks our command history
history //to show all previous/history commands
!20 //it will run the 20th command in history
!vim //recent vim command from history
!-2 //previous second command from current command
!! //means !-1 i.e. previous command
!$			//previous arguments (say nano filename.txt can say cat !$ next)

upon logging to bash shell commands from this files will run
/etc/profile //dont change it let it be apple default
~/.bash_profile, ~/.bash_login, ~/.profile, ~/.login //customize them
it will check the first one only with any command and ignore others in the same order written
so make changes generally in ~/.bash_profile

if you type bash in command its a bash subshell(not a login bash shell) and executes
~/.bashrc

//TODO: write a bash script in ~/.bash_profile to load ~/.bashrc and store all config in
~/.bashrc rather in ~/.bash_profile

upon logging out
~/.bash_logout //runs this file on logout

alias for command
alias //list all the alias, alias only exist for current session put them in ~/.bash_profile
to be permanent
alias ll='ls -la' //e.g.
unalias //to remove alias

Shell variables
echo $SHELL		//$ is putted to give value
ASHU='ashutosh singh' //create your own shell variable
echo $ASHU		//again $ for value
need to put in ~/.bash_profile for it to be available after relogin
export ASHU //if bash starts a child program ASHU will be available there if export
//say bash starts less
PS1='--> ' //to change prompt
PS1='\u--> ' // \u special formatting code
\u //username
\s //current shell
\w //working directory(full path)
\W //basename of directory
\d //date
\h //hostname upto first "."

default in mac PS1='\h:\W \u\$'
