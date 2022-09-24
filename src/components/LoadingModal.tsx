import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

export const LoadingModal: React.FC  = React.memo(({}) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={'#F2406A'} />
    </View>
  );
});

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    zIndex: 5,
    justifyContent: 'center',
  },
});
