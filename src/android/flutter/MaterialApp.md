# MaterialApp

## named routing

[using named routes for navigation](https://flutter.dev/docs/cookbook/navigation/named-routes)

routes property will take a map = Map<String,Widget> like  
String in map will define http like routes  
Widget will give what to show when this route is active  

instead of defining home property we will say now   
initialRoute: "/"  one of the routes  

going to the new route is easy call Navigator.pushNamed()  
normally we call Navigator.push() and give Widget as input in pushNamed() we give route as input  
and Navigator.pop() is called when we want to return to previous screen

Caution: pushNamed() takes context also and this context should atleast come from MaterialApp as we define our
custom classes in general like this 

```dart
class About extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.red
      ),
    );
  }
}
```

or 
```dart
class About extends StatelessWidget {
  @override
  //context is above MateralApp tree of widgets
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          color: Colors.red
        ),
      ),
    );
  }
}
```

we see that context is above MaterialApp which will throw error so make sure context which you are using in  
pushNamed is below MaterialApp and the easiest way to do it is defining custom stateless/stateful class inside Material App  
this context error is common at many places not only in pushNamed()


## darkTheme

use darktheme property and provide colors and other things when system is set to dark mode it will take colors and other props
from here

## theme

similarly theme prop will have all the colors and all to be used during normal occassions

