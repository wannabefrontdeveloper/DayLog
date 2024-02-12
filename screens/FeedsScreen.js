import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function FeedsScreen() {
  return (
    <View style={styles.block}>
      <Box>{value => <Text>{value}</Text>}</Box>
    </View>
  );
}

function Box({children}) {
  return <View style={styles.box}>{children('Hello World')}</View>;
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
});

export default FeedsScreen;
