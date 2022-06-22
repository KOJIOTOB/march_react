import '../App'

function SimpsonData(props) {
    let {itemName, desc, picture} = props;

    let user = 'card';
    return (
        <div className={user}>
            <h3>{itemName}</h3>
            <h4>{desc}</h4>
            <img src={picture} alt="bart"/>
        </div>


    )
}

export default SimpsonData;