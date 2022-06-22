import '../App.css'

function Person(props) {
    let {id, name, status, species, gender, image} = props;

    let user = 'user';
    return (
<div className={user}>
    <h5>{id}</h5>
    <h3>{name}</h3>
    <h4>{status}</h4>
    <h4>{species}</h4>
    <h4>{gender}</h4>
    <img src={image} alt="hero"/>
</div>
    )
}

export default Person;