import CoverScreen from './src/Screens/CoverScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding  from './src/Screens/Onboarding';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Onboarding'
      screenOptions={{
        headerShown:false,
      }}
      >
       <Stack.Screen name="CoverScreen" component={CoverScreen}/>
       <Stack.Screen name='Onboarding' component={Onboarding}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

