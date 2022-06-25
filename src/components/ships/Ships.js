import {useEffect, useState} from "react";
import {Ship} from "../ship/Ship";

function Ships () {

    const [ships, setShips] = useState([]);

    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setShips(value.filter(value => value.launch_year !== '2020')))
    }, []);

    return (
        <div>
            {
                ships.map((ship, index) => <Ship key={index} item={ship}/> )
            }
        </div>
    )
}

export {Ships};