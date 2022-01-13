import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import ErrorMessage from './ErrorMessage';

const EditField = ({ id, value, hideEdit, updateTodo }) => {
    const [editValue, setEditValue] = useState(value);
    const [isEmptyField, setIsEmptyField] = useState(false);

    const editField = useRef(null);
    const editBlock = useRef(null);
  
    useEffect(() => {
        editField.current.focus();
    }, []);
    
    const onInputKeyDown = e => {
        if(e.key === 'Enter') confirm();
        else if(e.key === 'Escape') cancel();
    };
    
    const onEditFieldChange = e => {
        setEditValue( e.target.value );
    };
    
    const showError = (status) => {
        return status ? <ErrorMessage message="Please, type something or hit escape!"/> : null;
    };
    
    const confirm = () => {
        if(editValue === '') {
            setIsEmptyField(true);
            editField.current.focus();
        } else {
            setIsEmptyField(false);
            hideEdit();
            updateTodo(id, editValue);
        }
    };

    const cancel = () => {
        setIsEmptyField(false);
        hideEdit();
    }
    
    return (
        <div className="edit-container" ref={editBlock}>
            <div className="edit-container__inner">
                <input 
                    className="list__item-text edit-field" 
                    value={ editValue } 
                    ref={ editField }
                    onChange={ onEditFieldChange }
                    onKeyDown={ onInputKeyDown }
                />
                <div className="edit-field__toolbar">
                    <button className="btn btn-confirm" onClick={ confirm }>
                        <FontAwesomeIcon icon={ faCheckCircle }/>
                    </button>
                    <button className="btn btn-cancel" onClick={ cancel }>
                        <FontAwesomeIcon icon={ faTimesCircle }/>
                    </button>
                </div>
            </div>
            <div className="error-message error-message-2">
                { showError(isEmptyField) }
            </div>
        </div>
    );
}

export default EditField;