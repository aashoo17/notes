# Graph

**G = (V,E)** - graph G is combination of set of vertex V and set of edges E  - edge is created by joining two vertices or using only 1 vertex  


**finite graph** - finite edges and finite vertices  
**simple graphs** - A graph in which each edge connects two different vertices and where
no two edges connect the same pair of vertices is called a simple graph  
that simply means no loop and no multigraph is simple graph   
TODO: isn't that that definition of tree  
**multigraphs** - two vertices are connected with more than one edge  
**loop** - 1 vertex is connected from edge to itself  
**undirected graph** - no direction  
**directed graph** - direction is available in edges  

**graph models**  

- web graph  
- module dependency graph
- concurrent processing
- airline routes
- road networks
- round robin
- cycles  
- wheels
- Interconnection Networks for Parallel Computation  

## Some important definitions

**adjacent**  
two vertices are called adjacent if both are connected by an edge  

**incident**  
if a vertex and edge is connected together it is called incident  

**degree**  
degree of vertex in undirected graph = total incident edges + 2 * no of loops at vertex  

## Handshaking theorem

## graph representation as matrix

**adjancency matrix**  
this shows connection between two vertex  
keep same set of vertices in row and then in column  
matrix element will be 1 if two vertex are connected via an edge  else 0

**incidence matrix**  
this shows vertex vs edge connection  
edge in row and vertex in column  
then a matrix element is 1 if vertex and edge is connected else 0

## shortest path in graphs

**weighted simple graphs**  
we know simple graph already  
weighted graph - each edge is given a weight  
**Dijkstra's Algorithm**  
[Dijkstra's Algorithm - with visual for wighted graphs](https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/)  
time complexity of Dijkstra's Algorithm ?  


## References 

**Books**  

Discrete Mathematics and Its Applications - Kenneth Rosen (2012)