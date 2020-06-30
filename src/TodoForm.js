import React, {Component} from  'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
        this.handleType = this.handleType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    
    handleType(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    
    handleSubmit() {
        this.props.addTodo(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }
    
    handleKeyDown(e) {
        if(e.key === 'Enter') {
            this.handleSubmit();
        }
    }
    
    render() {
        return(
            <div>
                <input 
                    type='text'
                    value={this.state.inputValue}
                    placeholder='New todo'
                    onChange={this.handleType}
                    onKeyDown={this.handleKeyDown}
                    autoFocus
                />
                <button
                    onClick={this.handleSubmit}
                    > Add Todo
                </button>
            </div>
        );
    }
}

export default TodoForm;