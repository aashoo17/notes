[basics of go modules command](https://blog.golang.org/using-go-modules)

go mod init creates a new module, initializing the go.mod file that describes it.
go build, go test, and other package-building commands add new dependencies to go.mod as needed.
go list -m all prints the current module’s dependencies.
go get changes the required version of a dependency (or adds a new dependency).
go mod tidy removes unused dependencies.

## Creating go module outside $GOPATH
go mod init github.com/prac

add import statements  
import "github.com/anacrolix/torrent"

go build    //this will search the torrent dependency and add to go.mod file
TODO: check if go run can also do that on the fly


