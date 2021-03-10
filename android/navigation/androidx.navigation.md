# androidx.navigation

[getting started with navigation android docs](https://developer.android.com/guide/navigation/navigation-getting-started)
[navigation from android docs](https://developer.android.com/reference/androidx/navigation/package-summary)  

navigation using fragment  


these will be have to made dependency  

dependencies {
def nav_version = "2.3.0-rc01"
implementation "androidx.navigation:navigation-fragment-ktx:$nav_version"
implementation "androidx.navigation:navigation-ui-ktx:$nav_version"
}

NavGraph
this tells the what are possible movements between some given fragments this is done visually which is super cool  
joining one fragment from another will create something called action in code you have to tell NavController to execute that action (using navigate() call) and you are done  

NavHost
this is just a placeholder where our defined fragments will come take position  
A sample NavHost   
defaultNavHost and navGraph is important  
```xml
<fragment
    android:id="@+id/nav_host_fragment"
    android:name="androidx.navigation.fragment.NavHostFragment"
    android:layout_width="0dp"
    android:layout_height="0dp"
    app:defaultNavHost="true"
    app:navGraph="@navigation/nav_graph" />
```
NavController
this is a view controller using actions it can show different views  
the main thing will be how to get it  

```kotlin
//get NavController from fragment having NavHost
Fragment.findNavController()
//from view having NavHost
View.findNavController()
//from activity here we have to pass the view id of NavHost
Activity.findNavController(viewId: Int)
```

using the above three things we can create navigations easily



# androidx.navigation.ui

this provides some components required most of the time in navigation like actionBar and attching it to drawer

setupActionBarWithNavController()  
setupWithNavController()  

actionbar/appbar can be configured using AppBarConfiguration class




