import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = ({ todoList }) => {
    /*const restoreDate = () => {
        return JSON.parse(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
    }*/

    const getDate = () =>  {
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
    
        return `${days[now.getDay()]}, ${month[now.getMonth()]} ${now.getDate()}`;
    }

    const renderTodoList = () => {
        return todoList.length ? <TodoList todoList={ todoList }/> : null;
    }
    
    /*const persistData = () => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }*/
    
    //Set data to local storage before rendering(setTodoList ect.)
    //persistData();

    return (
        <div className="app-container">
            <div className="header">
                <h2 className="header__date">{getDate()}</h2>
                <p className="header__activities">{`${todoList.filter( item => item.status).length} Active Tasks`}</p> 
            </div>
            <AddTodo/>
            { renderTodoList() }
        </div>  
    )

}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

export default connect( mapStateToProps )(App);