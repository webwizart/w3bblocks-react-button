import React from 'react';
import './w3bButton.css';


const defaults = {
  DISABLED: 'disabled',
  EMPTY_STRING: '',
  PRIMARY: 'primary',
  BUTTON: 'W3bButton',
  BTN: 'btn-',
  DEFAULT_CLASS: 'btn-medium btn-primary'
}
const W3bButton = (props) => {
  let theme, size, disabled, style = undefined;

  const parseStyle = () => {
    props.theme ? theme = defaults.BTN + props.theme : theme = 
      defaults.EMPTY_STRING;
    
    size = props.size ? size = defaults.BTN + props.size : size = 
      defaults.EMPTY_STRING;
    
    disabled = props.disabled ? defaults.DISABLED : defaults.EMPTY_STRING;
    
    style = `${theme} ${size} ${disabled}`;
    
    if (style !== '') {
      return style;
    } else {
      return defaults.DEFAULT_CLASS;
    }
  } 
  
  return (
    <button
      className={`w3bbutton ${parseStyle()}`}
      disabled={props.disabled || false}
      theme={props.theme || defaults.PRIMARY} 
      onClick={props.onClick} 
      experiment={props.experiment || {}}
      >
      {props.value || defaults.BUTTON}   
    </button>
  )
}
export default W3bButton;
