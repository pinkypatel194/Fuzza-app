// import React from "react";
// import Intro3 from "./intro3";
// import Intro1 from './intro1';
// import Intro2 from './intro2'; 
// import Home1 from './home1'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';
// import Notification from "./notification";
// import Menu from './menu'
// import Sofas from "./sofa";
// import Chairs from "./chairs";
// import Chaircart from "./chairscarts";
// import Cart from "./addcart";
// import Lamp from "./lamp";
// import TvUnits from "./tvunit";
// import Filter from "./filters";
// const Stack = createStackNavigator();
// const App = () => {
//    return (
//       <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="intro1" component={Intro1} options={{ headerShown: false}} />
//         <Stack.Screen name="intro2" component={Intro2} options={{ headerShown: false}} />
//         <Stack.Screen name="intro3" component={Intro3} options={{ headerShown: false}}/>
//         <Stack.Screen name="home1" component={Home1} options={{ headerShown: false}}/>
//         <Stack.Screen name="notification" component={Notification} options={{ headerShown: false}}/>
//         <Stack.Screen name="menu" component={Menu} options={{ headerShown: false}}/>
//         <Stack.Screen name="sofa" component={Sofas} options={{ headerShown: false}}/>
//         <Stack.Screen name="chairs" component={Chairs} options={{ headerShown: false}}/>
//         <Stack.Screen name="chairscarts" component={Chaircart} options={{ headerShown: false}}/>
//         <Stack.Screen name="addcart" component={Cart} options={{ headerShown: false}}/>
//         <Stack.Screen name="lamp" component={Lamp} options={{ headerShown: false}}/>
//         <Stack.Screen name="tvunit" component={TvUnits} options={{ headerShown: false}}/>
//         <Stack.Screen name="filters" component={Filter} options={{ headerShown: false}}/>
//       </Stack.Navigator>
//   </NavigationContainer>
  
//    ); 
// }

// export default App


import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colorfilter from './colorfilter';

const App = () => {
  return (
    <GestureHandlerRootView>
      <Colorfilter />
    </GestureHandlerRootView>
  );
};

export default App;

