import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'; 
import Home from '../SCREENS/home';
import Portefolio from '../SCREENS/portefolio';
import Photo from '../SCREENS/photo';
// importer les ecrans 
//  const screens ={
//     Home:Home, 
//     Portefolio: Portefolio, 
//     Photo: Photo

//  }
const screens ={
    Home:{
        screen:Home
    }, 
    Portefolio: {
        screen:Portefolio
    }, 
    Photo: {
        screen:Photo
    }

 }
const StackNav= createStackNavigator(screens)
export default createAppContainer(StackNav)