## JSON encoding

[JSON encoding explained](https://www.youtube.com/watch?v=5ArjDIbB5UA)  

### working with []byte for json encoding and decoding
Marshal  
using marshal we can encode the json data to a go data type
```go
package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	//raw string data in go written in back ticks
	//can emulate the json text data
	data := `
	{
		"name":"Ashutosh Singh",
		"age":20
	}
	`
    //an interface{} variable which can be converted to anything
    //even we can give the exact type like 
    //var f map[string]interface{}
	var f interface{}

	//Unmarshal func just needs the json data in []byte form and
	//variable to which conversion to be inserted as input
	json.Unmarshal([]byte(data), &f)
	//print the conversion
	fmt.Println(f)
}
```

Unmarshal  
using Unmarshal we can create the json equivalent from a go data type
```go
package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	//create a struct
	type Ashu struct {
		Name string
		Age  int
	}
	//initialized the struct Ashu
	a := Ashu{
		"Ashutosh Singh",
		20,
	}
	//pass to marshal function and get []byte form of conversion
	res, _ := json.Marshal(a)
	//print the string form of []byte
	fmt.Println(string(res))
}
```

### working with reader/writers

NewDecoder  
NewDecoder can directly take any reader from where it can read json form bytes and after calling Decode() method  
it will change the json data to go data type  
sample readers => files, http Body 

NewEncoder   
it works opposite to NewDecoder and takes a writer as input and after calling a Encode method converts the go data type  
to equivalent json representation and the json bytes are written to the writer  
sample writers => files


### Caveat with structs 
struct field which start with capital letter i.e. are exported by go are only converted to json form during encoding/decoding  
so go provides a way to map field names with equivalent json field which look like  
`json: "name"`  

```go
type Ashu struct{
    Name string `json:"name"`
    Age int `json:"age"`
}
```

in this example we are using http Get request to get json data which lies in Body var of response which is a reader  
we use NewDecoder to read the json data and created a json equivalent go struct then call to Decode converts this json   
to go form

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
    //get the data from json placeholder web for users
	resp, _ := http.Get("https://jsonplaceholder.typicode.com/users")
    //create the matching struct
	type Ashu struct {
		Id       int                    `json:"id"`
		Name     string                 `jsn:"name"`
		Username string                 `json:"username"`
		Email    string                 `json:"email"`
		Address  map[string]interface{} `json:"address"`
		Phone    string                 `json:"phone"`
		Website  string                 `json:"website"`
		Company  map[string]string      `json:"company"`
    }
    //slice of Ashu struct
    var f []Ashu
    //as http Body is a reader use the NewDecoder directly
    json.NewDecoder(resp.Body).Decode(&f)
    //print the decode json
	fmt.Println(f)
}

```

