[unicode in simplified way](http://kunststube.net/encoding/)  
what is encoding ??  
why started from ascii and there were so many existed and still didn't suffice the need of all languages  
what is unicode code point and why text are stored in this value directly  
I think: computer store memory in bytes and unicode assigns 1,2,3 and more bytes to a character (code point) it will always be difficult to know when a char started and when finished etc for encoder/decoder

what is code point ??  
practical=>reading raw bytes with different encoding and seeing the result

utf8/utf16/utf32 encodings  
unicode replacement char � (U+FFFD)  

[unicode overview](https://home.unicode.org/basic-info/overview/)  
why unicode was started ??

[wikibook on unicode](https://en.wikibooks.org/wiki/Unicode)  
unicode and all encoding link

## Code Points
A code point is the value that a character is given in the Unicode standard. The values according to Unicode are written as hexadecimal numbers and have a prefix of U+.

For example, to encode the characters we looked at earlier:

    A is U+0041
    a is U+0061
    1 is U+0031
    # is U+0023

These code points are split into 17 different sections called planes, identified by numbers 0 through 16. Each plane holds 65,536 code points. The first plane, 0, holds the most commonly used characters and is known as the Basic Multilingual Plane (BMP).

TODO: find reasons in assigning a no i.e. code point to char i.e. small no to some char big no to other char

## encoding
why encoding is required at all why can we not go with one to one mapping what unicode has assigned to each chars

### utf-8

[utf-8 encoding](https://en.wikipedia.org/wiki/UTF-8)

variable width encoding => 1,2,3 and 4 bytes are used for encoding ??
compatible with ascii how ??

take chars which can be mapped in 1,2,3 and 4 bytes of utf-8 do it manually to learn
1 byte => 7 space available
2 byte => 11 space
3 byte => 16 space
4 byte => 21 space

it means if less than 7 bits one byte is used
say 5 bits are used then fill first two with 00 and it becomes 7 bits, first bit is already fixed by utf-8 and we have total 8 bits can be mapped to 2 hex digits and we get utf-8 encoded char 

similarly 8 to 11 => mapped to 2 bytes
12 to 16 => 3 bytes
17 to 21 => 4 bytes

seemingly max space of 21 is enough to accomodate all unicode code points now and in near future but is it possible theoretically that code points can be so big when utf-8 can not encode

extended ascii used 8 bits insted of 7 how s that taken care by utf-8 as it is said to be fully ascii compatible

all continuation bytes like 2,3 and 4 start with 10 bit its significance

all starting bit for 1,2,3 and 4 byte long encoded chars are different how is that becomes useful in encoding or decoding

[utf-8 implementation in javascript](https://github.com/mathiasbynens/mothereff.in)  
look for utf-8 => vendor => utf8.js

[utf-16 encoding](https://en.wikipedia.org/wiki/UTF-16)

very simple idea
encode first 2 power 16 nos as its unicode point
next when we need more thant 16 bits we take pair of 16 bit
but some changes to be done so that we can recognise second 16 bit easily
and should not match with first 2 power 16 bit ever so that encoder/decoder should not
get confused

[Punycode: A Bootstring encoding of Unicode for Internationalized Domain Names in Applications (IDNA)](https://tools.ietf.org/html/rfc3492#appendix-C)

normal keyboard can give input only for ascii bytes how to write any unicode string in programming languages

written as \u{301} => start with /u and in this {} bracket write the unicode point  
TODO: is unicode point in decimal or hex

TODO: find the languages and what encoding they use
c  
cpp  
java  
kotlin  
swift  
rust  
go  
python  
dart  

TODO: what is wide char in c and cpp as these lang only support ascii