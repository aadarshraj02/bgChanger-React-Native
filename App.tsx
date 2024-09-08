import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#000'} />
      <View style={[styles.container]}>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Text>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6a1b4d',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});
