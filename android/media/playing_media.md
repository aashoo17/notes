# MediaPlayer

[media player basic guide](https://developer.android.com/guide/topics/media/mediaplayer)  
media player state  

[media player reference](https://developer.android.com/reference/android/media/MediaPlayer)

permission required  
wake lock  
internet  

## Uri

content on device such as audio,video  
MediaStore.Audio.Media.EXTERNAL_CONTENT_URI  => The content:// style URI for the "primary" external storage volume.
MediaStore.Audio.Media.INTERNAL_CONTENT_URI  => The content:// style URI for the internal storage.

for content on internet behind http  

## media player operations  

start  
stop  
pause  
seekTo  
loop  
isPlaying  
release  

## concept of content resolver and content provider  

content provider is an abstraction with which any app exposes its data as normally other apps can't access these data android provides content provider api wit which any app if wants to make any data public can do so  

to get data from content provider we have to use something called content resolver which will get data in form of Cursor  

Cursor is like a table with multiple columns and rows and by default it will point to data of first row of cursor   
we can get all values in that row and can move to next using loops and get other values  

this will become important to find any audio/video etc in the android device  

## working with arrays

this is required for projection input of STring array in ContentResolver query method
[kotlin arrays equivalent of java](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/)



e.g

```kotlin

class MainActivity: AppCompatActivity{
    override fun onCreate(bundle: Bundle?){
        super.onCreate(bundle)

    //getting all audios
    val uri = MediaStore.Audio.Media.INTERNAL_CONTENT_URI
    //[audio columns values](https://developer.android.com/reference/android/provider/MediaStore.Audio)
    //TODO: have to work on projection
    val projection: Array<String> = [MediaStore.Audio.Audio.AudioColumns.ALBUM,]
    //select al least 1 min audio
    //TODO: selection ??
    val selection = 
    var cursor = getContentResolver().query(uri,projection,selection,null,null)  

    //getting content out of cursor
    //getString(),getInt() etc will give values if the index of Column is given so we have to be sure that what columns provide what type of values

    //with index we can get the column name
    //if we know the column name we can get index and can put inside getInt(), etc 

    //moveToNext takes cursor to the next row  
    }
}







```




