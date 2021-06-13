# SeekBar

## drag the thumb of seekbar and when this happens event occurs how to supply code which will be run when that happens

```kotlin
package com.example.prac

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.widget.SeekBar
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout

class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)
        //create a constraint layout
        var layout = ConstraintLayout(this)
        //seekbar created
        var view = SeekBar(this)
        //add to layout
        layout.addView(view)
        //change layout params
        var params = view.layoutParams as? ConstraintLayout.LayoutParams
        //change parameters/constraints
        params?.apply {
            width = MATCH_PARENT
            height = 300
        }
        //textview which will change when seekbar thumb is drawn
        var text = TextView(this)
        text.setText("Hi ashu")
        layout.addView(text)
        //this Ashu class will be called when seekbar changes
        var ashu = Ashu(text)
        //set the listener on seekbar
        view.setOnSeekBarChangeListener(ashu)
        //display the layout
        setContentView(layout)
    }
}
//Ashu class implements the interface SeekBar.OnSeekBarChangeListener which have some functions
class Ashu(text: TextView): SeekBar.OnSeekBarChangeListener {
    private var text: TextView
    init{
        this.text = text
    }
    //this func will be called when seekbar thumb is changed
    override fun onProgressChanged(seekBar: SeekBar, progress: Int, fromUser: Boolean){
        text.setText("Seekbar changed")
    }
    override fun onStartTrackingTouch(seekBar: SeekBar){

    }
    override fun onStopTrackingTouch(seekBar: SeekBar){

    }
}
```

## change the seekbar color

android:progressTint => chnages the color of the progress  
android:thumbTint => will change the color of the thumb

## change the thumb drawable
android:thumb => change the thumb drawable (I think this will be displayed when we touch the thumb to drag)
setThumb(Drawable thumb) in code
TODO: what about when thumb is not touched (when android:thumb is applied i am seeing white background)

## seekbar length converted to some starting and end value
it is 0 for starting value and end value to 100

## change of thumb automatically based on some code like in a song it increases automatically with time
it seems seekbar length is 100 by default and starting at 0
setProgress() can be used take thumb to some location



## create a timer which will execute code after some time make that code to increase the progress of Seekbar by 1 using setProgress()

[CountDown timer class android](https://developer.android.com/reference/kotlin/android/os/CountDownTimer)

```kotlin
package com.example.prac

import android.os.Bundle
import android.os.CountDownTimer
import android.widget.SeekBar
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)

        setContentView(R.layout.activity_main)
        var seekbar = findViewById<SeekBar>(R.id.seekBar)
        var i = 0
        //use the CountDown timer to run after each second
        object : CountDownTimer(100000, 1000) {
            //this code will run after each interval
            override fun onTick(millisUntilFinished: Long) {
                i++
                seekbar.setProgress(i)
            }
            //when timer is finished
            override fun onFinish() {

            }
        }.start()

    }
}
```

## Seekbar changes using timer as in prev example but we want to add logic that if it is changed externally it should start from that position rather than going back

[How to know if the user has changed the Seekbar externally](https://stackoverflow.com/questions/51368649/android-seekbar-change-detect-by-user-only)