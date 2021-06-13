[python iterator](https://treyhunner.com/2018/06/how-to-make-an-iterator-in-python/)

iter() just calls the __iter__() method of class which returns an object
TODO: still not able to understand what should be the return and if we have to
just return same object why it is required to be done explicitally

```python
def __iter__(self):
    # here if every time we have to return same object which self is pointing
    # why to do explicitally
    # can we return anything else it looks like apart from self
    # we can return any existing iterator
    # but does this return influence __next__() i dont understand
    # or if you return existing iterator dont need to define __next__() at all
    return self
```
__iter__() is just being used to mark the class to be an iterator ??

if we print iter() it gives the address is it like pointer i am getting
and next() is calling __next__()

calling for in loop will call iter() automatically
and call next under all elements are exhausted
and some kinda termination is written by raising an exception
when certain condition is met

lazy iterators

making your own iterators using class

define __iter__() method
//TODO: i think my assumption may be wrong about return
return something from which you later extract the content for __next__()
then define __next__() method
and return something what next() will return

[generators basics](https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/)
generator function
what is yield
yield inside a function is generator function

yield is like return but a normal function after return is just
gets over with its execution but using yield after yield you can 
keep on sending things and somehow your function know till where
last execution was and starts from there