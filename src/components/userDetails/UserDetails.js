function UserDetails({user}) {
    return (
        <div className={'userDetails'}>
            <h4>ID: {user.id}</h4>
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
            <h4>{user.email}</h4>
            <h4>{user.address.street}</h4>
            <h4>{user.address.suite}</h4>
            <h4>{user.address.city}</h4>
            <h4>{user.address.zipcode}</h4>
            <h4>{user.address.geo.lat}</h4>
            <h4>{user.address.geo.lng}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
            <h4>{user.company.name}</h4>
            <h4>{user.company.catchPhrase}</h4>
            <h4>{user.company.bs}</h4>
        </div>
    )
}

export {UserDetails}