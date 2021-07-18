# Systemd
[systemd arch wiki](https://wiki.archlinux.org/index.php/systemd)  

## systemctl

systemctl is the commandline binary name for managing sysyemd  

## reboot/poweroff is taking long roughfly 90sec in my arch installation

we can force reboot/poweroff by  
reboot -f  
shutdown -f  

or we can change the systemd settings for waiting to 90sec before killing any service if it does not quit automatically  

find the file /etc/systemd/system.conf   

make a copy of it at same location may be named as /etc/systemd/system.conf.orig (this is just for future use if something goes wrong)  
edit /etc/systemd/system.conf   
change the   
DefaultTimeoutStopSec=5s (default SIGTERM signal time for 5 sec any process still there will be killed after 5 sec instead of 90sec default)  

this will boot after 5 sec at any cost  
