Mutex


RWMutex
mutex api is like
take a lock and other goroutine can not make changes
but to whom changes will not happen???

unlock is called and others have access
RLock
RUnLock
special cases for lock when only read is required