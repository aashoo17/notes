# UI

[App Launch Sequence on iOS](https://oleb.net/blog/2012/02/app-launch-sequence-ios-revisited/)   
//TODO: launch sequence is quite old and can be modified  

## Creating the UI programmatically 

first create the ios project using the storyboard and UIKit option - remove anything related to swiftUI in option use UIKit and storyboard  

**info.plist modification**  
remove the two references available in this file saying to use main.storyboard as the first visible window in the scene after  
launch.storyboard is loaded  
TODO: give the exact name of these properties  

[understanding delegates in ios app](https://code.tutsplus.com/tutorials/ios-from-scratch-with-swift-first-steps-with-uikit--cms-25461)  

in simple terms app and scene are created by os and user don't have to do it but if user wants to modify something in app and scene object how to do so then we are given other classes called as delegates which app and scene will load automatically and you can put code there  
AppDelegate and SceneDelegate are classes based on UIApplicationDelegate & UIWindowSceneDelegate, just protocol which delegate object have to follow to be loaded by app and scene  

**AppDelegate.swift**   
except for the class AppDelegate itself remove everything inside the class  
we could choose any other name than AppDelegate which will work only thing it should be market with @main  

**SceneDelegate.swift**  
this will give access to the underlying UIScene to you  

Scene  --->  Window  ---> View  
once scene is accessible create window in the scene and attach view to the window  
to attach and remove views easily from window an intermediary is provided known as ViewController  


**UIWindow**   
[Managing Content in Your App's Windows](https://developer.apple.com/documentation/uikit/view_controllers/managing_content_in_your_app_s_windows)   
[UIWindow new docs from apple](https://developer.apple.com/documentation/uikit/windows_and_screens)  

Window --> ViewController --> View
view controller takes responsibility of adding and removing view to the window  

[The difference between a UIWindow and a UIView](https://stackoverflow.com/questions/8233976/the-difference-between-a-uiwindow-and-a-uiview)


## arranging/constraining views inside window

**UIViewController**  
[The Role of View Controllers](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457)  

**manage/attach views inside controller**
create your view hierarchy programmatically and assign the root view of that hierarchy to the view controller’s view property.

Layout
[View Layout](https://developer.apple.com/documentation/uikit/view_layout)
[UIStackView](https://developer.apple.com/documentation/uikit/uistackview)