# View

this is the base class for all the classes drawn onto screen for making UI elements like button,text..etc
nothing more nothing less  
so most of the places function/constructors will take View as input which will mean sub classes of View is expected   
TODO: keep learning methods and properties which does something interesting  

Displaying view on screen is as easy as calling setContentView() and passing it the view this function comes from Activity class which is generally inherited at the start of android program  

displaying custom shit
--------------------->  
normally to display anything you will need canvas   
TODO: how to get canvas directly  
for the time being we know that View gets displayed by just passing to setContentView() that means they have access to Canvas  
TODO: is this canvas View is getting from Context class passed to them  
we can leverage this by making my custom class sub class of View + Views have onDraw() method which gets called automatically for them to be drawn we will override this function  
e.g.

```kotlin

```

[Difference between android: and app: prefix in Android XML for Views](https://stackoverflow.com/questions/29732512/difference-between-android-and-app-prefix-in-android-xml)

# ViewGroup

they inherit from View class and provide layout which can hold View types and can be positioned in the layout   
addView() call tells layout that this view is its child 


## creating view programmatically and changing the consraint

generating view is simple as we just have to call their constructors with context  
same goes for ViewGroup types which act like Layouts  

ViewGroup.LayoutParams class has all the properties which will control the view but if you see the constructor call it uses existing LayoutParams values to create a new object of type LayoutParams  
calling getLayoutParams() on the view gets the existing LayoutParams   
then we can modify it 
we have to use setLayoutParams() to tell the view to use the modified version of LayoutParams when LayoutParams is spawned from constructor and View does not know if it has to use this one  

[changing constraints programmatically](https://stackoverflow.com/questions/45920205/how-to-modify-a-constraint-layout-programmatically)  

TODO: what is the use of ConstrainSet it seems it can also modify constraints

TODO: now question remains some constraints are put w.r.t. layout and some w.r.t. another view how to do that  
to identify the view uniquely ids has to be generated programatically ??  
what is best way for ID name => to name with your id or generateID with android system given function


## Constraint Layout

[Excellent article from android website explaining how constraints can be put using Constraint Layout](https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout)

Notable Constraints

Relative positioning  
Margin  
Centering   
Biasing   
Circular positioning   
Chains  
MATCH_PARENT and WRAP_CONTENT 
Guidelines

[LayoutParams used for modifying all the constraints of ConstraintLayout](https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout.LayoutParams)


```kotlin
package com.example.prac

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.constraintlayout.widget.ConstraintLayout

class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)
        //create a Constraint Layout
        //pass this i.e. MainActivity class as Context
        var layout = ConstraintLayout(this)
        //we can assign our own ids like 10 or 20 but we have
        //to track manually that we are not assigning same id to
        //more than one View
        //this static method takes care of that and everytime
        //when called give new unique id so it is helpful
        val id = View.generateViewId()
        //set the id to our layout this id will be used to
        //constrain our views w.r.t. layouts
        layout.setId(id)

        //create a button and set its text to be "BUTTON"
        var b = Button(this).apply{
            setText("BUTTON")
        }
        //add my view inside the layout so it can be
        //positioned as required w.r.t. layout
        layout.addView(b)

        //changing margin and layout parameters for my view
        var m = b.getLayoutParams() as? ConstraintLayout.LayoutParams

        m?.apply{
            //set top margin to 300 pixel
            //we need dp usually to be device independent
            //size but for demo pixel will work
            topMargin = 300
            //this says my views top will match with top
            //of the given view/layout with the given id
            topToTop = id
            //this says my views top will match with top
            //of the given view/layout with the given id
            leftToLeft = id
            //this says my views right will match with right
            //of the given view/layout with the given id
            rightToRight = id
        }
            //setLayoutParams() is only required when we
            //are creating ConstraintLayout.LayoutParams object using
            //constructor and have to tell our view hey use this one instead
            //when using getLayoutParams() we are getting the object
            // already being used for layout params and modifying it so
            //no need to call setLayoutParams() on the view
            //b.setLayoutParams(m)

        setContentView(layout)
    }

}

```
## Chaining in ConstraintLayout

```kotlin
package com.example.prac

import android.graphics.Color.rgb
import android.graphics.drawable.NinePatchDrawable
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.constraintlayout.widget.ConstraintLayout

class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)
        //create ConstraintLayout
        var layout = ConstraintLayout(this)
        val lid = View.generateViewId()
        layout.id = lid
        //mutable list to hold the Button
        var list : MutableList<Button> = mutableListOf()
        var params : ConstraintLayout.LayoutParams?
        //loop and add button to list
        for(i in 1..4){
            list.add(Button(this))
            list[i-1].apply{
                setText(i.toString())
                setId(View.generateViewId())

            }
            //add all buttons inside ConstraintLayout
            layout.addView(list[i-1])
        }
        //loop again and set LayoutParams for all button
        //I am trying to create a horizontal chain of four buttons here
        //else if or switch will be useful to assign LayoutParams of buttons at different index
        //i am constraining 1st and last button from Layout and others from each other making a chain
        //so why only 4 buttons why not take like 9 and place 3+3+3 buttons in each horizontal line like a calculator buttton
        //they all are comming in one horizontal line and guess what half of the button are displayed and half not as
        //they are going out of viewport
        
        for(i in 1..4){
            params = list[i-1].layoutParams as? ConstraintLayout.LayoutParams
            if(i == 1){
                //if we have Button at index 0
                params?.apply {
                    //attach itd left to layouts left
                    leftToLeft = layout.id
                    //its right to the left of next button
                    rightToLeft = list[i].id
                    //since it is head (look for chain head) of the chain
                    //i have to apply chain style on head itself
                    horizontalChainStyle = ConstraintLayout.LayoutParams.CHAIN_SPREAD
                }
            } else if(i == 4){
                //if its last button that is at index 3 (4th button) 
                params?.apply {
                    //set its right to layout
                    rightToRight = layout.id
                    //left to right of its previous button
                    leftToRight = list[i-2].id
                }
            }else{
                //for all other button
                params?.apply {
                    //set left to the right of the previous button
                    leftToRight = list[i-2].id
                    //set right to the left of next button
                    rightToLeft = list[i].id
                }
            }
        }
        
        setContentView(layout)
    }
}
```

## ImageView

### Diplay an image on screen

```kotlin
package com.example.prac

import android.content.Context
import android.graphics.drawable.BitmapDrawable
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView


class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)
        //use getDrawable() to get the bitmap resource using R class convert to bitmap drawable
        var bitmap = getDrawable(R.drawable.transport) as? BitmapDrawable
        //call the custom Image class
        var view = Image(this,bitmap!!)
        //pass it to setContentView() to display it
        setContentView(view)
    }
}

//write Image constructor which will take Context and BitmapDrawable 
//use Context to pass to its super class and with bitmap drawable available
//we can call setImageDrawable() method available in ImageView class
class Image(ctx: Context,bitmap: BitmapDrawable) : ImageView(ctx){
    init{
        setImageDrawable(bitmap!!)
    }
}
```