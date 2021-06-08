# Networking

I will explain the following points  
tcp, udp, unix ...etc all ipc of golang are based on top of socket  
socket was abstracted by client and server name which we generally know  

1. any address is abstracted by interface net.Addr   
2. client is abstracted by interface net.Conn  
3. server is abstracted by interface net.Listener for byte stream based like for tcp and interface 
net.PacketConn is used for datagram (fixed packet size) like udp


**tcp**  
say tcp client is called net.TcpConn it will implement net.Conn  
and similarly Tcp server will implement net.Listener interface  

**udp**  
say udp client is called net.UdpConn it will implement net.Conn   
and similarly Tcp server net.UdpConn will implement net.PacketConn interface  


**creating client**   
net.Dial() call should have taken net.Conn as input it may be tcp client or udp client whatever   
you will have passed that client can be created   

but in this way we still have to create net.TcpConn or net.UdpConn  
so net.Dial() call was simplified even more by taking two string
1. tcp/udp
2. address string like 127.0.0.1  

so internally based on argument it will create net.TcpConn/net.UdpConn for you  

**creating server**  
net.Listen() similarly could take net.Listener which may be tcp and server is created  
it gets simplified like in client by passing two strings  
1. tcp 
2. address  

for udp we have call net.ListenUDP() cause udp implents interface net.PacketConn instead of net.Listener  
simplified by passing  
1. udp
2. address string  

TODO: now we can think that for server we use either tcp/udp and both implement different interfaces then why  
net.Listen() should take tcp string as arg it should have been implicit similarly for net.ListenUDP() call  
now I can think of 2 reasons for now  
1. same api as for tcp/udp client  
2. if we want to use any other byte based protocol in place of tcp we can do with this api and similarly for  
datagram we can use anyother protocol than udp  

