import React from 'react';
import {Container} from "../Layout";
import TodoList from "./components/TodoList";
import "./AppTodoClasses.css"

const AppTodoClasses = () => {
    return (
        <Container>
            <h1 className="text-center">To do app on classes</h1>
            <TodoList />
        </Container>
    )
}

export default AppTodoClasses