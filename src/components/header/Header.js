import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>Menu</h1>
            <div style={{
                marginLeft:'30px',
                width:'450px',
                display:'flex',
            justifyContent:'space-between'}}>
                <div><Link style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    textDecoration:'none',
                    width:'100px',
                    height:'30px',
                    background:'goldenrod',
                    borderRadius:'10px',
                    fontWeight:'bold',
                    color:'black'
                }}
                           to={'todos'}>Todos</Link></div>
                <div><Link style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    textDecoration:'none',
                    width:'100px',
                    height:'30px',
                    background:'goldenrod',
                    borderRadius:'10px',
                    fontWeight:'bold',
                    color:'black'
                }}
                    to={'albums'}>Albums</Link></div>
                <div><Link style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    textDecoration:'none',
                    width:'100px',
                    height:'30px',
                    background:'goldenrod',
                    borderRadius:'10px',
                    fontWeight:'bold',
                    color:'black'
                }}
                    to={'comments'}>Comments</Link></div>
                <div><Link style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    textDecoration:'none',
                    width:'100px',
                    height:'30px',
                    background:'darkred',
                    borderRadius:'10px',
                    fontWeight:'bold',
                    color:'white'
                }}

                    to={'/'}>На Главную</Link></div>
            </div>



        </div>
    )
}

export {Header}