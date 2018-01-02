import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Gear',
      screen: 'PlatePal.EditAvailableGearScreen',
      icon: require('./img/plate-icon.png'),
      selectedIcon: require('./img/plate-icon.png'), // iOS only
      title: 'Edit Available Gear'
    },
    {
      label: 'Calculator',
      screen: 'PlatePal.PlateCalculatorScreen',
      icon: require('./img/scale-icon.png'),
      selectedIcon: require('./img/scale-icon.png'), // iOS only
      title: 'Calculator'
    }
  ]
});
