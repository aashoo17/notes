#!/usr/bin/fish
# add the shebang otherwise we have to call like this - fish prac.fish in place of ./prac.fish

# create variable

set int 10  # int
set float 10.0  # float
set string String   # string
set bool true   # boolean

# conditional
if $bool
    echo "got true"
end

# todo: how comparison is done
# todo: using and, or in conditional
# if $int == 10
#     echo "int gives true"
# end

# loop
# loop on logic
while test $i 10    # is equality etc is tested like this
    echo $i
    # $i = $i + 1   # how to increment varibale
end

# loop on lists
for i in $PATH
    echo $i
end

echo $int $float $string $bool

# function

function ll 
    ls -l $argv
end

ll  # calling/invoking function