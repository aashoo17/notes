# ELF

## ELF header
describes basics about elf file iteself  
program header offset and section header offset is important one

## program header
this is required in executable  
for program header view point entire binary is divided into segments  
array of program headers will exist giving info of all segments  
how all these segments will be loaded in memory is identified by program header  
look for struct declaring program header  

## section header
these are not required in executable but are must in object files  
for section header point of view entire elf file is divided into sections  
they exist in array form describing each section  
look for the struct declaring section header

## symbols
symbols are dummy locations to be substituted later by linker => variables/functions

## relocation
relocation is the process in which symbols will be resolved and actual memory address will be kept by removing old dummy locations

## dynamic linking

[dynamic linking](https://www.intezer.com/blog/elf/executable-linkable-format-101-part-4-dynamic-linking/)  

### why dynamic linking
this is an idea where same object file can be pushed into multiple executables at runtime  
this will help keeping dynamic libraries on OS and link with many executables which want access to it.
this will reduce executable size  
and same dynamic library is used for many programs RAM access will also be low at any time  
if required update once and all executable will use latest version

### How dynamic linking works

Reference: 
    Book - Learning Linux Binary Analysis