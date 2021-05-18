## Installation

[Arch installation guide](https://wiki.archlinux.org/index.php/installation_guide)  
creating live cd  

## Balena etcher for creating bootable USB
balena etcher is good option for usb   
[balena-etcher](https://www.balena.io/etcher/)  

## enableing wifi (wpa2 based which is common these days)
ip link list    //see all adapters like wifi lan etc
ip link set wlp3s0 up   //up the link wlp3s0 shown for mac wifi/ wifi strts with w in general  
wpa_passphrase Ashu >> /etc/wpa_supplicant.conf //config for wifi connection
wpa_supplicant -B -i wlp3s0 -c /etc/wpa_supplicant.conf  //run wpa  

(or run this if not works   
wpa_supplicant -B -D nl80211 -i wlp3s0 -c /etc/wpa_supplicant.conf)  

dhclient wlp3s0 //give ip address with dhcp, not required generally use if ping is not working  
ping google.co.in //check connection with ping  

## partition creation  
mac has uefi   
so three partitions (only 2 efi and root if ram is 16 GB)  
efi  
root  
swap    //swap is not required in my acer swift 5 as 16 GB RAM is more than enough  


fdisk -l    //check current partition  
[working with fdisk](https://www.howtogeek.com/106873/how-to-use-fdisk-to-manage-partitions-on-linux/)  

## format partition  
efi  
mkfs.fat -F32 /dev/sda1      
root   
mkfs.ext4 /dev/sda3  
swap  
mkswap /dev/sda2  
swapon /dev/sda2  

mounting partition  
root partition => /mnt  
by doing mount /dev/sda2 /mnt  
once mounted on /mnt     
cd /mnt and mkdir efi there (dont create efi directory before mounting to /mnt)  

efi => /mnt/efi //directory to be created mkdir /mnt/efi  
mount /dev/sda1 /mnt/efi  

mirror list to download files from
/etc/pacman.d/mirrorlist  
i have used the 2nd and 3rd link for US
seemed fast  
TODO:// try for script which can get top 5 ping servers
and delete all others then use it   

## install packages  
only base packages => pacstrap /mnt base linux linux-firmware  
developemnt packages like compilers etc => pacstrap /mnt base base-devel linux linux-firmware  

## fstab  
has details of file mounting when os boots  
genfstab -U /mnt >> /mnt/etc/fstab  

## arch-chroot  
here we are going inside actuall installtion os
before that live cd was helping with everything
Change root into the new system:  
arch-chroot /mnt  

## change timezone  
timedatectl set-timezone Asia/Kolkata  

## set fonts
set fonts (very important otherwise terminal will not open and be stuck)  
vim /etc/locale.gen   
locale-gen   

## setting root password  
passwd  

## create user  
[user and group](https://wiki.archlinux.org/index.php/Users_and_groups)  
create user add him to wheel group  
useradd -m -G wheel,audio,video,storage ashu  
change its password  
passwd ashu  
give wheel permission to execute sudo command  
execute visudo and edit file  
remove the commented line for wheel which says wheel can execute anything  

## bootloader grub
install grub package  
pacman -S grub  
install grub on drive  
grub-install --efi-directory /efi  
install required package efibootmgr  
create grub config file  
grub-mkconfig -o /boot/grub/grub.cfg  
TODO: grub in general waits 5 sec for os to boot make it zero to instantly boot the OS


## desktop GUI  
gnome  
sudo pacman -S gnome  

enabling gnome with systemctl  
systemctl enable gdm  

## networkmanager gui  
sudo pacman -S networkmanager  
enabling networkmanager with systemctl   
systemctl enable NetworkManager

## finish
exit  
umount -R /mnt  
reboot  









