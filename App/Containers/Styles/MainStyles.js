import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  localView: {
    position: 'absolute',
    width: 1,
    height: 1,
    left: 0,
    top: 0,
    elevation: 1
  },

  remoteViewHidden: {
    position: 'absolute',
    width: 1,
    height: 1,
    top: -1,
    right: -1
  },

  remoteViewVisible: {
    position: 'absolute',
    width: 160,
    height: 90,
    top: 0,
    right: 0,
    elevation: 4
  },

  dialer: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    left: 0,
    top: 0,
    elevation: 3
  },

  callRinging: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    left: 0,
    top: 0,
    elevation: 6
  },

  callConnected: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    right: 0,
    bottom: 0,
    elevation: 5
  }
});
