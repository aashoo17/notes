## Calendar time

clock_t => used for cpu/processor time - some integer/float value typedef
time_t => used for calendar time - some integer/float value typedef
calendar time is measured as time elapsed from epoch which is 00:00:00 on January 1,1970 Coordinated Universal Time (UTC)

struct timespec = represents simple calendar time with nano second resolution

getting current calendar time
time() call gets time elapsed from epoch returns time_t
clock_gettime() gives the time from epoch in struct timespec with nano second precision  

## Broken down time

Broken down time: it is human representable time in day, month, year etc
struct tm = used for broken down time
localtime() - used to get time in local timezone
gmtime() - used to get time w.r.t. GMT

## Formatting time 
format time in form of textual representation

## CPU time
getting cpu execution time
clock() gives the calling process' current cpu time (i.e. cpu cycles made from start of this process)

if we put some code between two clock() calls like this

clock_t a = clock()
my c code goes here
clock_t b = clock()

a - b = difference gives total cpu cycle run in my code execution
if we divide a - b with no of cycles made by cpu in 1 second (represented using macro CLOCKS_PER_SEC )
we will get actual time to run our code in seconds  

cpu time does not calculate waiting for IO etc.. use processor time if required

## Alarm
alarm sends a signal SIGALRM to its own process  
which can be handles as per your requirement  

## Sleep 
make the process/thread sleep for some time