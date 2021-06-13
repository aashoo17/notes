[why explicit lifetime is required if compiler can infer from source](https://stackoverflow.com/questions/31609137/why-are-explicit-lifetimes-needed-in-rust)

say a struct which have reference now i am marking it to have lifetime 'a then once struct is initialized it will from scope see when struct (plus all its elements are going out of scope) and say it is = 'a then then it will see for owner of the reference taken in struct and with scope marks its lifetime say as 'b and the compare a and b

ultimately lifetime of reference in struct is inferred from scope ({..scope..}) by compiler what is the significance of giving it a name as 'a

same thing in functions
