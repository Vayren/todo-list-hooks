import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import ErrorMessage from './ErrorMessage';

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');
    const [showErrorField, setShowErrorField] = useState(false);

    const inputRef = useRef(null);

    const onInputBlur = () => setShowErrorField(false);

    const onAddButtonClick = e => {
        e.preventDefault();
        if (todo !== '') {
            addTodo(todo);
            setShowErrorField(false);
            setTodo('');
        }
        else {
            setShowErrorField(true);
            inputRef.current.focus();
        }
    }

    const showError = isError => {
        return isError ? <ErrorMessage message="Please, enter a task!" /> : null;
    }

    return (
        <div className="from-container">
            <form className="form-add">
                <input
                    className="form-add__input"
                    type="text" value={todo}
                    placeholder="Enter a task..."
                    onChange={e => setTodo(e.target.value)}
                    onBlur={onInputBlur}
                    ref={inputRef}
                />
                <button
                    className="form-add__button"
                    onClick={onAddButtonClick}
                >
                    Add Task
                </button>
            </form>
            <div className="error-message error-message-1">
                {showError(showErrorField)}
            </div>
        </div>
    );

}

export default connect(null, { addTodo })(AddTodo);