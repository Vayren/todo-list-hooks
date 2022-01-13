import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from '../store/actionCreators';
import EditField from './EditField';

const TodoItem = ({ itemId, checked, title, deleteTodo, updateTodo, toggleTodo }) => {
    const [isEdit, setIsEdit] = useState(false);

    const titleRef = useRef(null);

    const showEdit = () => {
        setIsEdit(true);
    }

    const hideEdit = () => {
        setIsEdit(false);
    }

    return (
        <div className="list__item" key={itemId}>

            <div className="list__item-title">
                <label
                    className={`btn btn-checked ${checked ? '' : 'checked'}`}
                    htmlFor="check"
                    onClick={() => toggleTodo(itemId)}
                >
                    <FontAwesomeIcon icon={faCheckCircle} />
                </label>
                <input type="checkbox" id="check" className="list__input-checkbox" />

                {isEdit ?
                    <EditField value={title} id={itemId} updateTodo={updateTodo} hideEdit={hideEdit} /> :

                    <span className={`list__item-text ${checked ? '' : 'line-through'} ${isEdit ? 'unvisible' : ''}`}
                        ref={titleRef}
                    >
                        {title}
                    </span>
                }

            </div>

            <div className="list__item-toolbar">
                <button className={`btn btn-edit ${isEdit ? 'unvisible' : ''}`} onClick={showEdit}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button className="btn btn-delete" onClick={() => deleteTodo(itemId)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>

        </div>
    );

}

export default connect(null, { deleteTodo, updateTodo, toggleTodo })(TodoItem);