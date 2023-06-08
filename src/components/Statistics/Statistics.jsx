import React from 'react';
import PropTypes from 'prop-types';
import { StatsList } from './Statistisics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList>
      <li> Good: {good}</li>
      <li> neutral: {neutral}</li>
      <li> Bad: {bad}</li>
      <li> Total: {total}</li>
      <li> Positive feedback: {positivePercentage}%</li>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
