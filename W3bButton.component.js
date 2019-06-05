import React from 'react';
import './W3bButton.css';

const defaults = {
    DISABLED: 'disabled',
    EMPTY_STRING: '',
    PRIMARY: 'primary',
    BUTTON: 'button',
    BTN: 'btn-',
    DEFAULT_CLASS: 'btn-medium btn-primary'
}
const W3bButton = (props) => {
    let type, size, disabled, style = undefined;

    const parseStyle = () => {
        props.type ? type = defaults.BTN + props.type : type =
            defaults.EMPTY_STRING;
        size = props.size ? size = defaults.BTN + props.size : size =
            defaults.EMPTY_STRING;
        disabled = props.disabled ? defaults.DISABLED : defaults.EMPTY_STRING;
        style = `${type} ${size} ${disabled}`;
        if (style !== '  ') {
            return style;
        } else {
            return defaults.DEFAULT_CLASS;
        }
    }

    return (
        <button
            className={(`${parseStyle()}`)}
            disabled={props.disabled || false}
            type={props.type || defaults.PRIMARY} >
            {props.value || defaults.BUTTON}
        </button>
    )
}
export default W3bButton;
