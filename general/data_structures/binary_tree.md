# Binary tree

[binary tree stanford](http://cslibrary.stanford.edu/110/BinaryTrees.pdf)
## BTree creation ideas

### creation of data structure
any node represents a value and location of two other nodes i.e. it can be represented as
//node as a struct
struct node{
    //node value
    int val;
    //pointer to other two nodes left and right
    node *left;
    node *right;
}

//a class/struct which will hold all the nodes
give this class a root node with initial value of NULL

node *root = NULL;

### insert

when we will insert any value it will first check if root is NULL if so make it root itself.
if not NULL check for its left node to be inserted   
if left is available go to right node

if both available select left node and go its left and right child and continue till insertion is not successful.

### search a node value
we can convert the tree into Binary search tree before hand for faster searchs

### remove a node value
remove is more like search and then remove
### destroy the BTree data structure
free the struct/class from memory




## Binary search tree

BST are special cases of binary tree where all the left nodes are smaller than its parent and right nodes are bigger than its parent this reduces time in searching the node as you know when you have to go left and when right.


[binary search tree visualization](https://visualgo.net/en/bst)

TODO:
look for practical applications
[hash tables vs bst which is used where practically](https://www.quora.com/What-is-the-practical-use-of-binary-search-trees)


## Binary Heap

[binary heap visualization](https://visualgo.net/en/heap)

most practical use in priority queue implementation where we want to insert/remove element based on its priority.
say network bytes in which we want to consume the most priority ones before




## logic for binary tree 

a node in binary tree can be something like 

```cpp
//a recursive data type which will have link to two more values of its type behind pointer and 
//its value
struct node{
    node *left;
    node *right;
    int value;
}
```
a tree will be made by lot of such nodes at any time tree could be as small no element and can be infinite big  
this whole tree had to persist in heap and different functions will just modify it
```cpp
//a tree class which wraps a node which we can call as root node
class tree{
    node *root;
} 
//this tree class will have functions which will modify the tree
```

operation like this should be supported

create node
initialize the first node called as root node with first value received and later new elements will become left or right child  

insert node in tree

delete node from tree

size of tree i.e. total nodes in tree

traverse over all nodes

## BST
make the tree balancing => self or manual  
make it a BST => all left child node are small in value and right ones big in value

deploy serach logic for which BST is known for

## Binary heap

