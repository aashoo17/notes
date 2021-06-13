# string

c just supports ascii so all char are 1 byte  
array of these chars are strings in c  
all string are automatically attached with '\0' (NULL) at the end

three types of string potentially can be created in c

in binary only readable
```c
char *x = "hello"
```

on stack modifiable but not growable
```c
char x[] = "hello"
```

on heap growable and modifiable
```c
char *x = malloc(6*sizeof(char));
x = "hello";
```
