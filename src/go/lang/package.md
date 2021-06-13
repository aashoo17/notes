[package in golang](callicoder.com/golang-packages/)  

let's talk in terms of module  
**go mod init github.com/username/module_name**  
github.com/username => this becomes the path for the module (used for finding the location)  
module_name => this is module name  

so folder names give module graph  
say this is how my folder looks like
root
- custom1
- custom2
  - embedded
- custom3

then module graph 

root -> custome1
     -> custom2 -> embedded
     -> custom3

to access anything inside embedded we have to import it as
import "root/custom2/embedded"   

say embedded has taken package name as emb and a function Custom_func()  then to use things from where path is imported  
emb.Custom_func()

things which can be used from module are - function, struct, methods etc...  
so all these things which starting with capital letter will be exported for use  

package name is used just for exporting things which are in path  

**why folder names and package name can be different why not use use folder name for package name implicitly**  
folder names are dependent on underlying OS - say if an OS does not allow some name to be valid folder name  
we can never use it for package name  
e.g. say an OS does not allow - in folder name we can't name fodler as go-lang then but package name is   
entirely go feature it will allow this name to be valid package name  

TODO: **showcase uses with same package name and folder name and different package name and folder name**  
 
[folder vs package name in golang](https://stackoverflow.com/questions/38563990/what-is-the-purpose-of-the-package-declaration)  
this explains why folder name is not always package name and what is its benefits  

