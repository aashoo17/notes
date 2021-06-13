
# Camera

## open camera in your app and dispay the bitmap image taken in an imageView

```kotlin
package com.example.prac

import android.app.Activity
import android.content.Intent
import android.graphics.Bitmap
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import android.view.View
import android.widget.Button
import android.widget.ImageView


class MainActivity : AppCompatActivity() {

    override fun onCreate(s: Bundle?) {
        super.onCreate(s)


        setContentView(R.layout.activity_main)
        var btn = findViewById<Button>(R.id.button)

        btn.setOnClickListener { view: View ->
            var intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
            startActivityForResult(intent,10)
        }
        
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if(requestCode == 10 && resultCode == Activity.RESULT_OK){
            var bitmap = data?.getExtras()?.get("data") as? Bitmap

            var image = findViewById<ImageView>(R.id.imageView)
            image.setImageBitmap(bitmap!!)
        }
    }
}

```

## 