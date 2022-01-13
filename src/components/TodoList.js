import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => {

    const renderList = list => {
        return list.map( item => {
            return (
            < TodoItem 
                itemId={item.id} 
                checked={item.status} 
                title={item.title} 
                key={item.id}
            />
            );
        });
    };

    return (
        <div className="list">
           {renderList(todoList)}
        </div>
    );
};

export default TodoList;