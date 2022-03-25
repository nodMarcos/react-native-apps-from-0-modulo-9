import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator()

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717',
          width: 240,
        },
        drawerLabelStyle: {
          fontWeight: 'bold'
        },
      headerShown:false,

        
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#ddd',
        itemStyle: {
          marginVertical: 5
        }
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="New" component={New} />
      <AppDrawer.Screen name="Profile" component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes