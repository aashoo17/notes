# Iterator

it is just an idea for a container (a variable which can keep multiple items inside it behind a pointer or something) to be converted into something so that we can loop over all the items of this container one by one without explicitly writing loops everytime. 

e.g. 
a vector of type int  
vector can keep a no of items inside it and we can loop over them manually by writing code but what will be good if the looping logic has been already written by someone and we just have to call it somehow

two type of logics are more famous  
1. next() method call  from Iterator trait/interface
    first we will get the iterator class/struct by calling iter()/iterator() method
    so we will define a method next() which when called will emit next element of the container and when all elements are ehausted it will emit some kind of no elemnt sign by emitting none/nil/NULL etc  
    now in languages we will have for..in loop construct especially to deal with this iterators this will implicitly call iter()/iterator() method to get the first element and then keep on calling next() method until nil/none etc is not received
2. this is seen in cpp a nested iterator class which is like a smart pointer when dereferenced will give an element  
    so first we have to somehow get the iterator class which is usually received by call to begin() method  
    then dereferenced logic is written i.e. * is overwritten to give the element  
    ++ is overwritten to give next element and end() method will give last sign of element exhausted
