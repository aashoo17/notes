# DrawerLayout

[DrawerLayout from android docs](https://developer.android.com/reference/androidx/drawerlayout/widget/DrawerLayout)

To use a DrawerLayout, position your primary content view as the first child with width and height of match_parent and no layout_gravity>. Add drawers as child views after the main content view and set the layout_gravity appropriately. Drawers commonly use match_parent for height with a fixed width.  

Above line is very important it says that the view which you want to display always (your main view) should be first child with no layout_gravity set  
after the main content add views for the drawer with layout_gravity. layout_gravity tells the side from where drawer will emerge

Something like this  
DrawerLayout  
    MainView  
    DrawerContent View

for drawer content we usually use NavigationView which takes a menu resource to create NavigationView 