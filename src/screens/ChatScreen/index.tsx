import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  LayoutChangeEvent,
} from 'react-native';
import messageHistory, {Message} from '../../mockData/messageData';
import ChatInput from './components/ChatInput';
import MessageItem from './components/MessageItem';
import uuid from 'react-native-uuid';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
export default function ChatScreen() {
  const [messagesHistory, setMessagesHistory] =
    useState<Message[]>(messageHistory);
  const flatListRef = useAnimatedRef<FlatList>();
  const flatListHeight = useSharedValue(0);
  const userMessageHeight = useSharedValue(0);
  const botMessageHeight = useSharedValue(0);

  const handleSendMessager = (value: string) => {
    userMessageHeight.value = 0;
    botMessageHeight.value = 0;
    setMessagesHistory(history => [
      ...history,
      {type: 'user', content: value, id: uuid.v4()},
      {
        type: 'bot',
        content: 'Hello there, thank you for sending me your question',
        id: uuid.v4(),
      },
    ]);
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: messagesHistory.length,
        animated: true,
      });
    }, 0);
    setTimeout(() => {
      setMessagesHistory(history => [
        ...history.slice(0, history.length - 1),
        {
          type: 'bot',
          content:
            'Hello there, thank you for sending me your questionHello there, thank you for sending me your questionHello there, thank you for sending me your question',
          id: uuid.v4(),
        },
      ]);
    }, 2000);
  };

  const onLayout = useCallback((type: string) => {
    return (event: LayoutChangeEvent) => {
      const {height} = event.nativeEvent.layout;
      if (type === 'user') {
        userMessageHeight.value = height;
      } else {
        botMessageHeight.value = height;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnLayoutFlatList = useCallback((event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    flatListHeight.value = height;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const gapAnimatedStyle = useAnimatedStyle(() => {
    return {
      height:
        flatListHeight.value - userMessageHeight.value - botMessageHeight.value,
    };
  });
  const renderItem = ({item}: {item: Message}) => {
    return (
      <View onLayout={onLayout(item.type)}>
        <MessageItem content={item.content} type={item.type} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ChatBot</Text>
        </View>
        <View style={styles.messageView}>
          <Animated.FlatList
            onLayout={handleOnLayoutFlatList}
            ref={flatListRef}
            data={messagesHistory}
            style={styles.flex1}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={
              <Animated.View style={[styles.gap, gapAnimatedStyle]} />
            }
          />
          <ChatInput onSendMessage={handleSendMessager} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'violet',
    paddingVertical: 10,
    alignItems: 'center',
  },
  flex1: {flex: 1},
  title: {color: '#000', fontWeight: '500'},
  messageView: {paddingHorizontal: 10, flex: 1},
  gap: {backgroundColor: 'red', width: 300},
});
