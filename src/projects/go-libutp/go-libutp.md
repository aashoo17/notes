[go-libutp source](https://github.com/anacrolix/go-libutp)

## libutp

TP is a TCP-like implementation of LEDBAT documented as a BitTorrent extension in BEP-29. uTP provides reliable, ordered delivery while maintaining minimum extra delay. It is implemented on top of UDP to be cross-platform and functional today. As a result, uTP is the primary transport for uTorrent peer-to-peer connections.

implementation of utp protocal for file sharing  
we might see tcp/udp implemented in kernel itself

How to switch to protocal not implemented in kernel

## go-libutp

its binding for libutp library  
we are just calling libutp functions and all with go

