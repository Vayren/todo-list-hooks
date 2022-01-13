import uniqid from 'uniqid';
import * as actionTypes from "./actionTypes"

export const addTodo = (title: string) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: uniqid(),
      title,
      status: true
    }
  }
}

export const deleteTodo = (id: string) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: id
  }
}

export const updateTodo = (id: string, title: string) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: {
      id,
      title
    }
  }
}

export const toggleTodo = (id: string) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: id
  }
}
