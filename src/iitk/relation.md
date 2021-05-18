# Relation

understand what it means for relation on set  
A = {1,2,3}  
B = {4,5,6}  

cartesian product  
A x B = {(1,4),(1,5),(1,6),(2,4),(2,5),(2,6),(3,4),(3,5),(3,6)}  
A x B = {14,15,16,24,25,26,34,35,36}  
        | 14 15 16 |  
A x B = | 24 25 26 |  
        | 34 35 36 |  

relation on set A and B  => will be a subset of A x B  
relation on set A and A itself  => subset of A x A  

**find out about these relations**  

writing in short pair (1,2) for 12 only  
if 
A = {1,2,3}    
then  

        | 11 12 13 |  
A x A = | 21 22 23 |  
        | 31 32 33 |  
 
**reflexive**  
if we have all diagonal pairs 11,22,33 then it is reflexive    
{11,12,13,21,22,23,31,32,33}  
{11,22,33}  
{11,22,33,12}  

**symmetric**    
{12,21} - symmetric if we have reverse pair also  
{11,22,33}  - 11 22 etc are reverse of themselves  

**asymmetric**  
{12,13} - asymmetric since we don't have reverse of these like for 12 - 21 and for 13 - 31  
{31,32}  
asymmetric don't allow 11 or 22 as they are reverse of themselves  

**antisymetric**  
antisymetric is like asymetric but it allows things which are reverse of themeselves like 11,22 ..etc  

{11,12,31} - antisymmetric  

**transitive**    
for e.g. we have these pairs (1,2) and (2,3) then if (1,3) is available it is called transitive  
{12,23,13} - transitive  
{13,32,12}  

**relations using matrices**  


**equivalence relation**  
for equivalence on A any relation will be reflexive, symmetric and transitive  
TODO: is == equivalence in programming languages if so how it is ensured for int, float and strings  
TODO: what about partial eq  

**partial order relation**  
for partial order on A any relation will be reflexive, antisymmetric and transitive  


