# writing a custom class to be a an iterator
class Ashu:
    x = 1
    def __iter__(self):
        # TODO: what should be the return
        # what is the relation with __next__()
        return self
    def __next__(self):
        # we are getting things after each next() call
        return self.x

y = Ashu()
# iter() call gives iterator
z = iter(y)
# next() call gives the element from __next__()
a = next(z)
print(a)


# generator function and yield
# function with yield is called generator functions
def func():
    yield 2

f = func()
next(f)

# 