import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsBox, ButtonOptions } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBox>
      {options.map(option => (
        <ButtonOptions
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonOptions>
      ))}
    </ButtonsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
