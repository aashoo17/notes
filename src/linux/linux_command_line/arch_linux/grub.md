# GRUB

## change grub boot time from default 5 sec to 0 (immediate boot)

open /etc/default/grub

change grub_timeout=0

for updaing this changes run

grub-mkconfig -o /boot/grub/grub.cfg
