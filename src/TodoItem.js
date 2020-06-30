import React from 'react';

const TodoItem = ({name, completed, onToggle, onDelete}) => (
    <li>
        <span
             style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}
            onClick={onToggle}
            >
            {name} 
        </span>
        <span onClick={onDelete}> X </span>
    </li>
)

export default TodoItem;