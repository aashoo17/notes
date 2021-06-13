# Bencode

[Bencode and Metainfo file](https://www.bittorrent.org/beps/bep_0003.html)

bencode is way to specify encoding for data for all the languages to use
bencode encode 4 types of data 

1. integer 64 bits
2. String 
3. List of all possible bencoded items
4. Dictionary/Map with key as string and value any bencoded items

## Metainfo

metainfo file uses this bencoding to store some info about torrent