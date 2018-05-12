import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <h2 className="section-title">
    <i className={`fa fa-${props.icon}`} />
    {props.title}
  </h2>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Title;
