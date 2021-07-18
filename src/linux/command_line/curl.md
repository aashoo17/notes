# curl

## GET operations

curl 'https://jsonplaceholder.typicode.com/posts' --output file.txt  

by default curl emits output on stdout  
use the redirection or output flag to change it to another location/file  

curl 'https://jsonplaceholder.typicode.com/posts' --output file.txt  
curl 'https://jsonplaceholder.typicode.com/posts' > file.txt  

**silent operation**  
curl -sS 'https://jsonplaceholder.typicode.com/posts' --output file.txt  

-s = silent operation  
-S = only errors are emitted when put on silent  

## POST operation

Send the JSON string
curl -d '{ "name": "Darth" }' http://example.com

When specifying a numerical address,
use the dotted version for IPv4 addresses:
curl http://127.0.0.1/

…and for IPv6 addresses the numerical version needs to be within square brackets:
curl http://[::1]/

specifying ports
curl http://127.0.0.1:8080/


