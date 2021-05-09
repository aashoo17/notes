# Permissions in android

[working with permissions in android](https://developer.android.com/guide/topics/permissions/overview)

**Protection level**
1. normal permissions
2. signature permissions
3. dangerous permission  
these dangerous permission are the ones i would care more as i have to request these explicitly from user such as location, camera, contacts etc.  
not only these has to be done in manifest file this is also required to be called at runtime  

**Permission groups**
similar type of permission are kept inside same permission called as permission group  
for e.g. contact related permission for reading contacts, writing contacts all can be grouped together in contacts permission  

**view app permissions through adb**

adb shell pm list permissions -s  
adb shell install -g MyApp.apk  

## Declare app permissions

**Add declaration to app manifest**
in the android manifest file we have to declare the dangerous permissions we would like to request from users  

## Request app permissions

**Check for permissions at runtime**

Determine whether your app was already granted the permission  
Explain why your app needs the permission  
Request permissions  
Allow the system to manage the permission request code  
Manage the permission request code yourself  
Handle permission denial  
One-time permissions  
