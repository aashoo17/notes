# Tree
tree is undirected graph with no simple circuit  
undirected - no direction we can move in any direction over the edge  
no simple circuit - means no loop and no multiple edges from two vertices  

## Rooted tree
give a vertex name root now edge from root can be given direction  

## m-ary trees
if each vertex has m children then it is called m-ary tree


## balanced m-ary tree
subtrees at each vertex contain paths of approximately the same length  
**level**  
level of a vertex v in a rooted tree is the length of the unique path from the root to this vertex  
**height**  
height of a rooted tree is the maximum of the levels of vertices  
In other words, the height of a rooted tree is the length of the longest path from the root to any vertex  

## Binary Search Tree (BST)
it is special form of binary tree  
binary tree - each vertex can have max two children  
BST - arrange binary tree such that left child is smaller than root vertex and right child is bigger than root vertex  

## Huffman coding

**fixed width encoding**  
e.g. code english's 26 character (small a and capital A and other letters are same for the time)  
if we use 5 bits we can represent 2^5 = 32 possibilities  
so 5 bits is enough to represent all alphabets  
so if we encode say 10 characters then we need 50 bits for 15 character we need 75 and so on  

**variable width encoding**  
in A to Z some alphabets have more frequency to occur in general  
we can represent those alphabets using smaller bits  
say for e.g. A, E, I, O, U occur very frequently  
then we can give this encoding A - 0, E - 1, I - 01, O - 10, U - 00  and so on  
this will help reduce the size  
here comes the problem say we have encoding 0010 what that means now  - AAO, UEA, UO etc..

**prefix codes**  
if e were encoded with 0, a with 1, and t with 01, then the bit string 0101 could correspond to eat, tea, eaea, or tt.  
One way to ensure that no bit string corresponds to more than one sequence of letters is to encode letters so that the bit string for a letter never occurs as the first part of the bit string for another letter. Codes with this property are called prefix codes  

**Huffman encoding**  
one of such way was designed by Huffman called Huffman encoding  


## Tree traversal
preorder traversal - root, left, right
inorder traversal  - left, root, right
postorder traversal  - left, right, root

## spanning tree

**spanning tree**  
depth first search  
breadth first search   
**minimum spanning tree**  
**prims's algorith**  
**Kruskal’s Algorithm**  

