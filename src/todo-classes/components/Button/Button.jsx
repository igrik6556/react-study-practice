import React from "react";

const Button = ({handlerClick, text, ...props}) => {

    const classes = props.classes ? props.classes : 'btn btn-primary'

    return (
        <button
            type="button"
            className={classes}
            onClick={handlerClick}
        >
            {text}
        </button>
    )
}

export default Button