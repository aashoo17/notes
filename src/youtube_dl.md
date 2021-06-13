alias yt="youtube-dl"

## download videos from youtube using youtube-dl

**combination 1**  
youtube-dl --merge-output-format mkv -f 248+251 -a file.txt  
**combination 2**  
youtube-dl --merge-output-format mkv -f 137+140 -a file.txt  

TODO: write a command which uses 248+251 if any of the quality not available use 137+140  

--merge-output-format webm => give output video in webm and mkv in place of webm means create mkv file  
-f 248+251 => take 248 video and 251 audio  
-a file.txt => download all youtube links in file.txt  

-F video_link => can be used to know all available video and audio types and integer no given to them  

**other useful flags**  
--no-playlist  => don't download all songs in playlist  

**ffmpeg**  
ensure that ffmpeg is installed otherwise merge will not happen  

TODO: instead of typing all the details every time make it such that some settings are auto picked  
like video/audio quality, merge format etc..

