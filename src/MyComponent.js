import { Component } from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      <div>Hello, my name is {name}.</div>
      <div>children value is {children}.</div>
      <div>favorite number is {favoriteNumber}.</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "Default",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
