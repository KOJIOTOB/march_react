
function PostComponent({item}) {

    return (
        <div>
            <h4>{item.id}</h4>
            <h3>{item.body}</h3>
            <h3>{item.title}</h3>
        </div>
    )
}

export {PostComponent}