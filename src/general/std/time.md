# Time

types of clocks in CPU

1. time measuring clock (this is generally lower frequency set to 32768 Hz) - can run on battery power even when computer is fully dead 
2. controlling CPU instruction execution speed(we see like 2.5 GHz, 2 GHz, 4 GHz these days)  

**epoch**  
all computers has an in-built clock which is set to give value in seconds (even with nanosecond precision) from 
epoch (1st Jan 1970 at 00:00:00 hrs)

**how the time measuring clock works**  
[How the modern world keeps track of time - An introduction to crystal oscillators](https://www.youtube.com/watch?v=fPKdDCiJDok)
[How a quartz watch works - its heart beats 32,768 times a second](https://www.youtube.com/watch?v=_2By2ane2I4)

**piezoelectric effect** 
some crystals when deformed by applying mechanical force produce voltage - called piezoelectric effect
and reverse is also true when voltage is given crystal deforms and when voltage is removed crystal come back to
original state this makes a vibration at crystal natural frequency - this property is used for making a clock
quartz oscillator:
quartz crystal when electromagnetic field is applied will vibrate on it natural frequency 
frequency can be controlled by changing mass using some other material like gold coating to make it vibrate at some fixed 
frequency which we want
we need the frequency to be at least above 20 kHz frequency so that it can not be heard by humans
we select first power of 2 which goes above 20k which is 2^15 = 32768
TODO: why we select frequency which is in power of 2

**flip flops**  
[basic flip flop](https://www.youtube.com/watch?v=F1OC5e7Tn_o)  
TODO: give better definition
15 step flip flops - 15 flip flops are connected together
1st flip flop will change its state - every 1 vibration of crystal
2nd one - every 2 vibration
3rd one - every 2^3 vibration
4th one - every 2^4 vibration
...
15th one - every 2^15 = 32768 vibration 
so 15th flip flop changes state (from 0 to 1) every 32768 vibration i.e. every 1 second, so it is counting 1 second

so if crystal osciallted say at frequency N then 
after N oscillations - 1 sec  
in 1 oscillation - 1/N sec (least time which clock hardware can measure)

## Calendar time:
conversion of these seconds in wall clock time - hrs:min:sec + day, month, year
then we have programs to convert these seconds into GMT or your local time zone
[timezones explained](https://www.youtube.com/watch?v=viyERCiHgj0)
usually this computer clock is very precise but it is possible it will not match with others for some reason
or you want another clock as source of truth say another computer on internet to be used for 
getting the current time and date
so OS provides flexibility to do so as per convenience and can modify calendar time as per requirement

## Elapsed time
take two calendar time and subtract them to get elapsed time easy 

**monotonic clock**  
this if software implemented which measures time from an epoch (which can be any time after boot)  
say 10 sec after boot.  
this clock does ensures that clock until booted again will keep on increasing only  
subtraction of two times on monotonic clock will still give elapsed time  
so it is better to use monotonic clock  

so what is benefit of monotonic over calendar time by substracting both will give same result for elasped time  
the thing is that calendar time can be changed by user/programmer - this is given as flexibility to match the clock  
if any error in the physical clock or use another clock for syncing the time over internet  
so if suddenly I changed the calendar time programmatically - elapsed time will give wrong result if calendar time was used  

monotonic clock can not be changed once started so it is good for measuring time  

## CPU time:
another use of these seconds is to calculate time elapsed between two times usually to determine how much 
time cpu has taken to execute some program or procedure or code
waiting on external events is not counted in cpu tike waiting for IO etc..

as external events like IO etc.. are not counted in CPU time getting calendar time or elapsed time will both are useless 
to compute CPU time.  
For this OS tracks 2nd hardware clock (used for cpu execution synchronization)  
when a process starts it will start monitoring cpu/clock ticks  
if we get current no of ticks sat a and after some interval ticks are b then  

b - a = no of ticks for that code execution  
(b - a)/CLOCK_FREQUENCY_IN_HERTZ = time in seconds  

## Processor time:
it calculates all times even waiting for IO etc for some code execution
TODO: isn't it same as elapsed time  
