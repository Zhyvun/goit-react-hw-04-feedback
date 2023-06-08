import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, SectionName } from './Section.syled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <SectionName>{title}</SectionName>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
