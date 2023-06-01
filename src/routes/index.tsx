import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import * as Linking from 'expo-linking';

export function Routes(){
    const url = 'exp://192.168.15.176:19000/'
    console.log("url", url)

    
    
    
    const linking = {
        prefixes: ['exp://192.168.15.176:19000/--/myapp'],
        config: {
          screens: {
            home: {
              path: 'home',
            },
            product: {
              path: 'product',
            },
          },
        },
      };
    
      
      return (
        <NavigationContainer linking={linking}>
          <AppRoutes />
        </NavigationContainer>
      );
}

