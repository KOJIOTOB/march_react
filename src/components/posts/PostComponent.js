function PostComponent({item}) {

    return (
        <div style={{background:'darkred', color:'lightblue'}}>
            <hr/>
            <h3>{item.id}</h3>
            <h3>{item.title}</h3>
            <h3>{item.body}</h3>
            <hr/>
        </div>
    )
}

export {PostComponent}