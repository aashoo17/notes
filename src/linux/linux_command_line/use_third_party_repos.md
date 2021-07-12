using community repos for packages
use them for instaling custom are not available packages in official repos
/etc/apt/sources.list will have official repos 
add community repos in 
/etc/apt/sources.list.d/  => file with the suffix .list under the directory  is added
and looks something like this
deb http://mirror3.ubuntulinux.nl/ hardy-seveas freenx
sudo apt-get update
get the details of any update availabe from the repos
apt-get install <name> for first time install
apt-get upgrade to update after getting the details of update

some packages may need credentials so add the ssh key using apt-key

curl -sS

small s to make curl silent or mute during its operation
capital S for show error is used with small s not other things

example of yarn installation through ....
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
https://dl.yarnpkg.com/debian/pubkey.gpg  => it is just a key probably ssh/gpg
using apt-key we can add it to trusted list of keys for authentication
add command adds the key from a given filename if - is used it takes std input

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
echo just echoes the value to std input
using pipe to pass this value to tee
tee is used to pass value from std input to stdout and one another place

sudo apt-get update && sudo apt-get install yarn
apt-get update gets to know about new version of packages from official repo and 
ppa etc but does not install
apt-get upgrade can be run to install new versions after knowing about new versions i.e. after running 
apt-get update
if not installed earlier And that ppa is added sudo apt-get install
