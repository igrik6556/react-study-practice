const RadioInlineInput = ({handlerChange, name, id, label, value, stateValue}) => {
    return (
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio"
                   id={id}
                   name={name}
                   value={value}
                   className="custom-control-input"
                   onChange={handlerChange}
                   checked={value === stateValue} />
            <label className="custom-control-label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default RadioInlineInput