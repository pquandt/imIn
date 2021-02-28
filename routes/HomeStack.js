import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen"
import Anmeldung from "../screens/Anmeldung";
import { Button } from "react-native";

const screens = {
WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
        header: null,

    }
},
Anmeldung: {
    screen: Anmeldung,   
    navigationOptions: {
        header: null,
     
    }
}

}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);