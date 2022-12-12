import { useLoaderData } from "react-router-dom";

export function ToDo(){
    const todo = useLoaderData();
    return (
    <ul className="form">
        <li>
            <span className="form-label">Идентификатор</span><span>{todo.id}</span>
        </li>
        <li>
            <label for="createDate" className="form-label">Дата создания</label>
            <input id="createDate" name="createDate" type="text" value={todo.createDate} />
        </li>
        <li>
            <label for="description" className="form-label">Описание</label>
            <input id="description" name="description" type="text" value={todo.description} />
        </li>
    </ul>);
}