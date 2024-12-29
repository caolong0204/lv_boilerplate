import React, {useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  View,
} from 'react-native';

import {PaperAirplaneIcon} from 'react-native-heroicons/outline';
import Animated, {
  KeyboardState,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface TextMessageInputProps {
  onSendMessage: (value: string) => void;
}
const DEFAULT_INPUT_HEIGHT = 23;
export const MAX_INPUT_HEIGHT = 130;
const isIos = Platform.OS === 'ios';
const ChatInput: React.FC<TextMessageInputProps> = ({onSendMessage}) => {
  const [height, setHeight] = useState(DEFAULT_INPUT_HEIGHT);
  const message = useRef<string>('');
  const textInputRef = useRef<TextInput>(null);

  const handleSendMessage = () => {
    onSendMessage(message.current);
    resetDefaultState();
  };
  const onChangeText = (value: string) => {
    //remove space and end of line at begin and end
    message.current = value;
  };
  const resetDefaultState = () => {
    textInputRef.current?.clear();
    setHeight(DEFAULT_INPUT_HEIGHT);
  };
  const onContentSizeChange = (
    event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    if (isIos) {
      return;
    }
    if (event.nativeEvent.contentSize.height > MAX_INPUT_HEIGHT) {
      return;
    }
    setHeight(event.nativeEvent.contentSize.height);
  };
  const {bottom} = useSafeAreaInsets();
  const keyboard = useAnimatedKeyboard();
  const animatedStyles = useAnimatedStyle(() => {
    if (
      keyboard.state.value === KeyboardState.OPEN ||
      keyboard.state.value === KeyboardState.OPENING
    ) {
      return {transform: [{translateY: -keyboard.height.value + bottom}]};
    }
    return {transform: [{translateY: -keyboard.height.value}]};
  });
  return (
    <Animated.View style={[styles.container,animatedStyles]}>
        <View style={styles.textInputWrapper}>
          <TextInput
            ref={textInputRef}
            placeholder={'Type your message...'}
            multiline
            numberOfLines={4}
            placeholderTextColor="#9EA7B8"
            style={[styles.textInput, isIos ? {} : {height}]}
            onChangeText={onChangeText}
            onSubmitEditing={handleSendMessage}
            onContentSizeChange={onContentSizeChange}
          />
        </View>
        <Pressable onPress={handleSendMessage} style={styles.iconContainer}>
          <PaperAirplaneIcon width={20} height={20} color={'black'} />
        </Pressable>
    </Animated.View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#fff',
    minHeight: 39,
    borderWidth: 2,
  },
  iconContainer: {
    justifyContent: 'flex-start',
    padding: 10,
  },
  // TextMessageInput
  textInput: {
    minHeight: 23,
    lineHeight: 20,
    fontSize: 14,
    textAlignVertical: isIos ? 'bottom' : 'center',
    padding: 0,
    color: '#000',
    maxHeight: MAX_INPUT_HEIGHT,
  },
  textInputWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
});
