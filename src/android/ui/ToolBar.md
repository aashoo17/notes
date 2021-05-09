# Toolbar

[Android Appbar from android docs](https://developer.android.com/training/appbar)

## Action bar vs toolbar

a top layout which used to have all the navigation button/icons and options used to be called action bar and was fixed always at the top in previous versions of android. But now android gives flexibility to create action bar anywhere on screen  

this is done via toolbar but we have to tell explicitly that i want to use this toolbar as my action bar  

setActionBar()
setSupportActionBar()

one of these function is called to tell activity use this toolbar as my action bar  
support version of func gives backward compatibility  


Title and navigation icon can be done in toolbar xml itself  
TODO: xml name ??

next will be needing to put some buttons/icons in toolbar  

define that in menu resource xml  
menu showAsAction in xml 


but how to put in toolbar/actionbar  

[android menu docs](https://developer.android.com/guide/topics/ui/menus)

onCreateOptionsMenu() of activity class has to be overridden inside this function we have to inflate the menu resource file

onOptionsItemSelected() override to handle click events on any of the icons/buttons in actionbar




create a constraint layout add a toolbar (from androidx to be backward compatible) inside Constraint layout  
display the layout  
call setSupportActionBar(toolbar) 
setActionBar vs setSupportActionBar

```kotlin
package com.example.prac

import android.graphics.Color.rgb
import android.os.Bundle
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.constraintlayout.widget.ConstraintLayout


class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)

        //create a toolbar
        //this can also be created in XML
        var toolbar = Toolbar(this)
        toolbar.setBackgroundColor(rgb(212,100,212))

        //constraintlayout
        val layout = ConstraintLayout(this)
        layout.addView(toolbar)

        var params = toolbar.getLayoutParams() as? ConstraintLayout.LayoutParams

        params?.apply {
            width = MATCH_PARENT
        }

        //set the view
        setContentView(layout)
        //set the toolbar to be action bar (support action bar is backward compatible for older devices)
        setSupportActionBar(toolbar)
    }
}
```

## Toolbar.LayoutParams

Layout information for child views of Toolbars. 
since toolbar implements ViewGroup it should be easy to position views inside Toolbar 



