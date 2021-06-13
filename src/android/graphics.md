Drawing something on the screen in android

Canvas => somewhere where we can draw our shape  
Paint => this will define all sorts of coloring option to our drawing to draw with  
shapes,bitmaps => these are things which can be drawn onto canvas shape,bitmaps (jpg,png,gif,nine-patch), vector graphics  

Paint can be created using basic constructor easy  
similary shapes  
bitmaps will be drawn by image processing programs and will be kept on resources directory  

accessing canvas  

write class which will inherit from View class View already has access to canvas through context which is generally activity context we can pass this class to setContentView for rendering

TODO: Directly accessing canvas and rendering on screen


[android Graphics architecture](https://source.android.com/devices/graphics/architecture)