[built in exceptions](https://docs.python.org/3/library/exceptions.html#built-in-exceptions)

try 
except
else
finally
raise

idea is that raise an error class in python not any class can be raised only which are derived from BaseException
i.e. they inherit BaseException class can only be raised

if raise occurs we will just see some output on console an program terminates
so wrap any possible raise in try block
except can be written to look for particular error class like
except ValuError:
so except can be written many times 
if that matches the type that except block is executed

else can be used if no except is matched this block will run

finally block just runs whatever happens

when we raise exception we give some value of information how to use that
```python
try:
	raise ValueError("this is wrong value")
except ValuError as v:
	print(v)
```