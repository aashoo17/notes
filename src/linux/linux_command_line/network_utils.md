## ip

1.1.1.1 to 255.255.255.255

## NAT
one ip multiple devices
ip => 24.187.255.32
device 1 => 192.168.0.19
device 2 => 192.168.0.20
and so on

## subnet mask

## localhost
localhost or 127.0.0.1

## ping

## ifconfig
ifconfig => returns ip/NAT address
ethernet, loopback/localhost , wireless shown/called as interface
and configure network

References:  
[using ifconfig](https://www.linux.com/blog/using-ifconfig)
[Doing few basic jobs in ifconfig](https://www.tecmint.com/ifconfig-command-examples/)

## tcpdump

listen for all packets coming

check no of packets say 10

listen from particular interface say ethernet or wifi

show response in hex

listen one particular port

## netstat

see network statistics

check sockets open and we are connecting to ips

(Use cases of netstat program)[https://www.tecmint.com/20-netstat-commands-for-linux-network-management/]

## /etc/hosts
internal dns lookup
any call to domain name look for this table first

so we can modify this file and make shortcuts for ip address
having alias kind of thing

## hostname
checking hostname
changing hostname and use cases

## traceroute
trace the route request is jumping 
three asterisk shown means request timedout

## connecting over ssh

ssh connect command
how to specify remote computer ip/by name
what is up with hostname

do we connect to only one user in ssh
since we put like user@hostname

## use sftp and scp for copying file over ssh to and from remote machine


## /etc/ssh/ssh_config
use cases of this file
changing default port ssh connects to
allow certain user to connect without password
enable/disable using pam files for ssh connection





tcp/udp concept why used and how they are different in working
ip4 and ip6 , why ip6
private vs public ip

ping
--->
ping can be used to check if any server is reachable or not
ping google.com
ping -c 5 google.com	//restrict no of packets to be sent

tarceroute command utility
netstat
ipconfig
nslookup

ftp for file downloading over network
wget
curl

Run commands on remote computer via SSH


Transfer files over network
using FTP
lftp command is used		//TODO: to be completed

using SSH
sftp command is used		//TODO: to be completed

clone git repo using SSH
https://help.github.com/articles/which-remote-url-should-i-use/

SSH key pair generation and use it to password less login

e.g. of github for ssh login
ssh login first you must have private and public key to connect to ssh server passwordless
in linux they are stored in 
~/.ssh/id_rsa		//private key
~/.ssh/id_rsa.pub	//public key

check if available 
ls -la ~/.ssh

one key pair can be used multiple places
how to create one
ssh-keygen is used for generating key pair		//ssh-keygen is a program

ssh-keygen -t rsa -b 4096 -C '[your email_id]'
-t for type of key but default is rsa so can be ignored here
-b for no of bits in key 1024 is min required , (2048,4096 is also used to improve security)

at the time of generation just enter to choose default storage location
also enter to keep passphrase empty

key has to be added to ssh-agent to use for any ssh based connection
eval $(ssh-agent -s)		//start ssh-agent -s for using stdout for output(terminal by default)
ssh-add to add private key to ssh-agent
ssh-add ~/.ssh/id_rsa

public key needs to be added to the server i.e. github for connecting with ssh

go to github click on account avatar icon then settings and then rsa and gpg keys
give any name and paste the public key(copy the ~/.ssh/id_rsa.pub file)

use of xclip for copying on the clipboard
xclip -sel clip < ~/.ssh/id_rsa.pub			//< operator makes id_rsa.pub file as std input for xclip

https://www.lynda.com/Linux-tutorials/Password-less-auto-login-SSH/604236/642422-4.html?autoplay=true