import React from 'react';

const FeedbackOption = ({ option, onLeaveFeedback }) => (
  <div>
    <button class="feedback-button" onClick={() => onLeaveFeedback(option)}>{option}</button>
  </div>
);

export default FeedbackOption;
