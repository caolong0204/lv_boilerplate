export interface Message {
  id: number | string;
  content: string;
  type: 'user' | 'bot';
}

const messageHistory: Message[] = [
  {id: 1, content: 'Hello!', type: 'user'},
  {id: 2, content: 'Hi there! How can I assist you today?', type: 'bot'},
  {id: 3, content: 'I need help with my order.', type: 'user'},
  {
    id: 4,
    content: 'Sure, I can help with that. Can you provide your order ID?',
    type: 'bot',
  },
  {id: 5, content: 'It is 12345.', type: 'user'},
  {
    id: 6,
    content: 'Thank you. Let me check the status of your order.',
    type: 'bot',
  },
  {id: 8, content: 'Great, thank you!', type: 'user'},
  {
    id: 9,
    content: "You're welcome! Is there anything else I can help with?",
    type: 'bot',
  },
  {id: 10, content: "No, that's all. Have a nice day!", type: 'user'},
  {id: 11, content: 'You too! Goodbye!', type: 'bot'},
];

export default messageHistory;
