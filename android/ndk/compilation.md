# compilation

gcc utility provided in ndk/version/toolchains/llvm/prebuilt/linux-x86_64/bin  
these executable are based on api level - starting from api21  
compiling with correct api level ensures that header file and linkable objects are available on the device and won't be required from outside  

aarch64-linux-android = keeps required binary linker/assembler and linkable objects etc for aarch64 platform  
arm-linux-androideabi = this keeps for arm architecture  
x86_64-linux-android = keeps for x86_64  
i686-linux-android = keeps for x86  

TODO: i see that aarch64-linux-android and others mentioned above keeps very few libraries  
what about other libs where do they come from ??  

