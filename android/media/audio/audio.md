# Audio

[Sound Basics](https://www.youtube.com/watch?v=qV4lR9EWGlY)
sound as pressure wave
low and high pressure regions created which moves from source 
spherically
human ears has ear drums which get hit by it and brain interprets it
human sound hearing range 20Hz to 40kHz

sound wave or wave in general has two things 
frequency => responsible for pitch in sound
amplitude => responsible for loudness in sound

if we can store these two over time we have pretty much sound in digital form
waves after one time period repeats itself
we have to decide to take samples in 1 second
normally 44.1 kHz i.e. 44100 samples is good enough for humans ear

amplitude can be stored with 8 bits, 16 bits, 24 or 32 bits at that instant
higher bits for amplitude give accurate value of amplitude as more values are
possible to represent with more bits otherwise we have to convert to closest figure

microphone 





[Android audio working](https://source.android.com/devices/audio)

How audio system is laid in android  
Application framework
Android.Media
we get the kotlin apis here
JNI
Native framework
c/cpp code accessing hardware
Binder IPC Proxies
Media Server
HAL
common api which native framework will call
so any driver has to attach itself to HAL and
you are done any kind of hardware can be called 
for audio
even vendor putting their own audio hardware 
can put driver 
is that mean HAL is a function specification only
Linux kernel
ALSA/OSS/Custom driver
if linux kernel has the driver already for the
audio hardware you are good to go 
Nothing is required

## ALSA
alsa replaced OSS used previously in linux
TODO:
[ALSA explanation](https://www.linuxjournal.com/article/6735)
what is alsa ??
is it suite of driver for linux

[Audio in linux explained](https://www.ghacks.net/2017/08/16/linux-audio-explained/)
kernel => Alsa => Media server(like pulse audio) => speakers
what is alsa doing
media server like pilse audio what do they do
what happens when we receive audio from microphone

in android it seems alsa go to HAL then to media server
is it true for linux too

NDK also exposes audio api
which one to use kotlin vs cpp api

TODO:
Add arch linux alsa links here

## Android audio and video
i think i will just use libvlc engine for playing audio and video
streaming over networks etc 
how to compile libvlc for android 
what is the size of libvlc ??
or getting the compiled code from somewher ??
gui part will need access to graphics api 
using opengl and vulkan for this task
[libvlc android demo](https://bitbucket.org/edwardcw/libvlc-android-sample/src/master/)
[compiling libvlc](https://wiki.videolan.org/AndroidCompile)
autotools => autoconf,libtool,automake,make,m4,awk(gawk,nawk)
what each of them do ??
compilers gcc and g++
pkg-config
pache ant,cmake
git
curl or wget
shell environment variable
gradle basics
ABI ,ABIs to build for 


[kotlin/java api for audio](https://developer.android.com/guide/topics/media)

if only high performance, low latency audio is required 
opensl ES and aaudio can be used
but low versions of android don't have aaudio so fallback to opensl ES is needed
oboe is library which does exactly the same hence oboe is generally can be used
[High Performance audio](https://developer.android.com/ndk/guides/audio)


