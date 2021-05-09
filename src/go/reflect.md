interface{} hides type and can be assigned to any value type
once assigned it has now actual type and value
we can use type assertion to see the underlying type
or can use type switch to act on if certain type is found

type assertion and type switch cant help if you dont know 
the type beforehand 
that is it will be created by some user or received over network
user creates type Person struct{} but we dont know in advance about 
Person
then we need to use reflection

we use TypeOf() and ValueOf()
to get underlying type and value respectively

Kind() is like super type say Person above is a type but Kind is struct
check for the type or kind as appropriate
and write your logic next based on the result


[reflect explanation part 1](https://youtu.be/oiX7fAmOYX0)
interface{} hides any type
what happens when interface{} is assigned
type assertion
type switch
assertion and switch are good enough to handle go builtin types
but custom types like a struct can be made 1000's of different
type even we can handle that if we want
but user will create its own struct that we have never seen 
how to handle that?
reflection comes to rescue

[reflect explaination part 2](https://youtu.be/9I0MMN3N0QU)
TypeOf()
ValueOf()

Type    [Type](https://golang.org/pkg/reflect/#Type)
Kind    [Kind](https://golang.org/pkg/reflect/#Kind)
Value   [Value](https://golang.org/pkg/reflect/#Value)
these three struct how do they differentiate each other
more about Kind vs Type
check for struct and map
methods
ValueOf
TypeOf
take interface{} as input and gives 
reflect.Value
reflect.Type
now whatever the functions are applicable on it 
can be called
again after checks you will usually want to go back
to go values from reflect values
look for 
Int()
String()
etc
