const todos = [{
    id:1,
    createDate: new Date(2022, 12, 1),
    description: 'Сделай что-нибудь',
    status:{
        id:1,
        name:'Новая'
    }
},
{
    id:2,
    createDate: new Date(2022, 12, 1),
    description: 'Study OpenTelemetry',
    status:{
        id:1,
        name:'Новая'
    }
},
{
    id:3,
    createDate: new Date(2022, 11, 21),
    description: 'Study React JS',
    status:{
        id:2,
        name:'В процессе'
    }
}];

export function TodoListLoader(){
    return todos;
}

export function TodoLoader(request){
    const todo = todos.find((v, index)=>v.id === parseInt(request.params.id));
    return todo;
}