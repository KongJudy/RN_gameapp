import { StyleSheet, Pressable, Text, View } from 'react-native';

import Colors from '../../constants/colors';

/* onPress prop can be named whatever you want because it is your own prop but the onPress prop for Pressable cannot be changed. onPress={yourPropName} */
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,
    // for android devices
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  // for iOS devices
  pressed: {
    opacity: 0.75
  }
});
