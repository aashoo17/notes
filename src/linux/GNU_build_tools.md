automake => takes Makefile.am => outputs makefile.in (autoconf is used in between automatically)

autoconf =>takes configure.ac/configure.in and produces => configure file
configure creates => makefile

# automake
[Full automake docs](https://www.gnu.org/software/automake/manual/automake.html#Introduction)

## standard make commands

make all
Build programs, libraries, documentation, etc. (same as make).

make install
Install what needs to be installed, copying the files from the package’s tree to system-wide directories.

make install-strip
Same as make install, then strip debugging symbols. Some users like to trade space for useful bug reports...

make uninstall
The opposite of make install: erase the installed files. (This needs to be run from the same build tree that was installed.)

make clean
Erase from the build tree the files built by make all.

make distclean
Additionally erase anything ./configure created.

make check
Run the test suite, if any.

make installcheck
Check the installed programs or libraries, if supported.

make dist
Recreate package-version.tar.gz from all the source files.

## standard directory variable

Directory variable	Default value
prefix	/usr/local
  exec_prefix	${prefix}
    bindir	${exec_prefix}/bin
    libdir	${exec_prefix}/lib
    …
  includedir	${prefix}/include
  datarootdir	${prefix}/share
    datadir	${datarootdir}
    mandir	${datarootdir}/man
    infodir	${datarootdir}/info
    docdir	${datarootdir}/doc/${PACKAGE}

## Standard Configuration Variables

The GNU Coding Standards also define a set of standard configuration variables used during the build. Here are some:

CC
C compiler command

CFLAGS
C compiler flags

CXX
C++ compiler command

CXXFLAGS
C++ compiler flags

LDFLAGS
linker flags

CPPFLAGS
C/C++ preprocessor flags

configure usually does a good job at setting appropriate values for these variables, but there are cases where you may want to override them. For instance you may have several versions of a compiler installed and would like to use another one, you may have header files installed outside the default search path of the compiler, or even libraries out of the way of the linker.

Here is how one would call configure to force it to use gcc-3 as C compiler, use header files from ~/usr/include when compiling, and libraries from ~/usr/lib when linking.

~/amhello-1.0 % ./configure --prefix ~/usr CC=gcc-3 \
CPPFLAGS=-I$HOME/usr/include LDFLAGS=-L$HOME/usr/lib

## Overriding Default Configuration Setting with config.site
When installing several packages using the same setup, it can be convenient to create a file to capture common settings. If a file named prefix/share/config.site exists, configure will source it at the beginning of its execution.

~/amhello-1.0 % ./configure --prefix ~/usr CC=gcc-3 \
CPPFLAGS=-I$HOME/usr/include LDFLAGS=-L$HOME/usr/lib

Assuming we are installing many package in ~/usr, and will always want to use these definitions of CC, CPPFLAGS, and LDFLAGS, we can automate this by creating the following ~/usr/share/config.site file:

test -z "$CC" && CC=gcc-3
test -z "$CPPFLAGS" && CPPFLAGS=-I$HOME/usr/include
test -z "$LDFLAGS" && LDFLAGS=-L$HOME/usr/lib

## Cross-Compilation
--build=build
The system on which the package is built.

--host=host
The system where built programs and libraries will run.

## Renaming Programs at Install Time
The GNU Build System provides means to automatically rename executables and manpages before they are installed (see Man Pages). This is especially convenient when installing a GNU package on a system that already has a proprietary implementation you do not want to overwrite. For instance, you may want to install GNU tar as gtar so you can distinguish it from your vendor’s tar.
This can be done using one of these three configure options.

--program-prefix=prefix
Prepend prefix to installed program names.

--program-suffix=suffix
Append suffix to installed program names.

--program-transform-name=program
Run sed program on installed program names.


# Make


