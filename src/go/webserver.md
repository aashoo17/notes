## Creating Webserver

#### webserver to run on some port 
``` golang
package main
import (
    "net/http"
    "fmt"
)
func main(){
    //handling the different http paths
    //handler function will handle what happens on this path
    http.HandleFunc("/",handler)
    //bind the server on the localhost port 3000
    http.ListenAndServe(":3000",nil)
}

func handler(w http.ResponseWrite, r *http.request){
    fmt.PrintF(w,"Server is running yoho!!!")
}
```

## serving files over http server


## serving html over http server and using html package
