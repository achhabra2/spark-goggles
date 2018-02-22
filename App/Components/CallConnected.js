import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import KeepAwake from 'react-native-keep-awake';
import SparkPropTypes from '../PropTypes/';
import ImageViewer from './ImageViewer';
import Button from '../Components/Button';
import styles from './Styles/CallConnectedStyles';

const CallConnected = ({
  call,
  messages,
  onHangup,
  onTriggerSnapshot,
  onToggleFullScreen,
  style
}) => {
  return (
    <View style={style}>
      <ImageViewer call={call} messages={messages} />
      <View style={styles.callConnectedButtons}>
        <Button
          style={styles.callConnectedButton}
          icon="ios-resize-outline"
          onPress={onToggleFullScreen}
        />

        <Button
          style={styles.callConnectedButton}
          icon="ios-camera-outline"
          onPress={onTriggerSnapshot}
        />

        <Button
          style={styles.callConnectedButton}
          icon="ios-close-outline"
          onPress={onHangup}
          type="alert"
        />
      </View>
      <KeepAwake />
    </View>
  );
};

CallConnected.propTypes = {
  call: SparkPropTypes.call.isRequired,
  messages: SparkPropTypes.messages.isRequired,
  onTriggerSnapshot: PropTypes.func.isRequired,
  onToggleFullScreen: PropTypes.func.isRequired,
  onHangup: PropTypes.func.isRequired,
  style: ViewPropTypes.style
};

export default CallConnected;
