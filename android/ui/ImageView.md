# ImageView

[imageview from android docs](https://developer.android.com/reference/android/widget/ImageView)

Drawing a custom view  

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
        var bitmap = getDrawable(R.drawable.transport) as? BitmapDrawable
        var view = Image(this,bitmap!!)
        setContentView(view)
    }
}

class Image(ctx: Context,bitmap: BitmapDrawable) : ImageView(ctx){
    init{
        setImageDrawable(bitmap!!)
    }
}
```

