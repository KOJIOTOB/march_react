import {Link} from "react-router-dom";

function CommentComponent({item}) {

    return (
        <div style={{color:'navajowhite'}}>
            <h4 style={{color:'darkred'}}>{item.id}</h4>
            <h3>{item.name}</h3>
            <h4>{item.email}</h4>
            <p>{item.body}</p>
            <hr/>
            <div style={{display:'flex',
                width:'180px', height:'40px',
                background:'yellow',
                justifyContent:'center',
                alignItems:'center',
                marginLeft:'50px',
                borderRadius:'20px',
                fontSize:'20px',
                fontWeight:'bold'
            }}>
                <Link style={{textDecoration:'none', color:'indianred'}} to={item.postId.toString()}>Открыть Посты</Link>
            </div>
            <hr/>
        </div>
    )
}

export {CommentComponent}