Crash Course Videos:
https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo
channel
https://www.youtube.com/channel/UCX6b17PVsYBQ0ip5gyeme-Q


Transistors:

Why using only two states of on or off for representing 0 and 1 or binary system why not to use different currents for representing may be ternary or decimal states?
https://superuser.com/questions/974199/why-does-computer-memory-only-have-two-states

Basic Boolean operation
NOT
OR
AND
XOR
These can be created by using group of transistors and called as gates

Similarly using these gates we can compute addition, subtraction, multiplication and division.

It is possible to do multiplication using addition in few extra steps but transistor can provide direct circuit for multiplication but will be a little complex and more space will be occupied based on the requirement we can use on or another and trade off, similarly for division.

ALU for arithmetic operation
Arithmetic Logic Unit

AND-OR LATCH
for creating a temporary memory as in RAM

GATED LATCH
Two lines one for passing the data and another for write enable if write enable is on we can change the data if not we can’t.

Registers
These gated latches kept together called registers say 8 latches for 8 bit storage register.

Latch Matrix
16x16 matrix
16 rows and 16 columns
data will be written to latch where both rows and column as well as write enable is on 
All latches will be joint to same data wire but only one latch will write it where write enable is on.
To select rows and columns we will use 8 bits first 4 bits for rows and last 4 for columns.

Multiplexers
They are used to select the correct row or column and activate it

All registers are arranged in series and make a good no of memory and called RAM

SRAM 
uses latches to store memory
DRAM and others uses other circuit from latches to store memory but concept is same.

Processors
Arithmetic operation
memory instruction to read and write
ALU + control unit
How RAM binary code is execute by CPU?
CPU Clock speed

So loading different binary code in RAM through loading programs we can instruct CPU to do different task.

Every binary instruction(say for 8 bit registers 8 bit binary code) will have code for type of operation and memory location it will be done. 
Now in programming language these binary codes are given a name hence we got assembly languages.
JUMP
LOOP
HALT

So A CPU can do some basic operations we can write software to do these operation and build another software on top of these softwares
