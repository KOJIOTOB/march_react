
function Posts ({posts}) {

    return (
        <div className={'posts'}>
            {
                posts.map(value => <div className={'post'}>{value.body}</div>)
            }
        </div>
    )
}
export {Posts}