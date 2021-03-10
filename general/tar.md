# TAR

Header
Actual Data

Header
Actual Data

|
|
|
this continues

Header + Actual Data will be like your file1
more no of this combinations means that many files

since we need to read/write header/data to actual one file
we will need i/o routines of the std lib

steps will be as follows ->
1. creation of header struct
manually fill all the fields of header
or give a function which will take some required value
and emit the whole struct for you with other fields with
default values

2. data that has to be stored will be binary
and just make i/o call
can provide a wrapper function which will take data as
input and and will call i/o function with that data

3. loop if more than one pair of header/data is available

//TODO:
create an in memory data in your program from that
create header and data
loop over them 
and create 3 files in entry in tar file

do this in c,cpp,rust and golang
