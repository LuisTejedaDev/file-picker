import {Platform} from 'react-native'
import DeviceInfo from 'react-native-device-info';

const {isTablet} = DeviceInfo;

export const isIOS = Platform.OS === 'ios' ? true : false;
export const isATablet = isTablet()