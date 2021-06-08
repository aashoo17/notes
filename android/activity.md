# Activity

something which gets created and has state
generally tapping an icon is what will create the activity
and user interactions like home butoon, back button presses will
generate different state for activity class
so its very good place to put your gui in

so we create xml file which supposedly will be passed by some code and created 
into initial gui state
later user will be given option to change state with various interactions

common states
onCreate, onPause, onStart, onStop, OnDestroy etc.

now we will write code for different states which will be automatically run by 
android system when that state is reached

and our custom user interaction code will also be written

## Device orientation change
will destroy the activity and again creates
because typically user wants to display different activity when orientation changes

now this is problem if you want to show same activity
but what was the state created will be lost in the activity and will start fresh

## Saving activity state

### temporary
ViewModel
[viewModel](https://developer.android.com/topic/libraries/architecture/viewmodel)
onSaveInstanceState()
now these will be created in memory
so access time will be fast but keeping big data is problematic in terms of memory usage
by app and main thread slowdown
so generally we will keep small data and key for big data which is in permanent storage 
 
### permanent
Database, filesystem
