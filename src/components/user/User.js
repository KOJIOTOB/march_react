function User ({user, elevate}) {
    const onclick = () => {
        elevate(user.id)
    }
    return (
        <div className={'user'}>
            {user.name}
            <button className={'btn'} onClick={onclick}>Показать 0_0</button>
        </div>
    )

}
export {User}
