import React from 'react';
import FeedbackOption from './FeedbackOption';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div class="feedback-options-container">
    {options.map((option) => (
      <FeedbackOption key={option} option={option} onLeaveFeedback={onLeaveFeedback} />
    ))}
  </div>
);

export default FeedbackOptions;
