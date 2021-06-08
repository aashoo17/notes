# AVD - android virtual device
[avdmanager command line](https://developer.android.com/studio/command-line/avdmanager)

## list
**avdmanager list**  
this will show all possible avd that can be created  
**avdmanager list avd**  
this will show the all existing avds  

## create
**avdmanager create avd --name flt -k .android/ -g x86 -k android-30**  
avdmanager create avd = this is command for avd creation  
--name = name of the avd  
-k = location/folder where to keep this avd  ($HOME/.android where android-studio keeps AVDs)
-g = abi  
-k = android api on which avd will be based  

## delete
**avdmanager delete avd --name name_of_the_avd**   

