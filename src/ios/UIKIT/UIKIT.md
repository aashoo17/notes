[UIKIT basics](https://developer.apple.com/documentation/uikit)

UIApplication
------------>
[App Launch Sequence on iOS](https://oleb.net/blog/2012/02/app-launch-sequence-ios-revisited/)  

[understanding delegates in ios app](https://code.tutsplus.com/tutorials/ios-from-scratch-with-swift-first-steps-with-uikit--cms-25461)  
 
Delegate pattern  
UIApplicationDelegate, UIWindowSceneDelegate

## How iOS classes look like in UI respect for users  
Application => Scene => Window => View  

UIWindow
------->
[Managing Content in Your App's Windows](https://developer.apple.com/documentation/uikit/view_controllers/managing_content_in_your_app_s_windows)   
[UIWindow new docs from apple](https://developer.apple.com/documentation/uikit/windows_and_screens)  
 
root view controller 
idea of Key Window  = makeKeyAndVisible()
level of a window  
UIScreen => display of window

UIWindow has a UIViewController type named rootViewController which can host any view and display it  

UIViewController
--------------->
[Displaying and Managing Views with a View Controller](https://developer.apple.com/documentation/uikit/view_controllers/displaying_and_managing_views_with_a_view_controller)  
[UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

UIView
-----> 
[UIView](https://developer.apple.com/documentation/uikit/views_and_controls)
UIView creation  
UIButton  
UItext etc can be created  
TODO: but how to add another view to a view  
by calling addSubView() method ?

[customizing UIView](https://developer.apple.com/documentation/uikit/mac_catalyst/uikit_catalog_creating_and_customizing_views_and_controls)

[The difference between a UIWindow and a UIView](https://stackoverflow.com/questions/8233976/the-difference-between-a-uiwindow-and-a-uiview)

TODO: if UIViewController controls everything about the views why a special UIView subclass UIWindow is used. (as we know class UIWindow: UIView)

Layout
----->
[View Layout](https://developer.apple.com/documentation/uikit/view_layout)
[UIStackView](https://developer.apple.com/documentation/uikit/uistackview)

