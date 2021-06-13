# SNAP

install snap
sudo apt install snapd

find package
snap find package_name

install package 
snap install package_name

update package manually
snap refresh                //all packages
snap refresh package_name   //particular package

change channel for updatetion such as beta etc
snap refresh package_name --channel=beta

generally packages are updated in background automatically

remove package
snap remove package_name


list all installed packages
snap list







## Questions

How to install snap

What is snapd

snapd daemon process why it is needed and runs continously

Installation and using snap

find packages

install packages

chanells how to use and remove

remove packages

how to check progress of installation

Listing all the installed packages from snap

where snap is installed

snap packages how to include or remove from path

snap install/download is broken how to abort

Publish your own snap packages

why apt and dpkg like tools can't do what snap does

Using GUI based store

Installing .snap packages from web how it differs from .deb 