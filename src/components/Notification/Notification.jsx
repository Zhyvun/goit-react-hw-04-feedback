import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from './Notification.styled';

export const Notification = ({ alert }) => {
  return <Alert> {alert}</Alert>;
};

Notification.propTypes = {
  alert: PropTypes.string.isRequired,
};
