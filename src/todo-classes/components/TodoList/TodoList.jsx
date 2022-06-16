import React from 'react'
import TodoItem from "../TodoItem";

class TodoList extends React.Component {
    state = {
        todos: [
            {id: 1, title: 'Learn React JS', done: false, important: false},
            {id: 2, title: 'Wake up at 7 oclock', done: true, important: false},
            {id: 3, title: 'Do exercises', done: false, important: true}
        ]
    }

    handlerChangeState = (id, state) => {
        this.setState(({todos}) => {
            return {
                todos: todos.map((todo) => todo.id === id ? {...todo, [state]: !todo[state]} : todo)
            }
        })
    }

    handlerDelete = (id) => {
        this.setState(({todos}) => {
            const newTodos = todos.filter((todo) => todo.id !== id)
            return {todos: newTodos}
        })
    }

    render() {
        const {todos} = this.state
        const todoList = todos.map((todo) => {
            return <TodoItem key={todo.id}
                             {...todo}
                             handlerChangeState={this.handlerChangeState}
                             handlerDelete={this.handlerDelete}/>
        })

        return todoList
    }
}

export default TodoList