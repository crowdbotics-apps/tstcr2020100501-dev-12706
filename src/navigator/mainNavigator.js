import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211777Navigator from '../features/BlankScreen211777/navigator';
import BlankScreen111758Navigator from '../features/BlankScreen111758/navigator';
import BlankScreen011733Navigator from '../features/BlankScreen011733/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211777: { screen: BlankScreen211777Navigator },
BlankScreen111758: { screen: BlankScreen111758Navigator },
BlankScreen011733: { screen: BlankScreen011733Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
