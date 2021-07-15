# Regular Expression

characters => 0 to 1 , a to z and A to Z in files etc

* matches any number of characters (0 to infinite length/occurences)

. matches any one character except newline

? matches any one character (to be checked for zero occurence)

^ matches start of line
^abc

$ matches end of line
js$

^$ matches blank line

[abc] matches any one character inside bracket

[a-z] matches one charcter from range

three type of ranges
a-z  a to z
A-Z  A to Z
0-9  0 to 9

mix ranges
[0-9a-z], [a-zA-Z] and [0-9a-zA-Z]
[c-f], [3-5]

negate the meaning

[^A-Z] means does not belong from A to Z anything else

backslash \ is used to remove special meaning
