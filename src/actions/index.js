import uniqid from 'uniqid';

export const addTodo = title => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uniqid(),
            title,
            status: true
        }
    }
}

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const updateTodo = (id, title) => {
    return {
        type: 'UPDATE_TODO',
        payload: {
            id,
            title
        }
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}
