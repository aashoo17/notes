pkg-config command line program

if we want to access external c library we can use 
pkg-config to do the following for us

//TODO: what is that folder in linux,windows, bsd
it will have corresponding .pc file say for mpv libarary libmpv 
it has mpv.pc in the folder ..........

this .pc file will have all metadata info such as 
finding the header file
compiler flags to be used during compilation
--ccflags
//TODO: to be checked this info
libararies it will depend on
--libs

and lot more info 

so using pkg-config we can simplify the inclusion of other libraries 
in our custom programs and their compilation

all package manager will install the packages with .pc file generally
for all the packages
