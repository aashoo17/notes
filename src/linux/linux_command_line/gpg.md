# GNU GPG

[gnu gpg manual](https://www.gnupg.org/gph/en/manual.html)  

## Generating a new keypair

gpg --gen-key  

**seeing all the keys**  
gpg --list-keys  

**Exporting a public key**  

in binary format  
gpg --output alice.gpg --export alice@cyb.org  

in ascii format - this is useful to copy and paste as will show the ascii format of key  
gpg --armor --export alice@cyb.org  

todo: so keys are being identified by email ids ?? any other way   


## Importing a public key

gpg --import blake.gpg  

check if key is added  
gpg --list-keys  

gpg --edit-key blake@cyb.org  

Once a key is imported it should be validated. GnuPG uses a powerful and flexible trust model that does not require you to personally validate each key you import. Some keys may need to be personally validated, however. A key is validated by verifying the key's fingerprint and then signing the key to certify it as a valid key. A key's fingerprint can be quickly viewed with the --fingerprint command-line option, but in order to certify the key you must edit it. 

gpg --edit-key blake@cyb.org  
fpr  
sign  

