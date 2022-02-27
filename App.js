import CoverScreen from './src/Screens/CoverScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding  from './src/Screens/Onboarding';
import SignUp from './src/Screens/SignUp';
import SignIn from './src/Screens/SignIn';
import HomeScreen from './src/Screens/HomeScreen';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown:false,
      }}
      >
       <Stack.Screen name="CoverScreen" component={CoverScreen}/>
       <Stack.Screen name='Onboarding' component={Onboarding}/>
       <Stack.Screen name='SignUp' component={SignUp}/>
       <Stack.Screen name='SignIn' component={SignIn}/>
       <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

