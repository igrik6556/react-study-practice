const Button = ({text, classes, handlerClick}) => {
    const newClass = classes ? `btn btn-primary p-3 ${classes}` : "btn btn-primary p-3"
    return (
        <button className={newClass}
                onClick={() => handlerClick()}>
            {text}
        </button>
    )
}

export default Button