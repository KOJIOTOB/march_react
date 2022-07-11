import {useEffect, useState} from "react";
import {getTodos} from "../../service";
import {TodoComponent} from "./TodoComponent";

function TodosComponent() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos().then(value => setTodos([...value]))
    }, [])


    return (
        <div style={{color:'goldenrod'}}>
            {
                todos.map(value => <TodoComponent item={value} key={value.id}/>)
            }
        </div>
    )
}

export {TodosComponent}