# youtube-dl

i will refer youtube-dl as ytd (alias)

## downloading youtube-dl from pip
pip is alias for pip3
sudo pip install --upgrade youtube_dl

## command line api

seeing all the available formats for download

ytd -F YoutubeUrl  
ytd -F https://www.youtube.com/watch?v=kfdplJ49_f0

downloading the required quality  
ytd -f 137 https://www.youtube.com/watch?v=kfdplJ49_f0  
137 no is for one quality other quality will have other nos

by default it downloads the best available quality


downloading different audio and video and merging them
it uses ffmpeg for doing this  
so ffmpeg should be installed


specify folder to download


download lot of videos by keeping the url in a .txt file  
ytd --batch-file batch.txt  
ytd -a batch.txt        //short form  

if any url in batch.txt contains playslist url it will download al the playlist
hence avoid if not intentional
if in the playlist any video is deleted at that point ytd will exit and will
not try/go for next song to download

how can we download playlist without using --batch-file
that is in proper cli option for downloading playlist only

authenticating by giving youtube userid and pass for downloading lets 
say your private playlist
ytd -f 137 https://www.youtube.com/watch?v=kfdplJ49_f0 --username UserName --password Password



[Full official docs of youtube-dl](https://youtube-dl.org/)