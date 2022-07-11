
function AlbumComponent({item}) {

    return (
        <div>
            <h3>{item.id} - {item.title}</h3>
            <hr/>
        </div>
    )
}

export {AlbumComponent}