# Internet

[how internet works](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)  

e.g. 1 - how cell phone talks to networks  
server(computer) --> optical fiber line --> connected to cell tower --> tower throws electromagnetic waves --> captured by cell phone antennas  

e.g.2 - working through modem  
server(computer) --> optical fiber line --> connected to phone line --> modem (required to convert electrical signal to something phone line can understand) --> modem connected to computer

e.g. 3 - multiple computers connected to routers  
server(computer) --> optical fiber line --> connected to routers --> multiple (or one) computer connected to router  

## ways which data (streams of 0 and 1 can be transferred) physically

- over electrical line using high voltage for 1 and low voltage for 0
- optical fibre  
[how optical fibre transmit 0 and 1 ] (<https://networkengineering.stackexchange.com/questions/22676/is-fiber-optic-digital-or-analog-optical-signal-is-digital-or-analog>)
- by two antennas (using electromagnetic waves) having transmitter and receiver like in satellites, mobile devices  

## order of data movement in computer from physical layer to application level and vice versa

**when data goes from application/process to another computer over network**  
application -> kernel -> tcp/udp protocol -> ip protocol -> physical link layer -> to the physical wires (or any other medium discussed above)  
reverse order is followed for physical layer to application layer  


## TCP/UDP protocol  

**TCP**  

tcp adds the a header and provides logic for doing following things  

- port nos by which it can identify which process/application has sent data or should receive the data  
- sequence no which tells how data should be added together to make it complete  
- acknowledgement for packet sent that it was received  
- window size which tells the current size of data as in tcp data size can vary unlike in udp where it is fixed  
- tcp checksum for checking data integrity  

**UDP**  

- port nos by which it can identify which process/application has sent data or should receive the data 
- udp checksum for checking data integrity  
- length by which we can know datagram size  


## IP protocol

IP just adds a header which can be used for following  

- knowing the destination and host ip
- checksum to see if IP header is not corrupted
- fragmentation support (chop the packet in smaller parts if physical line does not support this big packet )

## Neighboring protocol

neighbor = connected via same physical line like LAN  
this protocol is used to identify the neighbors clients + routers connected  

[video explanation of neighbor protocol](https://www.youtube.com/watch?v=A3LFt7CHpgs)

ipv4 - ARP protocol  
ipv6 - NDP (network discovery protocol)  
TODO: NDP should be able to used with ipv4 also I don't find any reason not to  

## Routing protocol  

these protocols are used to find the path for data travel from one locatiol to another location  
two networks are connected to some kind of bridgers like routers  

e.g.  
lets say I have following routers to send data from India to US  
all numbers represent one of the router  

1 -> 5 -> 7 -> 9  
1 -> 3 -> 8 -> 9
2 -> 3 -> 6 -> 10  
so routing protocol decides what path will be taken for data transfer  

[Understanding Routing](https://www.youtube.com/watch?v=gQtgtKtvRdo)  

## Bridging concept

two networks are connected via some kind of device called bridgers  

- routers

TODO: get other bridging device names

## network drivers  

wifi device driver  
lan pci card drivers  
bluetooth drivers  

so all of the physical devices to work properly are associated with some code called drivers  
all OS's provide some api to talk to drivers and eventually to physical network device  

drivers will have all the logic written for sending data to receiving data and finally they will convert that  
in the form of api required by OS  


## user space to kernel space - networking  

what api is given by kernel to talk to its network layer via the application  
currently all syscalls are abstracted in libc for almost all OS's still if we want to plug to  
kernel directly we will need the api kernel provides or we can talk to libc's api  

as per my understanding rust uses libc api and golang talks directly to kernel  

## user space c api for networking

**TCP**  

server api  

socket() - creates socket for ipc  
bind() - bind the socket to a known ip address  
listen() - socket will allow now for any tcp client to connect  
accept() - accepts any tcp client connection request  
read()/write()  
close()  

client api  

socket() - creates socket  
connect() - connect a tcp server at given address  
read()/write()  
close()  

bind() - this call somehow is not made at client side but all sockets need an IP address so this must be implicitly invoked by kernel  


**UDP**  

server api  

socket() - create socket
bind() - bind to an address  
recvfrom()/sendto()  
close()  

client api  

socket() - create socket  
recvfrom()/sendto()  
close()  

optional connect() call in udp client side and api changes  
socket() - create socket  
connect() - this tells use the address in connect call for sending/receiving the data  
recv()/send() or read()/write() call - read() or recv() and send() or write() call is same  
close()  

bind() - bind here also in client side must be implicit  

## Notification chains


## References

**Books**  

1. Understanding Linux Network Internals by O'Reilly media  