[basics of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

## Client Side

Go has Client struct to handle all client related task even Get,Post method etc  

wrapper funtions Get(),Post() is provided on top of them which can be directly called as  

http.Get()  
http.Post()  

//MyView: these functions will generate Client object with default values and call respective function like Get & Post  
Client.Get()  
Client.Post()


## Server side

