## Start

TODO: not able to start without using sudo i.e. as root  

run the command - nginx  

error:
nginx: [warn] could not build optimal types_hash, you should increase either types_hash_max_size: 2048 or types_hash_bucket_size: 64; ignoring types_hash_bucket_size

[The above error is explained here](https://stackoverflow.com/questions/46031491/nginx-on-fedora-26-could-not-build-optimal-types-hash-error-message)  

error:
[alert] could not open error log file: open() "/var/log/nginx/access.log" failed (13: Permission denied)  

for simplicity change the permission using - sudo chmod 777 /var/log/nginx/access.log  


## stop, reload, quit etc

nginx -s signal  


signal could be - 

stop — fast shutdown  
quit — graceful shutdown  
reload — reloading the configuration file  
reopen — reopening the log files  

error:
2021/10/05 23:55:27 [error] 10185#10185: *1 "/home/ashu/code/web/nginx_static/index.html" is forbidden (13: Permission denied), client: 127.0.0.1, server: localhost, request: "GET / HTTP/1.1", host: "localhost"

in nginx.conf 
#user http - uncomment and change to user ashu  
