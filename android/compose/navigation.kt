// Navigation in compose

//[Navigation in cmpose basics](https://developer.android.com/jetpack/compose/navigation)

package com.aashoo17.prac

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.Card
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.setContent
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.navigate
import androidx.navigation.compose.rememberNavController

class MainActivity : AppCompatActivity() {
    @ExperimentalMaterialApi
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Prac()
        }
    }
}

@Composable
fun Prac(){
    //create NavController
    val navController = rememberNavController()
    //create routes for all Composables we want to move between
    NavHost(navController, startDestination = "ashu") {
        //ashuand anu is the route name given for ScaffoldPrac and ScaffoldPrac2 composables
        composable("ashu") { ScaffoldPrac(navController = navController) }
        composable("anu") { ScaffoldPrac2() }
    }
}

@Composable
fun ScaffoldPrac(navController: NavController){
    Scaffold() {
        Card(
            //call navigate to move to another Composable
            modifier = Modifier.fillMaxWidth(0.5f).fillMaxHeight(0.8f).clickable(onClick = {navController.navigate("anu")}),
            backgroundColor = Color.Red
        ){}
    }
}

@Composable
fun ScaffoldPrac2(){
    Scaffold() {
        Card(
            modifier = Modifier.fillMaxWidth(0.5f).fillMaxHeight(0.8f),
            backgroundColor = Color.Blue
        ){}
    }
}
