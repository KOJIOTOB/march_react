import {useEffect, useState} from "react";
import {getAlbums} from "../../service";
import {AlbumComponent} from "./AlbumComponent";

function AlbumsComponent() {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums().then(value => setAlbums([...value]))
    },[])

    return (
        <div style={{color:'hotpink'}}>
            {
                albums.map(value => <AlbumComponent item={value} key={value.id}/>)
            }
        </div>
    )
}

export {AlbumsComponent}