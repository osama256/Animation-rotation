import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue,interpolate, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import React from 'react';

const App: () => React$Node = () => {

  const animation = useSharedValue(0)

  const rotation = useDerivedValue(() => {

    return interpolate(animation.value,
      [0,360],
      [0,360])
  })

  const animationStyle = useAnimatedStyle(() => {
    return{

      transform:[
        {
          rotate: rotation.value + 'deg'
        }
      ]
    }
  })
  const startAnimation = () => {
    animation.value = withTiming(120,{
      duration : 2000
    })
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box,animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#631d94'
  }
});

export default App;