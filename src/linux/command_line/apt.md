# APT

dpkg does not manage fetching packages from remote repos and installing dependencies  

**/etc/apt**  
this keeps all the configuration for apt  

sources.list - all the locations from where package can be fetched  
sources.list.d - user defined location for fetching packages are generally kept here  

## authentication 

usually these remote repos require authentication for downloading the packages  
either using - ssh keys or gpg keys  

authentication will require repos public key (ssh/gpg) to be kept in your pc  

[authentication using ssh or gpg keys](https://codepre.com/apt-key-is-deprecated-how-to-play-on-debian-ubuntu-linux-mint-pop-add-the-openpgp-repository-signing-key-without-it-on-_os-etc.html?__cf_chl_jschl_tk__=04dbdf07ffbe7d873e7f4f4f05fe562192dcb838-1626111790-0-AQ-CIiNmc4vMzbYzdnl8FwIhm1MOuBfWfsk3eyqeP5YXRkmsdmOLGT2WzMntFzYiW0nbrZZKlxS2rBxe2954nr23d1vbA7Ggk-rpAOTaV3-saLHAuDUDvcvXlG-Ku_dseJQmu04R14KyrCmU-0MLAm-mB5yeuYG8fSSV154LCz3sdYr1PXnGmiULxPfF2VFK7a7ULc4xevevswIdFeWNlWFA7atTCwT_bvBVeLyi-T6SXEe4yH3tqUONGqV4YtiS0uE4oxC3yy7kD94JwMZ8aq-fB1TYvlYY2cZaE0Vm92PV9H2R4XTNZcEMaiOCAenamfnOXarF65icK9T2wKCWtc4qvwiTpKmV30ip7ApYpZ21fRReSPFt3V_ngRThtIaApsDiYICJ-vBIv2Bm7ZzgMO583C-PgnYqD4aO0bRbQljY0QOMQvyrxMMVNjelCSwLdn-Wo7VL3PH0gCkK6ssWtG-64g5U7-IHvli7PxBwNwv1vhyD1OzBdPiuFx0yIqZwxq_OTj4VuQtJvY4lOhjYPCSI1iJMyJY-mL8N0eRrPN8sTN6VfXM-0NstUmDCJjkO1w)  

**apt-key**  
this is deprecated now but still can be used  

usually keys were kept at /etc/apt/trusted.gpg.d/ using apt-key but this is unsafe   
but this has problem that this key can be used to install any software  

apt-key add filename  
- can be used in place of filename which will mean read from stdin  

delete the key  
apt-key del keyid  
sudo apt-key del 2980AECF - The key ID is the last 8 characters of the GPG key fingerprint  

list all keys  
apt-key list 


## adding gpg key manually and use it for downloading from repo - new secure way  

download the key using curl or wget and store in a location accessible by root only - like /usr/share/keyring  

wget -O- https://updates.signal.org/desktop/apt/keys.asc | gpg --dearmor | sudo tee /usr/share/keyrings/signal-archive-keyring.gpg  

-O- = tells wget to send output on stdout  
--dearmor = change to binary form from ascii from of gpg key  

curl <https://example.com/key/repo-key.gpg> | gpg --dearmor > /usr/share/keyrings/<myrepository>-archive-keyring.gpg  


now we have to add the repo to /etc/apt/sources.list.d  
usually we will see this format being used  
deb https://repository.example.com/debian/ stable main  

but to use this manual gpg key we have to write in this format  
deb [signed-by=/usr/share/keyrings/<myrepository>-archive-keyring.gpg] <https://repository.example.com/debian/ stable main>  

signed-by tells where to find the key for authentication  

adding architecture  
deb [arch=amd64 signed-by=/usr/share/keyrings/<myrepository>-archive-keyring.gpg] <https://repository.example.com/debian/ stable main>  

practice  

go to sublime website - https://www.sublimetext.com/docs/linux_repositories.html#apt  
try to put this using manual key updation learnt here  



