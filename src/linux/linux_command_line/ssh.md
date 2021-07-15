# SSH

[ssh basics](https://www.youtube.com/watch?v=v45p_kJV9i4)  

ssh has two parts 
1. server 
2. client

server will run ssh server to which ssh clients can connect  

connection can be created using two methods 
1. password
2. ssh keys

## connecting to ssh server

ssh username@host  

ssh root@127.0.0.1      
ssh user@127.0.0.1   

**ssh key creation**  
ssh-keygen  
1. rsa keys
2. ed25519

ssh-keygen -t ed25519 -C "your_email@example.com"  
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"  

**keeping public key on ssh server**  
scp-copy-id  

todo: where to keep the keys manually on server ?