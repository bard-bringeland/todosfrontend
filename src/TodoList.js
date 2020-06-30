import React, {Component} from  'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api'


class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
    }
    
    componentDidMount() {
        this.loadTodos();
        
    }
    

    
    async addTodo(val) {
        let newTodo = await apiCalls.createTodo(val);
        this.setState({
            todos: [
                 ...this.state.todos, 
                newTodo
            ] 
        });
    }
    
    
    async loadTodos() {
        let todos = await apiCalls.getTodos(); //will wait until resolved before moving on (no need for promises)
        this.setState({todos});
    }
    
    async toggleTodo(t) {
        let updatedTodo = await apiCalls.updateTodo(t);
        const todos = this.state.todos.map(t => 
            (t._id === updatedTodo._id) 
            ? {...t, completed: !t.completed}
            : t
        )
        this.setState({
            todos
        });
    }
    
    async onDelete(id) {
        await apiCalls.removeTodo(id); //no need to return anything, but will still await.
        const todos = this.state.todos.filter(t => t._id !== id)
        this.setState({ todos });
    }
    
    render() {
        const todos = this.state.todos.map( (t) => (
            <TodoItem
                key = {t._id}
                {...t}
                onDelete={this.onDelete.bind(this, t._id)}
                onToggle={this.toggleTodo.bind(this, t)}
            />
        ));
        console.log(this.state.todos)
        return(
            <div>
                <h1>Todo List!</h1> 
                <TodoForm 
                    addTodo={this.addTodo}
                />
                <ul
                    >{todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;