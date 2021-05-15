alias yt="youtube-dl"

yt --merge-output-format webm -f 248+251 -a file.txt  

--merge-output-format webm => give output video in webm  
-f 248+251 => take 248 video and 251 audio  
-a file.txt => download all youtube links in file.txt  

-F video_link => can be used to know all available video and audio types and integer no given to them  

**ffmpeg**  
ensure that ffmpeg is installed otherwise merge will not happen  