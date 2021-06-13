playing mpv from custom c program

installing libmpv-dev to use the header file #include <mpv/config.h>

how will we compile as we dont know the path or compiler flags to be udes for 
compilation of libmpv

using pkg-config for this
all packages installed contain corresponding .pc file
like mpv.pc which wil have all the information required

compilation command 
gcc -o simple simple.c `pkg-config --libs --cflags mpv`

--libs and --cflags information is taken from .pc file

three main headers exposed by mpv is as following

#include <mpv/config.h>
#include <mpv/render.h>
#include <mpv/stream_cb.h>

find out what we can do with these headers