#include <iostream>
#include <memory>
#include <cassert>

using namespace std;

int main(){
	//shared_pointer

	//creation:
	//TODO: can we say 10 is allocated on heap for sure or it can be anywhere
	shared_ptr<int> s = make_shared<int>(10);

	//or we can just use the normal constructors
	shared_ptr<int> s1;		//to which memory s1 points though
	shared_ptr<int> s2(new int);		//allocate int using new on heap and share through shared_ptr
	*s2 = 10;		//dereff and allocate some value


	//modify:
	//it is as simple as calling * operator on it and assigning the value
	*s = 100;

	//sharing memory:
	//sharing shared_ptr underlying memory with another is easy as simple assignment
	shared_ptr<int> s3 = s;		//shared_ptr s unserlying memory and of s3 is same now

	//cleaning memory:
	//this is the magic part this happens automatically when shred_ptr variable goes out of scope


	//weak_ptr:
	//whats all the fuss about weak_ptr
	//so for that we have to understand how shared_ptr gets cleaned up
	//so when a memory is referred by more than 1 shared_ptr variable memory will hold until all shared_ptr's
	//are gone out of scope which were pointing to this memory
	//weak_ptr if has access to same memory it will get cleaned up anyway and it will not care if weak_ptr is
	//still in scope
	//but it comes with one caveat before accessing the memory we have to check if memory was not cleaned up

	weak_ptr<int> w = s;

	//get the lock to check memory still holds if i am going to try dereff weak_ptr
	shared_ptr<int> new_w = w.lock();

	*new_w = 30;

	assert(*s == 30);
}
