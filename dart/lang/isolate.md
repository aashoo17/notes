# Isolate

isolate are like threads but dont share memory like threads in c/cpp  
they can send messages back and forth between isolates for communication 

don't worry much right now about its implementation details
TODO: are isolates spawned on thread pool in implementation

now when we write code it will run in single isolate each piece of code has to complete synchronously.  
To support async operation dart introduces concept of futures

TODO: 
1. creating isolates 
2. message passing between them
3. futures




[dart isolate](https://api.dart.dev/stable/2.7.1/dart-isolate/dart-isolate-library.html)