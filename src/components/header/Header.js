import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>Menu</h1>
            <div><Link to={'todos'}>Todos</Link></div>
            <div><Link to={'albums'}>Albums</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    )
}

export {Header}