# Socket

socket is IPC - local and network  

data transfer 
1. byte stream - any size of data can be transferred  
2. datagram - fixed size of data  

sever and client concept  

address abstracting finding the process  
more than one address struct is required as socket is generic for local and network based ipc  
conversion between specific to generic address  

show what happens at high level when socket is created for local ipc vs network based ipc  

data transfer route  
application -> tcp/udp -> IP -> network interface hardware  

TCP/UDP and its header content  
IP (IPv4 and IPv6) and its header contents  

port nos  
well known ports  
ephemeral ports  


network byte order - MSB (big endian)  and conversion routines  

DNS and its working  

Iterative and Concurrent Servers   
Iterative: The server handles one client at a time, processing that client’s
request(s) completely, before proceeding to the next client.  
Concurrent: The server is designed to handle multiple clients simultaneously.  


linux epoll api  
how it says when a fd is ready  

