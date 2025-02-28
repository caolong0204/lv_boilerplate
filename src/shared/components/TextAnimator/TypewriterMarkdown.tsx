import React, {useState, useEffect} from 'react';
import Markdown from 'react-native-markdown-display';

interface TypewriterMarkdownProps {
  content?: string;
  speed?: number;
  onFinished?: () => void;
}

const TypewriterMarkdown: React.FC<TypewriterMarkdownProps> = ({
  content = '',
  speed = 20,
  onFinished,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    let previousIndex = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        const newText = content.slice(previousIndex, index);
        setDisplayedText(prev => `${prev}${newText}`);
        previousIndex = index;
        if (index < content.length - 10) {
          index += getRandomNumber(5);
        } else {
          index++;
        }
      } else {
        onFinished?.();
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [onFinished, content, speed]);

  return <Markdown>{displayedText}</Markdown>;
};

export default TypewriterMarkdown;

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}
