import React from "react";
import "./PokemonButton.css";

const Button = ({ onClick, className, children }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  className: "pokemon-button"
};

export default Button;
