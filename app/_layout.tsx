import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Layout() {


  return (
    <GestureHandlerRootView style={{
      flex: 1
    }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'overview',
            drawerIcon: ({color, size}) => (<Entypo name="home" size={size} color={color} /> 

            )
          }}
        />
        <Drawer.Screen
          name="User"
          options={{
            drawerLabel: 'User',
            title: 'overview',
            drawerIcon: ({color,size}) => 
              (<Entypo name="user" size={size} color={color}/>)
          }}
        />
        <Drawer.Screen 
        name="settings"
          options={{
            drawerLabel: "settings",
            title: "overview",
            drawerIcon: ({size}) => (<Ionicons name="settings-outline" size={size}/>)
          }}        
        />
      </Drawer>
     </GestureHandlerRootView>
  );
}