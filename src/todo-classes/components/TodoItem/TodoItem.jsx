import React from 'react'

import Button from "../Button/Button";

const TodoItem = ({id, title, done, important, handlerChangeState, handlerDelete}) => {
    let classes = ''
    classes += done ? ' text-line-through' : ''
    classes += important ? ' font-weight-bold text-primary' : ''

    return (
        <div className="d-flex align-items-center border-bottom py-2">
            <span className={classes}>{title}</span>
            <Button
                text="Important"
                handlerClick={() => handlerChangeState(id, 'important')}
                classes="btn btn-primary ml-auto" />
            <Button
                text="Done"
                handlerClick={() => handlerChangeState(id, 'done')}
                classes="btn btn-warning ml-3" />
            <Button
                text="Delete"
                handlerClick={() => handlerDelete(id)}
                classes="btn btn-danger ml-3" />
        </div>
    )
}

export default TodoItem