function User ({item, userButton}) {

    return (
        <div className={'user'}>
            <h4>{item.id}</h4>
            <h3>{item.name}</h3>

            <button onClick={() => userButton(item)}>User Details</button>
        </div>
    )
}

export {User};