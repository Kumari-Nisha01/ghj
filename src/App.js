import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <TodoList />
            </BrowserRouter>
        );
    }
}

export default App;
