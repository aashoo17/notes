The commonly seen file extensions are .tar.gz and .tar.bz2 which is a tar archive
further compressed using gzip or bzip algorithms respectively. 
z option gzip
j option bzip

## EXTRACT

**Extract a tar.gz archive**  
tar -xvzf tarfile.tar.gz
x - Extract files
v - verbose, print the file names as they are extracted one by one
z - The file is a "gzipped" file
f - Use the following tar archive for the operation

**Extract tar.bz2/bzip archives**  
tar -xvjf archivefile.tar.bz2

**Extract in specific folder**  
tar -xvzf abc.tar.gz -C /opt/folder/

**Extract a single file**  
tar -xz -f abc.tar.gz "./new/abc.txt"

**Extract multiple files using wildcards**  
tar -xv -f abc.tar.gz --wildcards "*.txt"

## CREATE

**Create a tar/tar.gz archive**  
tar -cvf abc.tar ./new/
./new/
./new/cde.txt
./new/abc.txt
tar -cvzf abc.tar.gz ./new/			//compress with gzip

The extension of the file name does not really matter. "tar.gz" and tgz are common extensions
for files compressed with gzip. ".tar.bz2" and ".tbz" are commonly used extensions for bzip
compressed files.

Add files to existing archives
tar -rv -f abc.tar abc.txt //its not possible to add files to compressed archives.(tar.gz/tar.bz2)