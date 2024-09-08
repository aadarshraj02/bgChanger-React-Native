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
      <View>
        <TouchableOpacity>
          <View>
            <Text>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
