download from a link
wget <download_link>

Continue an Incomplete Download
wget -c file

Mirror an Entire Website
wget -m http://example.com

Download an Entire Directory
wget -r ftp://example.com/folder

Download a List of Files at Once

If you can’t find an entire folder of the downloads you want, wget can still help. 
Just put all of the download URLs into a single TXT file.
then point wget to that document with the -i option. Like this:
wget -i download.txt