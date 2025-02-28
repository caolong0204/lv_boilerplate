import React, {useCallback, useEffect, useMemo} from 'react';
import {Animated, View, StyleSheet, StyleProp, TextStyle} from 'react-native';

interface TextAnimatorProps {
  content: string;
  duration?: number;
  onFinished?: () => void;
  textStyle?: StyleProp<TextStyle>;
}

const TextAnimator: React.FC<TextAnimatorProps> = ({
  content,
  duration = 500,
  onFinished,
  textStyle = {},
}) => {
  const textArr = content.trim().split(' ');
  const animatedValues = useMemo(() => {
    return textArr.map(() => new Animated.Value(0));
  }, [textArr]);

  const animated = useCallback(
    (toValue = 1) => {
      const animation = textArr.map((_, index) => {
        return Animated.timing(animatedValues[index], {
          toValue,
          duration: 200,
          useNativeDriver: true,
        });
      });
      Animated.stagger(duration / 10, animation).start(() => {
        onFinished?.();
      });
    },
    [textArr, duration, onFinished, animatedValues],
  );

  useEffect(() => {
    animated();
  }, [animated]);
  return (
    <View style={styles.container}>
      {textArr.map((text, index) => (
        <Animated.Text
          key={text + index}
          style={[
            styles.text,
            textStyle,
            {
              opacity: animatedValues[index],
              transform: [
                {
                  translateY: Animated.multiply(
                    animatedValues[index],
                    new Animated.Value(5),
                  ),
                },
              ],
            },
          ]}>
          {text}
          {textArr.length - 1 > index ? ' ' : ''}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 15,
  },
});

export default TextAnimator;
