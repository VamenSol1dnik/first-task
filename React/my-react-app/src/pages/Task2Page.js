import React from 'react';
import CensoredText from '../components/CensoredText/CensoredText';

function Task2Page() {
  const badWords = ['bad', 'test'];
  const someText = 'Very long text which contains bad and test words';

  return (
    <div>
      <CensoredText badWords={badWords} text={someText} />
    </div>
  );
}

export default Task2Page;