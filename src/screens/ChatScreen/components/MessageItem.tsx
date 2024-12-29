import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface AutoMessageItemProps {
  readonly content: string;
  readonly type: string;
}

function MessageItem(props: AutoMessageItemProps) {
  const {type, content} = props;
  const isUserMessage = type === 'user';
  return (
    <View
      style={[
        styles.messageContainer,
        isUserMessage
          ? styles.userMessageContainer
          : styles.botMessageContainer,
      ]}>
      <Text style={isUserMessage ? styles.userMessage : styles.botMessage}>
        {content}
      </Text>
    </View>
  );
}
export default React.memo(MessageItem);
const styles = StyleSheet.create({
  messageContainer: {
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginTop: 10,
    maxWidth: '90%',
    alignSelf: 'flex-start',
  },
  loadingSpinner: {
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#225750',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    borderWidth: 1,
  },
  userMessage: {
    color: '#fff',
  },
  botMessage: {
    color: '#000',
  },
});
