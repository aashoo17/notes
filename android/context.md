
[understanding context](https://www.freecodecamp.org/news/mastering-android-context-7055c8478a22/)

So Context is abstract class written in android the idea was whoever will implement this class will expose lot of fundamental details like....... this is like sharing data to someother class and based on that it will act

Context can have lot of variety of data 
like what is the current theme  
something about database

[android context source code](https://android.googlesource.com/platform/frameworks/base/+/8c4a8243c77bcbd434fb30587be2feffd2835728/core/java/android/content/Context.java)

the following methods gives some clue that an implementor of Context can expose lot of information via these methods and more
some other class can retreive the data and act based on it this is simplest idea

different classes may require different type of data  
an UI class like button may be interested in theme which can get from getResources() etc 

```java
/** Return an AssetManager instance for your application's package. */
    public abstract AssetManager getAssets();
/** Return a Resources instance for your application's package. */
    public abstract Resources getResources();
 /** Return PackageManager instance to find global package information. */
    public abstract PackageManager getPackageManager();
/** Return a ContentResolver instance for your application's package. */
    public abstract ContentResolver getContentResolver();

    public abstract Context getApplicationContext();
```

now only problem with context comes is the understanding that whatever I am taking as context should not live more than necessay or should be shortlived

Context object shortlived => exception will occur as the class accessing object will not find it
Context object lives longer when it is not required => since written class accesses Context implementor class garbage collection may not clean it up as references to it are there but this class was not required to live that long just to support access to context resources (it is having memory leakage)

TODO: Give it with example from classes of android

TODO: make a list of all classes who generally take Context in constructor and which type of context to be passed to them

e.g. UI classes like button

and others....add

