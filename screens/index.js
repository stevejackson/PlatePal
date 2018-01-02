import { Navigation } from 'react-native-navigation';

import EditAvailableGearScreen from './EditAvailableGearScreen';
import PlateCalculatorScreen from './PlateCalculatorScreen';

export function registerScreens() {
  Navigation.registerComponent('PlatePal.EditAvailableGearScreen', () => EditAvailableGearScreen);
  Navigation.registerComponent('PlatePal.PlateCalculatorScreen', () => PlateCalculatorScreen);
}
