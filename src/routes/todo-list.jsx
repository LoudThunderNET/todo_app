import { Link, useLoaderData, useRouteError } from "react-router-dom";

export function TodoList()
{
    const list = useLoaderData();
    const rows = list.map((todo, index)=> <TodoRow key={todo.id} todo={todo}/>);
    return (
        <table className="todo-list">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Дата</th>
                    <th>Задание</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

function TodoRow(props){
    return(<tr key={props.todo.id}>
        <td><Link to={`/todos/${props.todo.id}`}>{props.todo.id}</Link></td>
        <td>{props.todo.createDate.toLocaleDateString()}</td>
        <td className="description"><Link to={`/todos/${props.todo.id}`}>{props.todo.description}</Link></td>
        <td>{props.todo.status.name}</td>
    </tr>);
}
export function ErrorPage(){
    const error = useRouteError();
    return(    
    <div id="error-page">
    <h1>Oops!</h1>
    <p>Неожиданно возникла ошибка.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>);
}