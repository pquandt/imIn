import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen"
import Anmeldung from "../screens/Anmeldung";
import { Button } from "react-native";

const screens = {
WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
        headerShown: false

    }
},
Anmeldung: {
    screen: Anmeldung,   
    navigationOptions: {
        title: null
     
    }
}

}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);