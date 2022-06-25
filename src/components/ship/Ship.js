function Ship ({item: {mission_name, launch_year, links:{mission_patch_small}}}) {
    return (
        <div className={'rocket'}>
            <h3>{mission_name}</h3>
            <h4>{launch_year}</h4>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    )
}

export {Ship};