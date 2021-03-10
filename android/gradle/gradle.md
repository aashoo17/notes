# Running Gradle Builds

## build properties

[Build Environment official groovy docs](https://docs.gradle.org/current/userguide/build_environment.html)  
precedence order  
- command-line flags  
- system properties
- gradle properties
- environent variables

gradle.properties file  
where to keep in root folder or can be kept anywhere in the folder multiple times and based on location which comes first whose value will be used by gradle  

## gradle daemon
[gradle daemon](https://docs.gradle.org/current/userguide/gradle_daemon.html)
it is on by default  
why it is used and its benefits  
how to disable  
get the list of running daemons

## multi project build
[multi project gradle](https://docs.gradle.org/current/userguide/intro_multi_project_builds.html)
what is multi project build 

root directories with  
settings.gradle  
settings.gradle file tells Gradle how the project and subprojects are structured  
running gradle projects can tell you the project structure don't need to explore settings.gradle file to know about project structure  
[gradle settings class all methods](https://docs.gradle.org/current/javadoc/org/gradle/api/initialization/Settings.html)

settings.gradle  
[buildCache](https://docs.gradle.org/current/userguide/build_cache.html)

build.gradle  
The root build.gradle is often used to share common configuration between the child projects  
build files might not be called build.gradle. Many projects will name the build files after the subproject names, such as api.gradle and services.gradle, interesting

child directories => *.gradle  
## scan builds

## optimize build times


# Authoring gradle builds

## project and tasks

something which has to be done is given a name and is called task  
pieces of code which is given a name and called by gradle  
multiple tasks combine themselves to make a project in whole  
written in build.gradle file  

-q flag in gradle invokation will suppress any gradle specific logs  
it may be useful if we want to see only results  

TODO:
write a task named task 1 which will do something say print "hello world"

dependency of one task on other task

Default tasks

[basic project properties](https://docs.gradle.org/current/userguide/writing_build_scripts.html)


## plugins

gradle init plugin  
init is a plugin which is already available in gradle  

initialize project folder with gradle specific files  
[gradle init official docs](https://docs.gradle.org/5.0/userguide/build_init_plugin.html)
[gradle plugins](https://docs.gradle.org/current/userguide/plugins.html)

normally all the tasks for a typical project is defined and we only have to call it by knowing which task is to be called when

TODO:
working with java/kotlin and android plugins

gradle init flags  
--type  
basic build init type => if not specified any

--dsl
    kotlin dsl
    groovy dsl

--project-name

# Logging
[logging from gradle](https://docs.gradle.org/current/userguide/logging.html)

# References:

[benefits of kotlin over groovy in gradle](https://blog.gradle.org/kotlin-meets-gradle)  
also you don't have to learn a new language if you are developing android etc in kotlin  
[When to use gradle.properties vs. settings.gradle?](https://stackoverflow.com/questions/45387971/when-to-use-gradle-properties-vs-settings-gradle)  
[gradle samples using kotlin](https://github.com/gradle/kotlin-dsl-samples/tree/master/samples) 

learn about kotlin DSL used in gradle   
[DSL in kotlin part 1](https://proandroiddev.com/writing-dsls-in-kotlin-part-1-7f5d2193f277)  
[DSL in kotlin part 2](https://proandroiddev.com/writing-dsls-in-kotlin-part-2-cd9dcd0c4715)


