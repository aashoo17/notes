# fdisk

**supported partition types by fdisk**  

**list partitions**  

list all partitions  
sudo fdisk -l  

list partitions under a device say /dev/sda  
sudo fdisk -l /dev/sda  

**formatting disk**  
sudo fdisk /dev/sda  

m - for help  
p - print all partitions  
n - new partition  
d - delete partition  
w - all the changes to be written to disk (this is required say when we have created new partition and tell it to persist on disk)  
q - quit fdisk  


