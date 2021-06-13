since i will be always working with go modules all these commands are explained in terms of go modules  


## go build

[go build executable source code](https://github.com/golang/go/blob/master/src/cmd/go/internal/work/build.go)

go build can create one of these  

**executable**  
go build  
when your code is having package main and func main() - executable will be created in same directory 

**.o or .a archive**  
go build  
this will run and see if code compiles but output is not generated  

to get output do this  
go build -o name.o   
go build -o name.a  

does the same thing as above  
go build -o name.a -buildmode=archive  
go build -o name.so -buildmode=shared  

but this i have a writen as i have found -buildmode=c-archive & c-shared  
I think compiling in this format i can call them from java/kotlin using JNI which will help in android developement  

look for cross_compile using GOOS and GOARCH env variable  
TODO: tell me which can be used finally to be used in android  

**.so file - shared libs**  
same as .o/.a  
go build -o name.so  
this will generate shared lib


go help build  
run this in terminal to know more about go build command  

go help buildmode  
this will let you know how many types of libs can be generated  

DO: use the file command to inspect the generated executable/object(.o/.so) file


## go install

similar to go build  
but go install will not only compile but send these generated files at some location  

TODO: find these locations

## go mod tidy

this will fetch any modules which are written with import syntax but not made require in go.mod file  
this will fetch the lib and attach require syntax in go.mod file  

## go run

go run .  
this will run the module executable without creating the exec in directory  


## Cross Compile go programs

[cross compilation basics](https://dave.cheney.net/tag/cross-compilation)

## setting up go environments

[go environment variables](https://golang.org/doc/install/source#environment)
$GOOS, $GOARCH etc.  

build current directory for android and arm64  
GOOS=android GOARCH=arm64 go build  

note: go build GOOS=android GOARCH=arm64  will not work as go compiler looks for folder GOOS=android from go files so order is important

