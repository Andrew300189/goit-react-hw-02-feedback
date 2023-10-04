import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
      type="button"
      className="feedback-btn"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
    ))}
  </div>
);

export default FeedbackOptions;
