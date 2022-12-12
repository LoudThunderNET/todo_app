import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './error-page';
import {TodoList, ErrorPage as ToDoListErrorPage }from './routes/todo-list';
import {TodoListLoader, TodoLoader} from './data/ToDoStorage'
import Default from './routes/default';
import {ToDo} from './routes/ToDo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      { 
        index: true, 
        element: <Default /> 
      },
      {
        path: "todos",
        element: <TodoList/>,
        loader: TodoListLoader
      },
      {
        path: 'todos/:id',
        errorElement:<ToDoListErrorPage/>,
        element: <ToDo/>,
        loader: TodoLoader
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
